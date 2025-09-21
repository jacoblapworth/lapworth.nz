import { MDXContent } from '@/components/MDX'
import { work } from '@/content'
import { notFound } from 'next/navigation'
import { TabsExample } from '../vend/VendTabs'

function getPostBySlug(slug: string) {
  return work.find((post) => post.slug === slug)
}

interface Props {
  params: Promise<{
    slug: string
  }>
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  return <MDXContent code={post.content} components={{ TabsExample }} />
}
