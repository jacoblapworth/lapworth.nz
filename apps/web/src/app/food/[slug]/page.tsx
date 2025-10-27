import { notFound } from 'next/navigation'
import { Text } from '@/components/Typography'
import { styled } from '@/styled/jsx'
import { getRecipe, recipes } from '../recipes'
export const dynamicParams = false

export async function generateStaticParams() {
  const slugs = recipes.map((r) => r.slug)
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const recipe = getRecipe(slug)
  if (!recipe) return {}
  return {
    title: recipe.title,
  }
}

const Article = styled('article', {
  base: {
    alignItems: 'start',
    display: 'flex',
    flexDirection: 'column',
    gap: 'md',
  },
})

interface Props {
  params: Promise<{ slug: string }>
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
