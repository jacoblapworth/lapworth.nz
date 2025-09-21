import { notFound } from 'next/navigation'
import { MDXContent } from '@/components/MDX'
import { recipe } from '@/content'
import { styled } from '@/styled/jsx'

export const dynamicParams = false

function getRecipe(slug: string) {
  return recipe.find((r) => r.slug === slug)
}

export async function generateStaticParams() {
  const slugs = recipe.map((r) => r.slug)
  return slugs.map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props) {
  return params.then(({ slug }) => {
    const recipe = getRecipe(slug)
    if (!recipe) return {}
    return {
      title: recipe.title,
    }
  })
}

const Article = styled('article', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
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
