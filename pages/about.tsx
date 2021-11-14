import NextImage from 'next/image'

import { getMusic, MusicEndpoint, MusicKitResource } from '@/components/Music'
import { HeavyRotation } from '@/components/Music/HeavyRotation'
import Text from '@/components/Text'
import { styled } from '@/styles'

import { GetStaticProps } from './_app'

const Profile = styled(NextImage, {
  borderRadius: '50%',
})

interface PageProps {
  music: MusicKitResource[]
}

export default function About({ music }: PageProps) {
  const size = 72
  return (
    <>
      <Text size="xlarge" display>
        Hey there! I&apos;m J{' '}
        <Profile src="/static/j-photo-mono.png" height={size} width={size} />
      </Text>

      <Text size="large" display>
        I&apos;m a product designer and software engineer focussed on community
        driven design systems.
      </Text>

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
    revalidate: 60 * 60 * 24, // 1 day ,
  }
}
