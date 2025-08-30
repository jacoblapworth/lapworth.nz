import { MDXContent } from '@/components/Mdx'
import { recipe } from '@/content'
import { VStack } from '@/styled/jsx'
import { notFound } from 'next/navigation'

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

  return (
    <VStack>
      <MDXContent code={recipe.content} />
      {/* <MDXRemote
        compiledSource={recipe.content}
        components={components}
        scope={{}}
        frontmatter={{}} */}
      {/* /> */}
      {/* <div dangerouslySetInnerHTML={{ __html: recipe.content }} /> */}
    </VStack>
  )
}
