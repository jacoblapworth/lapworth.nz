'use cache'

import { SquareArrowOutUpRightIcon } from 'lucide-react'
import { cacheLife } from 'next/cache'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { Article } from '@/components/article'
import { LinkButton } from '@/components/button'
import { Text } from '@/components/text'
import { HStack, VStack } from '@/styled/jsx'
import { Related } from '../related'
import { getPostBySlugParams, getRelatedPosts, getWork } from '../work'

type Props = PageProps<'/work/[...slug]'>

export async function generateStaticParams() {
  const work = await getWork()
  return work.map((post) => ({ slug: post.params }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlugParams(slug)
  if (!post) return notFound()

  return {
    description: post.description,
    title: post.title,
  }
}

export default async function Page({ params }: Props) {
  cacheLife('max')
  const { slug } = await params
  const post = await getPostBySlugParams(slug)
  if (!post) notFound()
  const { default: Mdx } = await import(`../${post.filePath}`)
  const relatedPosts = post.showRelated ? await getRelatedPosts(post) : []

  return (
    <>
      <Article>
        <VStack alignItems="start" gap="md" marginBlock="lg">
          <Text as="h1" size="xl">
            {post.title}
          </Text>
          {post.links && (
            <HStack>
              {post.links.map(({ href, label }) => (
                <LinkButton href={href} key={href} size="sm">
                  {label}
                  <SquareArrowOutUpRightIcon size={16} />
                </LinkButton>
              ))}
            </HStack>
          )}
        </VStack>
        <Suspense>
          <Mdx />
        </Suspense>
      </Article>
      <Related posts={relatedPosts} />
    </>
  )
}
