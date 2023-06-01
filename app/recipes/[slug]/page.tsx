import fs from 'fs/promises'
import path from 'path'

import { MDXRemote } from 'next-mdx-remote/rsc'

const postsDirectory = path.join(process.cwd(), 'app/recipes/[slug]')

const mdxFilenamePredicate = (filename: string) => filename.endsWith('.mdx')

export async function generateStaticParams() {
  const fileNames = await fs.readdir(postsDirectory)

  const files = await Promise.all(
    fileNames.filter(mdxFilenamePredicate).map(async (fileName) => {
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
  const filePath = path.join(postsDirectory, slug as string)
  const content = await fs.readFile(`${filePath}.mdx`, 'utf8')
  return content
}

type Props = {
  params: { slug: string }
}

export default async function Page({ params: { slug } }: Props) {
  const source = await getRecipe(slug)
  return <MDXRemote source={source} />
}
