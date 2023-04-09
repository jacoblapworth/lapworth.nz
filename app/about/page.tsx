import { Metadata } from 'next'

import { getMusicWithThumbnails } from '@/app/about/music'

import AboutPage from './about'

export const metadata: Metadata = {
  title: 'Senior design systems product designer',
  description: `Hey there! I'm J. I'm a product designer and software engineer focussed on community driven design systems.`,
}

export default async function Page() {
  const music = await getMusicWithThumbnails()
  return <AboutPage music={music} />
}
