import { importPKCS8, SignJWT } from 'jose'
import { cacheLife, cacheTag } from 'next/cache'
import type { StaticImageData } from 'next/image'
import { z } from 'zod'
import { env } from '@/lib/env'
import { captureException } from '@/lib/error'
import { getImageMetadata } from './image'

export async function createAppleJWT() {
  'use cache'
  const ALGORITHM = 'ES256'
  const ecPrivateKey = await importPKCS8(env.APPLE_MUSIC_PRIVATE_KEY, ALGORITHM)

  return new SignJWT({})
    .setProtectedHeader({
      alg: ALGORITHM,
      kid: env.APPLE_MUSIC_KEY_ID,
    })
    .setIssuedAt()
    .setIssuer(env.APPLE_TEAM_ID)
    .setExpirationTime('180days')
    .sign(ecPrivateKey)
}

export const MusicKitError = z.object({
  code: z.string(),
  detail: z.string(),
  id: z.string(),
  status: z.string(),
  title: z.string(),
})

export const MusicKitErrorResponse = z.object({
  errors: z.array(MusicKitError).optional(),
})

export const MusicKitArtwork = z.object({
  bgColor: z.string().nullish(),
  height: z.number().nullable(),
  textColor1: z.string().nullish(),
  textColor2: z.string().nullish(),
  textColor3: z.string().nullish(),
  textColor4: z.string().nullish(),
  url: z.url(),
  width: z.number().nullable(),
})

export type MusicKitArtwork = z.infer<typeof MusicKitArtwork>

export const MusicKitAttributes = z.object({
  artistName: z.string().optional(),
  artwork: MusicKitArtwork,
  canEdit: z.boolean().default(false),
  dateAdded: z.coerce.date().optional(),
  hasCatalog: z.boolean().default(false),
  isPublic: z.boolean().default(false),
  name: z.string(),

  playParams: z.object({
    id: z.string(),
    isLibrary: z.boolean().default(false),
    kind: z.string(),
  }),
  url: z.string(),
})

export type MusicKitAttributes = z.infer<typeof MusicKitAttributes>

export const MusicKitResource = z.object({
  attributes: MusicKitAttributes,
  href: z.string(),
  id: z.string(),
  type: z.union([
    z.enum(['stations', 'library-playlists', 'playlists', 'albums']),
    z.string(),
  ]),
})

export type MusicKitResource = z.infer<typeof MusicKitResource>

export const MusicKitHistory = z.object({
  data: z.array(MusicKitResource),
})

export type MusicKitHistory = z.infer<typeof MusicKitHistory>

export class MKError extends Error {
  id: string
  code: number
  status: number

  constructor({
    title,
    detail,
    code,
    status,
    id,
  }: z.infer<typeof MusicKitError>) {
    super('MusicKitError')
    this.name = 'MusicKitError'
    this.message = `${title} [${code}] ${detail}`
    this.id = id
    this.code = parseInt(code, 10)
    this.status = parseInt(status, 10)
  }
}

export enum MusicEndpoint {
  RECENT = 'v1/me/recent/played',
  RECENT_TRACKS = 'v1/me/recent/played/tracks',
  HEAVY_ROTATION = 'v1/me/history/heavy-rotation',
}

export function formatArtworkUrl(
  artwork: MusicKitArtwork,
  size: number,
): string {
  const url = decodeURI(artwork.url)
  const h = (size || artwork.height) ?? 100
  const w = (size || artwork.width) ?? 100

  return url
    .replace('{h}', `${h}`)
    .replace('{w}', `${w}`)
    .replace('{f}', 'jpeg')
}

export async function getMusic(endpoint: MusicEndpoint) {
  const response = await fetch(`https://api.music.apple.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${await createAppleJWT()}`,
      'Music-User-Token': env.APPLE_MUSIC_USER_TOKEN,
    },
    next: { revalidate: 60 * 60 * 24 },
  }).then((res) => res.json())

  const music = MusicKitHistory.parse(response)

  return music.data
}

async function getMusicWithThumbnail(item: MusicKitResource) {
  const src = formatArtworkUrl(item.attributes.artwork, 128 * 2)
  const thumbnail = await getImageMetadata(src)

  return {
    ...item,
    thumbnail,
  } satisfies MusicKitResource & { thumbnail: StaticImageData }
}

export async function getMusicWithThumbnails() {
  'use cache'
  cacheLife('days')
  cacheTag('music')
  try {
    const response = await getMusic(MusicEndpoint.RECENT)
    const music = await Promise.all(response.map(getMusicWithThumbnail))

    return music
  } catch (error) {
    captureException(error)
    console.error(error)
    if (error instanceof MKError) {
      if (error.status === 403) {
        console.info('Visit /music/authorise to refresh Apple Music token')
      }
    }

    return null
  }
}
