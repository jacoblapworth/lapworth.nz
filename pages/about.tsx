import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import NextImage from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

import {
  getMusic,
  MKError,
  MusicEndpoint,
  MusicKitResource,
} from '@/components/Music'
import { buildImageUrl, HeavyRotation } from '@/components/Music/HeavyRotation'
import Text from '@/components/Text'
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
    border: '1px dashed $divider',
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
              aria-label="Photo of Jacob"
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
  try {
    const response = await getMusic(MusicEndpoint.RECENT)
    const music = (
      await Promise.all(
        response.map(async (item) => {
          try {
            const src = buildImageUrl(item.attributes.artwork.url, 24)
            const image = await getPlaiceholder(src)

            return {
              ...item,
              attributes: {
                ...item.attributes,
                placeholder: image.base64,
              },
            }
          } catch (error) {
            console.error(error)
            console.log(item)
            return undefined
          }
        }),
      )
    ).filter(Boolean) as MusicKitResource[]

    return {
      props: {
        title: 'About',
        music,
      },
      revalidate: 60 * 60 * 24, // 1 day ,
    }
  } catch (error) {
    console.error(error)
    if (error instanceof MKError) {
      if (error.status === 403) {
        console.info('Visit /music/authorise to refresh Apple Music token')
      }
    }

    return {
      props: {
        title: 'About',
      },
      revalidate: 60 * 60, // 1 hour ,
    }
  }
}
