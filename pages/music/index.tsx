import { GetStaticProps } from 'next'

import { getMusic, MusicEndpoint, MusicKitResource } from '@/components/Music'
import { HeavyRotation } from '@/components/Music/HeavyRotation'

interface PageProps {
  music: MusicKitResource[]
}

export default function Home({ music }: PageProps) {
  return <HeavyRotation music={music} />
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const music = await getMusic(MusicEndpoint.RECENT)

  return {
    props: {
      music,
    },
  }
}
