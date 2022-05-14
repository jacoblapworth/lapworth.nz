import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import NextImage from 'next/image'

import { getMusicWithThumbnails, MusicKitResource } from '@/components/Music'
import { HeavyRotation } from '@/components/Music/HeavyRotation'
import Text from '@/components/Typography/Text'
import ProfileImage from '@/public/static/j-photo-mono.png'
import { styled } from '@/styles'

import { GetStaticProps } from './_app'

const Profile = styled('div', {
  display: 'inline-flex',
  borderRadius: '50%',
  overflow: 'hidden',
  marginInlineStart: '0.2em',
  height: '0.75em',
  width: '0.75em',
  border: '1px solid transparent',
  '&:hover': {
    borderColor: '$divider',
  },
})

const NoWrap = styled('span', {
  whiteSpace: 'nowrap',
})

interface PageProps {
  music?: MusicKitResource[]
}

const seoDescription = `Hey there! I'm J. I'm a product designer and software engineer focussed on community driven design systems.`

export const About: NextPage<PageProps> = ({ music }) => {
  return (
    <>
      <NextSeo description={seoDescription} />
      <Text size="xlarge" display>
        Hey there!{' '}
        <NoWrap>
          I&apos;m J
          <Profile>
            <NextImage
              src={ProfileImage}
              quality={100}
              layout="intrinsic"
              placeholder="blur"
              priority
            />
          </Profile>
        </NoWrap>
      </Text>

      <Text size="large" display>
        I&apos;m a product designer and software engineer focussed on community
        driven design systems.
      </Text>

      {music && music.length > 0 && <HeavyRotation music={music} />}
    </>
  )
}

export default About

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const music = await getMusicWithThumbnails()

  return {
    props: {
      title: 'About',
      music,
    },
    revalidate: music
      ? 60 * 60 * 24 // 1 day
      : 60 * 60, // 1 hour
  }
}
