import { Text } from '@/components/Typography'

import { allRecipes } from 'contentlayer/generated'

import { RecipeListItem } from './RecipeListItem'

function getRecipes(preview = false) {
  const statuses = ['published', preview && 'draft'].filter(Boolean)

  return allRecipes
    .filter((recipe) => statuses.includes(recipe.status))
    .sort((a, b) => a.date.localeCompare(b.date))
}

export default function Page() {
  const recipes = getRecipes()
  return (
    <>
      <Text as="h1" size="xlarge">
        Recipes
      </Text>

      {recipes.map((recipe) => (
        <RecipeListItem key={recipe._id} {...recipe} />
      ))}
    </>
  )
}
