import { notFound } from 'next/navigation'

import { Mdx } from '@/components/Markdown'
import { Text } from '@/components/Typography'
import { getRecipe } from '@/lib/content'

import { allRecipes } from 'contentlayer/generated'

interface PageProps {
  params: { slug: string[] }
}

export function generateStaticParams() {
  return allRecipes.map((recipe) => ({
    slug: recipe.slugAsParams as string[],
  }))
}

export function generateMetadata({ params }: PageProps) {
  const recipe = getRecipe(params.slug)

  if (!recipe) {
    return {
      title: 'Recipe not found',
    }
  }

  return {
    title: recipe.title,
    description: recipe.description,
    openGraph: {
      title: recipe.title,
      description: recipe.description,
      images: recipe.image && [
        {
          url: recipe.image,
          width: 800,
          height: 600,
          alt: recipe.title,
        },
      ],
    },
  }
}

export default function Page({ params }: PageProps) {
  const recipe = getRecipe(params.slug)

  if (!recipe) {
    notFound()
  }

  return (
    <article>
      <Text as="h1" size="xlarge">
        {recipe?.title}
      </Text>
      <Mdx code={recipe.body.code} />
    </article>
  )
}
