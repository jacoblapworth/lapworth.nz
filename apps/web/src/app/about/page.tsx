'use cache'

import type { Metadata } from 'next'
import { cacheLife } from 'next/cache'
import NextImage from 'next/image'
import { Suspense } from 'react'
import { Link } from '@/components/link'
import { Text } from '@/components/text'
import ProfileImage from '@/public/j-photo-mono.png'
import { css } from '@/styled/css'
import { VStack } from '@/styled/jsx'
import { Bookshelf } from './bookshelf'
import { Experience } from './experience'
import { HeavyRotation } from './heavy-rotation'

export const metadata: Metadata = {
  description: `Hey there! I'm J. I'm a lead product designer and design engineer focused on community driven design systems.`,
  title: 'Lead product designer and design engineer',
}

export default async function Page() {
  cacheLife('max')
  return (
    <>
      <VStack alignItems="start" gap="xl" maxWidth="1000px" paddingBlock="2xl">
        <Text display size="xl">
          Hey there!{' '}
          <span
            className={css({
              alignItems: 'baseline',
              display: 'inline-flex',
              whiteSpace: 'nowrap',
            })}
          >
            I&apos;m J
            <NextImage
              alt="Portrait photo of Jacob"
              className={css({
                _hover: {
                  borderColor: 'divider',
                },
                border: '1px dashed transparent',
                borderRadius: 'max',
                height: '0.75em',
                marginInlineStart: '0.2em',
                overflow: 'hidden',
                width: '0.75em',
              })}
              placeholder="blur"
              priority
              quality={75}
              src={ProfileImage}
            />
          </span>
        </Text>

        <Text display size="lg">
          I&apos;m a lead product designer and design engineer focused on
          community-driven design systems.
        </Text>

        <Text display size="md">
          Find me in the{' '}
          <Link href="https://instagram.com/platesbyjacob">kitchen</Link> when
          I&apos;m not working.
        </Text>
      </VStack>
      <Experience />
      <Suspense>
        <HeavyRotation />
      </Suspense>
      <Suspense>
        <Bookshelf />
      </Suspense>
    </>
  )
}
