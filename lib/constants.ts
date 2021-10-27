let { GOOGLE_MEASUREMENT_ID } = process.env

if (process.env.NODE_ENV !== 'production') {
  GOOGLE_MEASUREMENT_ID = ''
}

if (!GOOGLE_MEASUREMENT_ID) {
  throw new Error('Provide a Google Tag Manager ID: GOOGLE_MEASUREMENT_ID')
}

export const config = {
  GOOGLE_MEASUREMENT_ID,
}
