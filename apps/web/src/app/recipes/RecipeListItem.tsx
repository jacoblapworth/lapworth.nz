'use client'

import { Text } from '@/components/Typography'
import type { Recipe } from '@/content'
import { styled } from '@/styled/jsx'
import NextImage from 'next/image'
import Link from 'next/link'

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
      <Link href={`/recipes/${slug}`}>
        {image && <Image height={300} width={300} src={image} alt={title} />}
        <Text as="p" size="medium" display>
          {title}
        </Text>
      </Link>
    </Article>
  )
}
