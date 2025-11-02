'use cache'

import { cacheLife } from 'next/cache'
import { notFound } from 'next/navigation'
import { Article } from '@/components/article'
import { Text } from '@/components/text'
import { getRecipe, getRecipes } from '../recipes'

type Props = PageProps<'/food/[...slug]'>

export async function generateStaticParams() {
  const recipes = await getRecipes()
  return recipes.map((r) => ({ slug: r.params }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const recipe = await getRecipe(slug)
  if (!recipe) return notFound()
  return {
    title: recipe.title,
  }
}

export default async function Page({ params }: Props) {
  cacheLife('max')
  const { slug } = await params

  const recipe = await getRecipe(slug)
  if (!recipe) notFound()

  const { default: Mdx } = await import(`../${recipe.filePath}`)

  return (
    <Article>
      <Text as="h1" marginBlock="lg" size="xl">
        {recipe.title}
      </Text>
      <Mdx />
    </Article>
  )
}
