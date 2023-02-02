import got, { HTTPError } from 'got'
import { SignJWT, importPKCS8 } from 'jose'
import { getPlaiceholder } from 'plaiceholder'

const APPLE_MUSIC_PRIVATE_KEY = process.env.APPLE_MUSIC_PRIVATE_KEY || ''
const APPLE_TEAM_ID = process.env.APPLE_TEAM_ID || ''
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

export const appleMusicClient = got.extend({
  prefixUrl: 'https://api.music.apple.com',
  responseType: 'json',
  hooks: {
    beforeRequest: [
      async (options) => {
        const jwt = await createAppleJWT()
        options.headers['Authorization'] = `Bearer ${jwt}`
        options.headers['Music-User-Token'] = APPLE_MUSIC_USER_TOKEN
      },
    ],
  },
})

interface RMusicKitHistory {
  data: MusicKitResource[]
}

export interface MusicKitResource {
  attributes: MusicKitAttributes
  href: string
  id: string
  type: 'stations' | 'library-playlists' | 'playlists'
}

interface MusicKitError {
  code: string
  detail: string
  id: string
  status: string
  title: string
}

interface MusicKitErrorResponse {
  errors: MusicKitError[]
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

  constructor(
    { title, detail, code, status, id }: MusicKitError,
    options?: ErrorOptions,
  ) {
    super('MusicKitError', options)
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

export const buildImageUrl = (_url: string, size: number): string => {
  const url = decodeURI(_url)
  const src = url.replace('{w}x{h}', `${size * 2}x${size * 2}`)
  const proxiedSrc = `https://lapworth.nz/api/images?url=${encodeURIComponent(
    src,
  )}`

  return proxiedSrc
}

export const getMusic = async (endpoint: MusicEndpoint) => {
  try {
    const music = await appleMusicClient.get(endpoint).json<RMusicKitHistory>()
    return music.data
  } catch (error) {
    if (error instanceof HTTPError) {
      const response = error.response.body as MusicKitErrorResponse
      const mkError = response.errors[0]

      throw new MKError(mkError, { cause: error })
    } else {
      throw error
    }
  }
}

const getMusicWithThumnail = async (
  item: MusicKitResource,
): Promise<MusicKitResource | undefined> => {
  try {
    const src = buildImageUrl(item.attributes.artwork.url, 24)
    const image = await getPlaiceholder(src)
    return {
      ...item,
      attributes: {
        ...item.attributes,
        placeholder: image.base64,
      },
    }
  } catch (error) {
    console.error(error)
    console.log(item)
    return undefined
  }
}

export const getMusicWithThumbnails = async () => {
  try {
    const response = await getMusic(MusicEndpoint.RECENT)
    const music = (
      await Promise.all(response.map((item) => getMusicWithThumnail(item)))
    ).filter(Boolean) as MusicKitResource[]

    return music
  } catch (error) {
    console.error('Apple Music error:\n', error)
    if (error instanceof MKError) {
      if (error.status === 403) {
        console.info('Visit /music/authorise to refresh Apple Music token')
      }
    }

    return null
  }
}
