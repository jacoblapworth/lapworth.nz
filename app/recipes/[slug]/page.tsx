import fs from 'fs/promises'
import path from 'path'

import { MDXRemote } from 'next-mdx-remote/rsc'
import { serialize } from 'next-mdx-remote/serialize'

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content/recipes')
  const fileNames = await fs.readdir(postsDirectory)

  const files = await Promise.all(
    fileNames.map(async (fileName) => {
      return {
        fileName: fileName.replace('.mdx', ''),
      }
    }),
  )

  const paths = files.map((file) => {
    return {
      slug: file.fileName,
    }
  })

  return paths
}

const getRecipe = async (slug: string) => {
  const postsDirectory = path.join(process.cwd(), 'content/recipes')
  const filePath = path.join(postsDirectory, slug as string)
  const content = await fs.readFile(`${filePath}.mdx`, 'utf8')
  const source = await serialize(content, { parseFrontmatter: true })
  return content
}

type Props = {
  params: { slug: string }
}

export default async function Page({ params: { slug } }: Props) {
  const source = await getRecipe(slug)
  // @ts-expect-error Async Server Component Workaround
  return <MDXRemote source={source} />
}
