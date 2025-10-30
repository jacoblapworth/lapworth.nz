import NextImage from 'next/image'

import { Carousel } from '@/components/carousel'
import { Link } from '@/components/link'
import { css } from '@/styled/css'
import { styled, VStack } from '@/styled/jsx'
import { getReadingWithThumbnails, type OkuBookWithThumbnail } from './oku'

const Label = styled('div', {
  base: {
    flexGrow: 0,
    lineClamp: 2,
    minWidth: 0,
    overflowWrap: 'break-word',
    textOverflow: 'ellipsis',
    whiteSpace: 'wrap',
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
  slug,
}: OkuBookWithThumbnail) => {
  return (
    <Link className="group" href={`https://oku.club/book/${slug}`}>
      <VStack alignItems="start" gap="xs">
        <NextImage
          alt={`Book cover for "${title}"`}
          className={css({
            _groupHover: {
              opacity: 0.8,
            },
            _hover: {
              opacity: 0.8,
            },
            backgroundColor: 'surface',
            borderRadius: 'md',
            height: 'auto',
            marginBlockEnd: 'xsm',
            overflow: 'hidden',
            willChange: 'transform',
          })}
          placeholder="blur"
          quality={75}
          src={thumbnail}
        />
        <Label variant="primary">{title}</Label>
        <Label variant="secondary">{subtitle}</Label>
      </VStack>
    </Link>
  )
}

export async function Bookshelf() {
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
