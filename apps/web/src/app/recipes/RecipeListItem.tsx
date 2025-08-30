'use client'

import NextImage from 'next/image'
import Link from 'next/link'

import { styled } from '@/styled/jsx'

import { Text } from '@/components/Typography'

import type { Recipe } from '@/content'

const Article = styled('article', {
  base: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'interactive',
    padding: 'md',
  },
})

const Image = styled(NextImage, {
  base: {
    height: 'auto',
    maxWidth: 300,
  },
})

type Props = Recipe

export const RecipeListItem = ({ title, slug, image }: Props) => {
  return (
    <Article>
      <Text as="h2" size="medium" display>
        <Link href={`/recipes/${slug}`}>{title}</Link>
      </Text>

      {image && <Image height={300} width={300} src={image} alt={title} />}
    </Article>
  )
}
