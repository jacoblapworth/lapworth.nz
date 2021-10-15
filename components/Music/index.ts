import { SignJWT } from 'jose/jwt/sign'
import { importPKCS8 } from 'jose/key/import'
import got from 'got'

import { config } from '@/config/constants'

const { APPLE_MUSIC_PRIVATE_KEY, APPLE_TEAM_ID, APPLE_MUSIC_KEY_ID } = config

export const createAppleJWT = async () => {
  const ALGORITHM = 'ES256'
  const ecPrivateKey = await importPKCS8(APPLE_MUSIC_PRIVATE_KEY, ALGORITHM)

  return (
    new SignJWT({})
      .setProtectedHeader({
        alg: ALGORITHM,
        kid: APPLE_MUSIC_KEY_ID,
      })
      .setIssuedAt()
      // .setAudience('https://appleid.apple.com')
      // .setSubject('services.nz.lapworth.www')
      .setIssuer(APPLE_TEAM_ID)
      .setExpirationTime('180days')
      .sign(ecPrivateKey)
  )
}

export const appleMusicClient = got.extend({
  prefixUrl: 'https://api.music.apple.com',
  // resolveBodyOnly: true,
  responseType: 'json',
  hooks: {
    beforeRequest: [
      async (options) => {
        const token = await createAppleJWT()
        options.headers['Authorization'] = `Bearer ${token}`
        options.headers[
          'Music-User-Token'
        ] = `AkEeoNikcPyYSL/mc8meiTKq69zFGxkM9wpcu99Q2rjU7cQuTrsOpbPpYM8rHJsx2izYZwVvnXpVQLKqNmRnCkuKvng9W4cnzqr5xp0dL1rqH5aCPiWg77Irfjb4wOQiHXaM6qTchi7e+T5gdkf+IdVCDBdqD7TheXLGPg7v1d84z/Keff9jTO+/iSZDJmSM6eq2Pz8WC8e8+LKT8ASDU6X/uGJZsVAXaKE7r+cG2i3Ks5lIjA==`
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
}

interface MusicKitArtwork {
  height: number | null
  width: number | null
  url: string
}

export const getMusic = async () => {
  const token = await createAppleJWT()

  try {
    const music = await appleMusicClient.get<RMusicKitHistory>(
      'v1/me/history/heavy-rotation',
    )

    return music.body.data
  } catch (error) {
    console.error(error)
    return []
  }
}
