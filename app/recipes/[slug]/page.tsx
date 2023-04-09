import fs from 'fs/promises'
import path from 'path'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

export async function generateStaticParams() {
  console.log('test')

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

  console.log({ paths })

  return paths
}

const getRecipe = async (slug: string) => {
  const postsDirectory = path.join(process.cwd(), 'content/recipes')
  const filePath = path.join(postsDirectory, slug as string)
  const content = await fs.readFile(`${filePath}.mdx`, 'utf8')
  const source = await serialize(content, { parseFrontmatter: true })
  return source
}

type Props = {
  params: { slug: string }
}

export default async function Page({ params: { slug } }: Props) {
  console.log({ slug })

  const source = await getRecipe(slug)

  return <MDXRemote {...source} />
}
