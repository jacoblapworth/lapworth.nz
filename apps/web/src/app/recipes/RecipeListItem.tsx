'use client'

import NextImage from 'next/image'
import Link from 'next/link'
import { Text } from '@/components/Typography'
import type { Recipe } from '@/content'
import { styled } from '@/styled/jsx'

const Article = styled('article', {
  base: {
    borderColor: 'interactive',
    borderStyle: 'solid',
    borderWidth: 1,
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
      <Link href={`/recipes/${slug}`}>
        {image && <Image height={300} width={300} src={image} alt={title} />}
        <Text as="p" size="md" display>
          {title}
        </Text>
      </Link>
    </Article>
  )
}
