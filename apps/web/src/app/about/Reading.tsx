'use client'

import NextImage from 'next/image'

import { Carousel } from '@/components/Carousel'
import { Link } from '@/components/Link'
import { styled } from '@/styled/jsx'

import type { OkuBookWithThumbnail } from './books/oku'

const BookCover = styled(NextImage, {
  base: {
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
  },
})

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
        color: 'tertiary',
        fontSize: 'sm',
      },
    },
  },
})

const Stack = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
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
    <Link
      borderRadius="md"
      className="group"
      href={`https://oku.club/book/${slug}`}
    >
      <Stack>
        <BookCover
          alt={`Book cover for "${title}"`}
          blurDataURL={placeholder}
          htmlHeight={size}
          htmlWidth={size}
          placeholder="blur"
          quality={75}
          src={thumbnail}
        />
        <Label variant="primary">{title}</Label>
        <Label variant="secondary">{subtitle}</Label>
      </Stack>
    </Link>
  )
}

interface ReadingProps {
  books: OkuBookWithThumbnail[]
}

export const Reading = ({ books }: ReadingProps) => {
  return (
    <Carousel
      items={books}
      renderItem={(item) => <Book key={item.id} {...item} />}
      title="Reading"
    />
  )
}
