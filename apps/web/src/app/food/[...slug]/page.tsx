import { notFound } from 'next/navigation'
import { Article } from '@/components/article'
import { Text } from '@/components/Typography'
import { getRecipe, recipes } from '../recipes'
export const dynamicParams = false

interface Props {
  params: Promise<{ slug: string[] }>
}

export async function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.params }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const recipe = getRecipe(slug)
  if (!recipe) return {}
  return {
    title: recipe.title,
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params

  const recipe = getRecipe(slug)
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
