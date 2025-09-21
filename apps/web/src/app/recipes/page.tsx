import { recipe } from '@/content'
import { styled } from '@/styled/jsx'
import { RecipeListItem } from './RecipeListItem'

const List = styled('ul', {
  base: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
})

export default function Page() {
  return (
    <List>
      {recipe.map((recipe) => (
        <RecipeListItem key={recipe.slug} {...recipe} />
      ))}
    </List>
  )
}
