import NextImage from 'next/image'

import { Carousel } from '@/components/carousel'
import { Link } from '@/components/link'
import { css } from '@/styled/css'
import { styled, VStack } from '@/styled/jsx'
import {
  getReadingWithThumbnails,
  type OkuBookWithThumbnail,
} from './books/oku'

const Label = styled('div', {
  base: {
    display: 'inline',
    wordWrap: 'break-word',
  },
  variants: {
    variant: {
      primary: {
        color: 'primary',
        fontSize: 'md',
      },
      secondary: {
        color: 'secondary',
        fontSize: 'sm',
      },
    },
  },
})

export const Book = ({
  title,
  subtitle,
  thumbnail,
  placeholder,
  slug,
}: OkuBookWithThumbnail) => {
  const size = 128

  return (
    <Link className="group" href={`https://oku.club/book/${slug}`}>
      <VStack alignItems="start" gap="xs">
        <NextImage
          alt={`Book cover for "${title}"`}
          blurDataURL={placeholder}
          className={css({
            _groupHover: {
              opacity: 0.8,
            },
            _hover: {
              opacity: 0.8,
            },
            backgroundColor: 'surface',
            borderRadius: 'md',
            marginBlockEnd: 'xsm',
            overflow: 'hidden',
            willChange: 'transform',
          })}
          height={size}
          placeholder="blur"
          quality={75}
          src={thumbnail}
          width={size}
        />
        <Label variant="primary">{title}</Label>
        <Label variant="secondary">{subtitle}</Label>
      </VStack>
    </Link>
  )
}

export async function Reading() {
  const books = await getReadingWithThumbnails()

  if (!books) {
    return null
  }

  return (
    <Carousel
      items={books}
      renderItem={(item) => <Book key={item.id} {...item} />}
      title="Reading"
    />
  )
}
