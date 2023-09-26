'use client'

import NextImage from 'next/image'

import { styled } from 'styled/jsx'

import { Carousel } from '@/components/Carousel'
import { Link } from '@/components/Link'

import { OkuBookWithThumbnail } from './books/oku'

const BookCover = styled(NextImage, {
  base: {
    overflow: 'hidden',
    borderRadius: 'md',
    backgroundColor: 'surface',
    marginBlockEnd: 'xsm',
    willChange: 'transform',
    _groupHover: {
      opacity: 0.8,
    },
    _hover: {
      opacity: 0.8,
    },
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
        fontSize: 'md',
        color: 'primary',
      },
      secondary: {
        fontSize: 'sm',
        color: 'tertiary',
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
    <Link href={`https://oku.club/book/${slug}`} className="group">
      <Stack>
        <BookCover
          alt={`Book cover for "${title}"`}
          src={thumbnail}
          htmlWidth={size}
          htmlHeight={size}
          quality={100}
          placeholder="blur"
          blurDataURL={placeholder}
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
      title="Reading"
      items={books}
      renderItem={(item) => <Book key={item.id} {...item} />}
    />
  )
}
