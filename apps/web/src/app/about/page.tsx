import { Metadata } from 'next'
import NextImage from 'next/image'

import ProfileImage from '@/public/static/j-photo-mono.png'
import { getMusicWithThumbnails } from '@/src/app/about/music'
import { Link } from '@/src/components/Link'
import { Text } from '@/src/components/Typography'
import { css } from '@/styled/css'

import { getReadingWithThumbnails } from './books/oku'
import { Experience } from './experience'
import { HeavyRotation } from './HeavyRotation'
import { Reading } from './Reading'

export const fetchCache = 'default-cache'

export const metadata: Metadata = {
  title: 'Senior design systems product designer',
  description: `Hey there! I'm J. I'm a product designer and software engineer focused on community driven design systems.`,
}

export default async function Page() {
  const music = await getMusicWithThumbnails()
  const books = await getReadingWithThumbnails()

  return (
    <>
      <div className={css({ maxWidth: '1000px' })}>
        <Text size="xlarge" display>
          Hey there!{' '}
          <span
            className={css({
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'baseline',
            })}
          >
            I&apos;m J
            <NextImage
              src={ProfileImage}
              quality={100}
              alt="Portrait photo of Jacob"
              placeholder="blur"
              priority
              className={css({
                borderRadius: 'max',
                overflow: 'hidden',
                marginInlineStart: '0.2em',
                height: '0.75em',
                width: '0.75em',
                border: '1px dashed transparent',
                _hover: {
                  borderColor: 'divider',
                },
              })}
            />
          </span>
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
      </div>
      <Experience />
      {music && <HeavyRotation music={music} />}
      {books && <Reading books={books} />}
    </>
  )
}
