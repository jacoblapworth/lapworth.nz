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

export default function Page() {
  return (
    <List>
      {recipes.map((recipe) => (
        <RecipeListItem key={recipe.slug} {...recipe} />
      ))}
    </List>
  )
}
