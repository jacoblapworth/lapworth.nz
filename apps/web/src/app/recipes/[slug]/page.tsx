import { components } from '@/components/Markdown'
import { recipe } from '@/content'
import { VStack } from '@/styled/jsx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

export const dynamicParams = false

function getRecipe(slug: string) {
  return recipe.find((r) => r.slug === slug)
}

export async function generateStaticParams() {
  const slugs = recipe.map((r) => r.slug)
  return slugs.map((slug) => ({ slug }))
}

interface Props {
  params: Promise<{ slug: string }>
}

export default async function Page(props: Props) {
  const params = await props.params

  const { slug } = params

  const recipe = getRecipe(slug)
  if (!recipe) notFound()

  console.log(recipe)

  return (
    <VStack>
      {/* <MDXContent code={recipe.content} /> */}
      <MDXRemote source={recipe.content} components={components} />
      {/* <div dangerouslySetInnerHTML={{ __html: recipe.content }} /> */}
    </VStack>
  )
}
