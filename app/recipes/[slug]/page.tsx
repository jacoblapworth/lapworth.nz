import fs from 'fs/promises'
import path from 'path'

import { MDXRemote } from 'next-mdx-remote/rsc'

const postsDirectory = path.join(process.cwd(), 'app/recipes/[slug]')

const mdxFilenamePredicate = (filename: string) => filename.endsWith('.mdx')

export async function generateStaticParams() {
  const fileNames = await fs.readdir(postsDirectory)
  const files = fileNames.filter(mdxFilenamePredicate).map((fileName) => {
    return {
      fileName: fileName.replace('.mdx', ''),
    }
  })

  const paths = files.map((file) => {
    return {
      slug: file.fileName,
    }
  })

  return paths
}

const getRecipe = async (slug: string) => {
  const filePath = path.join(postsDirectory, slug)
  const content = await fs.readFile(`${filePath}.mdx`, 'utf8')
  
return content
}

interface Props {
  params: Promise<{ slug: string }>
}

export default async function Page(props: Props) {
  const params = await props.params;

  const {
    slug
  } = params;

  const source = await getRecipe(slug)
  
return <MDXRemote source={source} />
}
