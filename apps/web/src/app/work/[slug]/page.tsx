import { notFound } from 'next/navigation'
import { work } from '@/content'

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

  return (
    <div
      className="prose"
      dangerouslySetInnerHTML={{ __html: post.content }}
    ></div>
  )
}
