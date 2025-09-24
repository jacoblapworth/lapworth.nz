import fs from 'node:fs/promises'
import path from 'node:path'
import type { MDXRemoteProps, MDXRemoteSerializeResult } from 'next-mdx-remote'
import type { SerializeOptions } from 'next-mdx-remote/dist/types'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { z } from 'zod'
import { h1, h2, h3 } from '@/components/mdx/Heading'
import { Image } from '@/components/mdx/Image'
import { Wrapper } from '@/components/mdx/Wrapper'

const Frontmatter = z.object({
  date: z.optional(z.coerce.string()),
  title: z.string(),
})

type Frontmatter = z.infer<typeof Frontmatter>

export interface MDXPageProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>, Frontmatter>
  title: string
}

type PrepareMDXOptions = {
  fileName: string
  directory?: string
  options?: SerializeOptions
} & Partial<MDXRemoteProps>

export const prepareMDX = async ({
  fileName,
  directory = 'content/work',
  options,
  components,
  ...rest
}: PrepareMDXOptions) => {
  const _directory = path.join(process.cwd(), directory)
  const filePath = path.join(_directory, fileName)
  const source = await fs.readFile(`${filePath}.mdx`, 'utf8')

  return compileMDX<Frontmatter>({
    components: {
      h1,
      h2,
      h3,
      Image,
      wrapper: Wrapper,
      ...components,
    },
    options: {
      mdxOptions: {
        rehypePlugins: [rehypeSlug],
        remarkPlugins: [remarkGfm],
      },
      parseFrontmatter: true,
      ...options,
    },
    source,
    ...rest,
  })
}
