'use client'

import NextImage from 'next/image'
import NextLink from 'next/link'
import { Text } from '@/components/Typography'
import type { Recipe } from '@/content'
import { styled } from '@/styled/jsx'

const Article = styled('article', {
  base: {
    border: 'muted',
    marginBlockEnd: -1,
    padding: 'md',
  },
})

const Link = styled(NextLink, {
  base: {
    _hover: { textDecoration: 'underline' },
    alignItems: 'start',
    color: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    gap: 'md',
    textDecoration: 'none',
  },
})

const Image = styled(NextImage, {
  base: {
    height: '100%',
    maxHeight: 200,
    objectFit: 'cover',
    width: '100%',
  },
})

type Props = Recipe

export function RecipeListItem({ title, slug, image }: Props) {
  return (
    <Article>
      <Link href={`/food/${slug}`}>
        {image && <Image alt={title} placeholder="blur" src={image} />}
        <Text as="p" display size="md">
          {title}
        </Text>
      </Link>
    </Article>
  )
}
