import { notFound } from 'next/navigation'
import { MDXContent } from '@/components/MDX'
import { Text } from '@/components/Typography'
import { work } from '@/content'
import { VStack } from '@/styled/jsx'
import { TabsExample } from '../vend/VendTabs'

function getPostBySlug(slug: string) {
  return work.find((post) => post.slug === slug)
}

interface Props {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return work.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (post == null) return {}
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  return (
    <VStack alignItems="stretch">
      <Text as="h1" size="xl" marginBlock="lg">
        {post.title}
      </Text>

      <MDXContent code={post.content} components={{ TabsExample }} />
    </VStack>
  )
}
