import { notFound } from 'next/navigation'

import { Mdx } from '@/components/Markdown'
import { Text } from '@/components/Typography'
import { getWork } from '@/lib/content'

import { allWorks } from 'contentlayer/generated'

interface PageProps {
  params: { slug: string[] }
}

function getWorkFromParams({ slug }: PageProps['params']) {
  const post = getWork(slug)
  return post ?? notFound()
}

export function generateStaticParams() {
  return allWorks.map((post) => ({
    slug: post.slugAsParams as string[],
  }))
}

export function generateMetadata({ params }: PageProps) {
  const work = getWork(params.slug)

  return {
    title: work?.title,
  }
}

export default function Page({ params }: PageProps) {
  const images = {}
  const post = getWorkFromParams(params)
  return (
    <>
      <Text as="h1" size="xlarge">
        {post.title}
      </Text>

      <Mdx code={post.body.code} globals={{ images }} />
    </>
  )
}
