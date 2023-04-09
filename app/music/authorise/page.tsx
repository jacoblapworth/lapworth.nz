import { createAppleJWT } from '@/app/about/music'

import Authorise from './authorise'

export default async function Page() {
  const token = await createAppleJWT()
  return <Authorise developerToken={token} />
}
