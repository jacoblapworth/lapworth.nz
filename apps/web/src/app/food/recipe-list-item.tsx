import NextImage from 'next/image'
import NextLink from 'next/link'
import { Text } from '@/components/Typography'
import { css } from '@/styled/css/css'
import { styled } from '@/styled/jsx'
import type { Recipe } from './recipes'

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

type Props = Recipe

export function RecipeListItem({ title, slug, cover }: Props) {
  return (
    <Article>
      <Link href={`/food/${slug}`}>
        {cover && (
          <NextImage
            alt={title}
            blurDataURL={cover.blurDataURL}
            className={css({
              height: '100%',
              maxHeight: 200,
              objectFit: 'cover',
              width: '100%',
            })}
            placeholder="blur"
            src={cover}
          />
        )}
        <Text as="p" display size="md">
          {title}
        </Text>
      </Link>
    </Article>
  )
}
