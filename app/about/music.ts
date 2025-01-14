import * as Sentry from '@sentry/nextjs'
import { SignJWT, importPKCS8 } from 'jose'
import { getPlaiceholder } from 'plaiceholder'
import { z } from 'zod'

const APPLE_MUSIC_PRIVATE_KEY = process.env.APPLE_MUSIC_PRIVATE_KEY
const APPLE_TEAM_ID = process.env.APPLE_TEAM_ID
const APPLE_MUSIC_KEY_ID = process.env.APPLE_MUSIC_KEY_ID
const APPLE_MUSIC_USER_TOKEN = process.env.APPLE_MUSIC_USER_TOKEN

export const createAppleJWT = async () => {
  const ALGORITHM = 'ES256'
  const ecPrivateKey = await importPKCS8(APPLE_MUSIC_PRIVATE_KEY, ALGORITHM)

  return new SignJWT({})
    .setProtectedHeader({
      alg: ALGORITHM,
      kid: APPLE_MUSIC_KEY_ID,
    })
    .setIssuedAt()
    .setIssuer(APPLE_TEAM_ID)
    .setExpirationTime('180days')
    .sign(ecPrivateKey)
}

const MusicKitResource: z.ZodType<MusicKitResource> = z.any()

const RMusicKitHistory = z.object({
  data: z.array(MusicKitResource),
})

const MusicKitError = z.object({
  code: z.string(),
  detail: z.string(),
  id: z.string(),
  status: z.string(),
  title: z.string(),
})

const MusicKitErrorResponse = z.object({
  errors: z.array(MusicKitError),
})

export interface MusicKitResource {
  attributes: MusicKitAttributes
  href: string
  id: string
  type: 'stations' | 'library-playlists' | 'playlists'
}

interface MusicKitAttributes {
  artwork: MusicKitArtwork
  placeholder: string
  canEdit: boolean
  dateAdded: string
  hasCatalog: boolean
  isPublic: boolean
  name: string
  playParams: {
    id: string
    isLibrary: boolean
    kind: string
  }
  url: string
  artistName?: string
}

interface MusicKitArtwork {
  height: number | null
  width: number | null
  url: string
}

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
    this.code = parseInt(code)
    this.status = parseInt(status)
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
    .replace('{h}', '' + h)
    .replace('{w}', '' + w)
    .replace('{f}', 'jpeg')
}

export const getMusic = async (endpoint: MusicEndpoint) => {
  const response = await fetch(`https://api.music.apple.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${await createAppleJWT()}`,
      'Music-User-Token': APPLE_MUSIC_USER_TOKEN,
    },
    next: { revalidate: 60 * 60 * 24 },
  }).then((res) => res.json())

  const music = RMusicKitHistory.safeParse(response)

  if (music.success) {
    return music.data.data
  } else {
    const errors = MusicKitErrorResponse.parse(response)
    throw new MKError(errors.errors[0])
  }
}

const getMusicWithThumnail = async (
  item: MusicKitResource,
): Promise<MusicKitResource | undefined> => {
  try {
    const src = formatArtworkUrl(item.attributes.artwork, 24)
    const image = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer()),
    )
    const placeholder = await getPlaiceholder(image)
    
return {
      ...item,
      attributes: {
        ...item.attributes,
        placeholder: placeholder.base64,
      },
    }
  } catch (error) {
    Sentry.captureException(error)
    console.error(error)
    console.log(item)
    
return undefined
  }
}

export const getMusicWithThumbnails = async () => {
  try {
    const response = await getMusic(MusicEndpoint.RECENT)
    const promises = response.map(getMusicWithThumnail)
    const thumbnails = await Promise.allSettled(promises)
    const music = thumbnails
      .map((v) => v.status == 'fulfilled' && v.value)
      .filter(Boolean)

    return music
  } catch (error) {
    Sentry.captureException(error)
    console.error(error)
    if (error instanceof MKError) {
      if (error.status === 403) {
        console.info('Visit /music/authorise to refresh Apple Music token')
      }
    }

    return null
  }
}
