import { FormExample } from '@lapworth/xero/FormExample'
import { SquareArrowOutUpRightIcon } from 'lucide-react'
import { notFound } from 'next/navigation'
import { LinkButton } from '@/components/Button'
import { MDXContent } from '@/components/MDXContent'
import { Text } from '@/components/Typography'
import { work } from '@/content'
import { HStack, VStack } from '@/styled/jsx'
import { LaMarzoccoWidget } from '../lamarzocco/widget'
import { TabsExample } from '../vend/tabs/VendTabs'
import * as Principles from '../xero/principles/principles'

function getPostBySlugParams(slug: string[]) {
  return work.find((post) => post.slug === slug.join('/'))
}

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

  if (post == null) return {}

  return {
    description: post.description,
    title: post.title,
  }
}

function mapPagesToImports(
  params: string[],
): Record<string, React.ComponentType> {
  const path = params.join('/')

  if (path.startsWith('xero')) {
    return { FormExample }
  }

  if (path.startsWith('lamarzocco')) {
    return { LaMarzoccoWidget }
  }

  if (path.startsWith('vend')) {
    return { TabsExample }
  }

  if (path.startsWith('xero/principles')) {
    return Principles
  }

  return {}
}

export default async function Page({ params }: Props) {
  const { slug } = await params

  const post = getPostBySlugParams(slug)

  if (!post) notFound()

  const components = mapPagesToImports(slug)

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
      <MDXContent components={components} mdx={post.content} />
    </>
  )
}
