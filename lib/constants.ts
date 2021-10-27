const { GOOGLE_MEASUREMENT_ID } = process.env

if (!GOOGLE_MEASUREMENT_ID) {
  throw new Error('Provide a Google Tag Manager ID')
}

export const config = {
  GOOGLE_MEASUREMENT_ID,
}
