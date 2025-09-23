import { notFound } from 'next/navigation'
import { MDXContent } from '@/components/MDX'
import { recipes } from '@/content'
import { styled } from '@/styled/jsx'

export const dynamicParams = false

function getRecipe(slug: string) {
  return recipes.find((r) => r.slug === slug)
}

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

export default async function Page(props: Props) {
  const params = await props.params

  const { slug } = params

  const recipe = getRecipe(slug)
  if (!recipe) notFound()

  return (
    <Article>
      <MDXContent code={recipe.content} />
    </Article>
  )
}
