import fs from 'fs/promises'
import path from 'path'

import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import { z } from 'zod'

const Frontmatter = z.object({
  title: z.string(),
  date: z.optional(z.string()),
})

type Frontmatter = z.infer<typeof Frontmatter>

export interface MDXPageProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>, Frontmatter>
  title: string
}

type PrepareMDXOptions = {
  fileName: string
  directory?: string
}

type MDXResult = Omit<MDXRemoteSerializeResult, 'frontmatter'> &
  Required<
    Pick<
      MDXRemoteSerializeResult<Record<string, unknown>, Frontmatter>,
      'frontmatter'
    >
  >

type PrepareMDX = ({
  fileName,
  directory,
}: PrepareMDXOptions) => Promise<MDXResult>

export const prepareMDX: PrepareMDX = async ({
  fileName,
  directory = 'content/work',
}) => {
  const _directory = path.join(process.cwd(), directory)
  const filePath = path.join(_directory, fileName)
  const content = await fs.readFile(`${filePath}.mdx`, 'utf8')
  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
    parseFrontmatter: true,
  })
  const frontmatter = Frontmatter.parse(source.frontmatter)

  return { ...source, frontmatter }
}
