import { allRecipes, allWorks } from 'contentlayer/generated'

export function isArrayEqual<T>(lhs: T[], rhs: T[]): boolean {
  if (lhs.length != rhs.length) {
    return false
  }

  for (let i = 0; i < lhs.length; i++) {
    if (lhs[i] != rhs[i]) {
      return false
    }
  }

  return true
}

type Slug = string[]

export function getRecipe(slug: Slug) {
  const recipe = allRecipes.find(({ slugAsParams }) =>
    isArrayEqual(slugAsParams as string[], slug),
  )

  return recipe
}

export function getWork(slug: Slug) {
  const post = allWorks.find(({ slugAsParams }) =>
    isArrayEqual(slugAsParams as string[], slug),
  )

  return post
}
