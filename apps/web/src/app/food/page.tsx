import type { Metadata } from 'next'
import { recipes } from '@/content'
import { styled } from '@/styled/jsx'
import { RecipeListItem } from './RecipeListItem'

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
  return (
    <List>
      {recipes.map((recipe) => (
        <RecipeListItem key={recipe.slug} {...recipe} />
      ))}
    </List>
  )
}
