import fs from 'fs/promises'
import path from 'path'

import { MDXRemoteProps, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { SerializeOptions } from 'next-mdx-remote/dist/types'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { z } from 'zod'

const Frontmatter = z.object({
  title: z.string(),
  date: z.optional(z.coerce.string()),
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
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug],
      },
      ...options,
    },
    components,
    ...rest,
  })
}
