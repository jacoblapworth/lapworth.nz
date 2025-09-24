import { notFound } from 'next/navigation'
import { MDXContent } from '@/components/MDX'
import { Text } from '@/components/Typography'
import { work } from '@/content'
import { VStack } from '@/styled/jsx'
import { TabsExample } from '../vend/VendTabs'

import * as Principles from '../xero/principles/principles'

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
    description: post.description,
    title: post.title,
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  return (
    <VStack alignItems="stretch" marginBlockEnd="xl">
      <Text as="h1" marginBlock="lg" size="xl">
        {post.title}
      </Text>

      <MDXContent
        code={post.content}
        components={{ TabsExample, ...Principles }}
      />
    </VStack>
  )
}
