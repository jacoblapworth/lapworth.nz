'use client'

import NextImage from 'next/image'

import { HeavyRotation } from '@/app/about/HeavyRotation'
import { MusicKitResource } from '@/app/about/music'
import { Link } from '@/components/Link'
import { Text } from '@/components/Typography'
import ProfileImage from '@/public/static/j-photo-mono.png'
import { styled } from '@/styled-system/jsx'

import { Experience } from './experience'

const Profile = styled(NextImage, {
  base: {
    borderRadius: 'max',
    overflow: 'hidden',
    marginInlineStart: '0.2em',
    height: '0.75em',
    width: '0.75em',
    border: '1px dashed transparent',
    _hover: {
      borderColor: 'divider',
    },
  },
})

const NoWrap = styled('span', {
  base: {
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    alignItems: 'baseline',
  },
})

interface Props {
  music: MusicKitResource[] | null
}

const Container = styled('div', {
  base: {
    maxWidth: '1000px',
  },
})

export default function Page({ music }: Props) {
  return (
    <>
      <Container>
        <Text size="xlarge" display>
          Hey there!{' '}
          <NoWrap>
            I&apos;m J
            <Profile
              src={ProfileImage}
              quality={100}
              alt="Portrait photo of Jacob"
              placeholder="blur"
              priority
            />
          </NoWrap>
        </Text>

        <Text size="large" display>
          I&apos;m a senior product designer and software engineer focused on
          community-driven design systems.
        </Text>

        <Text size="medium" display>
          Find me in the{' '}
          <Link href="https://instagram.com/platesbyjacob">kitchen</Link> when
          I&apos;m not working.
        </Text>
      </Container>
      <Experience />

      {music && music.length > 0 && <HeavyRotation music={music} />}
    </>
  )
}
