import { SquareArrowOutUpRightIcon } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Article } from '@/components/article'
import { LinkButton } from '@/components/Button'
import { Text } from '@/components/Typography'
import { HStack, VStack } from '@/styled/jsx'
import { getPostBySlugParams, work } from '../work'

export const dynamicParams = false
export const dynamic = 'force-static'

interface Props {
  params: Promise<{
    slug: string[]
  }>
}

export function generateStaticParams() {
  return work.map((post) => ({ slug: post.params }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlugParams(slug)

  if (!post) return notFound()

  return {
    description: post.description,
    title: post.title,
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params

  const post = getPostBySlugParams(slug)

  if (!post) notFound()

  const { default: Mdx } = await import(`../${post.filePath}`)

  return (
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
      <Mdx />
    </Article>
  )
}
