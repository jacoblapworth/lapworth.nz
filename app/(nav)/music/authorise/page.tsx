import { Metadata } from 'next'

import Authorise from './authorise'
import { createAppleJWT } from '../../about/music'

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
    console.error(error)
    return null
  }
}
