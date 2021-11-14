import got from 'got'
import { SignJWT, importPKCS8 } from 'jose'

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
        options.headers['Authorization'] = `Bearer ${await createAppleJWT()}`
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

interface MusicKitAttributes {
  artwork: MusicKitArtwork
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

export enum MusicEndpoint {
  RECENT = 'v1/me/recent/played',
  RECENT_TRACKS = 'v1/me/recent/played/tracks',
  HEAVY_ROTATION = 'v1/me/history/heavy-rotation',
}

export const getMusic = async (endpoint: MusicEndpoint) => {
  try {
    const music = await appleMusicClient.get(endpoint).json<RMusicKitHistory>()
    return music.data
  } catch (error) {
    console.error(error)
    return []
  }
}
