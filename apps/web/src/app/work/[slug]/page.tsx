import { SquareArrowOutUpRightIcon } from 'lucide-react'
import { notFound } from 'next/navigation'
import { LinkButton } from '@/components/Button'
import { MDXContent } from '@/components/MDXContent'
import { Text } from '@/components/Typography'
import { work } from '@/content'
import { HStack, VStack } from '@/styled/jsx'
import { TabsExample } from '../vend/tabs/VendTabs'
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
    <>
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
      <MDXContent
        components={{ TabsExample, ...Principles }}
        mdx={post.content}
      />
    </>
  )
}
