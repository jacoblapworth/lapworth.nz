const APPLE_MUSIC_PRIVATE_KEY = process.env.APPLE_MUSIC_PRIVATE_KEY
const APPLE_TEAM_ID = process.env.APPLE_TEAM_ID
const APPLE_MUSIC_KEY_ID = process.env.APPLE_MUSIC_KEY_ID
const APPLE_MUSIC_USER_TOKEN = process.env.APPLE_MUSIC_USER_TOKEN
const GOOGLE_MEASUREMENT_ID = process.env.GOOGLE_MEASUREMENT_ID

if (!APPLE_TEAM_ID) {
  throw new Error('Provide an Apple team ID')
}

if (!APPLE_MUSIC_KEY_ID) {
  throw new Error('Provide an Apple Music key ID')
}

if (!APPLE_MUSIC_PRIVATE_KEY) {
  throw new Error('Provide an Apple Music private key')
}

if (!APPLE_MUSIC_USER_TOKEN) {
  throw new Error('Provide an Apple Music user token, go to /music/authorise')
}

if (!GOOGLE_MEASUREMENT_ID) {
  throw new Error('Provide a Google Tag Manager ID')
}

export const config = {
  APPLE_MUSIC_PRIVATE_KEY,
  APPLE_TEAM_ID,
  APPLE_MUSIC_KEY_ID,
  APPLE_MUSIC_USER_TOKEN,
  GOOGLE_MEASUREMENT_ID,
}
