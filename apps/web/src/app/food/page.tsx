'use cache'

import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Recipes',
}

export default async function Page() {
  const recipes = await getRecipes()
  return (
    <VStack alignItems="start" gap="lg" marginBlock="lg">
      <Text as="h1" size="xl">
        Recipes
      </Text>
      <List>
        {recipes.map((recipe) => (
          <RecipeListItem key={recipe.slug} {...recipe} />
        ))}
      </List>
    </VStack>
  )
}
