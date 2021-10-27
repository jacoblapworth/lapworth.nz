const {
  APPLE_MUSIC_PRIVATE_KEY,
  APPLE_TEAM_ID,
  APPLE_MUSIC_KEY_ID,
  GOOGLE_MEASUREMENT_ID,
} = process.env

if (!APPLE_TEAM_ID) {
  throw new Error('Provide an Apple team ID')
}

if (!APPLE_MUSIC_KEY_ID) {
  throw new Error('Provide an Apple Music key ID')
}

if (!APPLE_MUSIC_PRIVATE_KEY) {
  throw new Error('Provide an Apple Music private key')
}

if (!GOOGLE_MEASUREMENT_ID) {
  throw new Error('Provide a Google Tag Manager ID')
}

export const config = {
  APPLE_MUSIC_PRIVATE_KEY,
  APPLE_TEAM_ID,
  APPLE_MUSIC_KEY_ID,
  GOOGLE_MEASUREMENT_ID,
}
