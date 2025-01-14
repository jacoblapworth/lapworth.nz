import * as Sentry from '@sentry/nextjs'
import { Metadata } from 'next'

import { createAppleJWT } from '@/app/about/music'

import { Authorise } from './authorise'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default async function Page() {
  try {
    const token = await createAppleJWT()

    return <Authorise developerToken={token} />
  } catch (error) {
    Sentry.captureException(error)
    console.error(error)

    return null
  }
}
