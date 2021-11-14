import NextImage from 'next/image'

import { getMusic, MusicEndpoint, MusicKitResource } from '@/components/Music'
import { HeavyRotation } from '@/components/Music/HeavyRotation'
import { css } from '@/styles'

import { GetStaticProps } from './_app'

const Profile = css('div', {
  borderRadius: '60px',
})

interface PageProps {
  music: MusicKitResource[]
}

export default function About({ music }: PageProps) {
  return (
    <>
      <NextImage
        src="/static/j-photo-mono.png"
        height={128}
        width={128}
        className={Profile()}
      />
      <p>Hey there! I'm J, </p>
      <HeavyRotation music={music} />
    </>
  )
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const music = await getMusic(MusicEndpoint.RECENT)

  return {
    props: {
      title: 'About',
      music,
    },
  }
}
