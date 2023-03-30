import fs from 'fs/promises'
import path from 'path'

import { GetStaticProps, NextPage } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

type Recipe = {
  title: string
  slug: string
}

interface Props {
  recipes: Recipe[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const postsDirectory = path.join(process.cwd(), 'content/recipes')
  console.log(process.cwd())

  const fileNames = await fs.readdir(postsDirectory)

  const files = await Promise.all(
    fileNames.map(async (fileName) => {
      // const filePath = path.join(postsDirectory, filename)
      // const content = await fs.readFile(filePath, 'utf8')
      // const matter = grayMatter(content)

      return {
        fileName: fileName.replace('.mdx', ''),
      }
    }),
  )

  const paths = files.map((file) => {
    return {
      params: {
        slug: file.fileName,
      },
    }
  })

  return {
    props: {
      recipes: [],
    },
  }
}

const Post: NextPage<Props> = ({ recipes }) => {
  return (
    <>
      {recipes.map(({ title }) => {
        title
      })}
    </>
  )
}

export default Post
