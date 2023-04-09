import { Metadata } from 'next'

import { createAppleJWT } from '@/app/about/music'

import Authorise from './authorise'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default async function Page() {
  const token = await createAppleJWT()
  return <Authorise developerToken={token} />
}
