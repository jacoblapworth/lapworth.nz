'use client'

import NextImage from 'next/image'

import { MusicKitResource } from '@/app/about/music'
import { HeavyRotation } from '@/components/Music/HeavyRotation'
import { Text } from '@/components/Typography'
import { Experience } from '@/components/Work/Experience'
import ProfileImage from '@/public/static/j-photo-mono.png'
import { styled } from '@/styles'

const Profile = styled(NextImage, {
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
  display: 'inline-flex',
  alignItems: 'baseline',
})

interface Props {
  music: MusicKitResource[] | null
}

export default function Page({ music }: Props) {
  return (
    <>
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
        community driven design systems.
      </Text>

      <Experience />

      {music && music.length > 0 && <HeavyRotation music={music} />}
    </>
  )
}
