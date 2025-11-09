'use cache'

import type { Metadata } from 'next'
import { cacheLife } from 'next/cache'
import { Text } from '@/components/text'
import { styled, VStack } from '@/styled/jsx'
import { RecipeListItem } from './recipe-list-item'
import { getRecipes } from './recipes'

const List = styled('ul', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    margin: 0,
    maxWidth: 500,
    padding: 0,
  },
})

const Li = styled('li', {
  base: {},
})

export const metadata: Metadata = {
  description: 'A collection of recipes I love to cook and eat.',
  title: 'Recipes',
}

export default async function Page() {
  cacheLife('max')
  const recipes = await getRecipes()
  return (
    <VStack alignItems="start" gap="lg" marginBlock="lg">
      <Text as="h1" size="xl">
        Recipes
      </Text>
      <List>
        {recipes.map((recipe) => (
          <Li key={recipe.slug}>
            <RecipeListItem {...recipe} />
          </Li>
        ))}
      </List>
    </VStack>
  )
}
