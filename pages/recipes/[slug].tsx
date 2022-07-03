import fs from 'fs/promises'
import path from 'path'
import { ParsedUrlQuery } from 'querystring'

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

interface RecipeParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticPaths: GetStaticPaths<RecipeParams> = async () => {
  const postsDirectory = path.join(process.cwd(), 'posts/recipes')
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
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug
  const postsDirectory = path.join(process.cwd(), 'posts/recipes')
  const filePath = path.join(postsDirectory, slug as string)
  const content = await fs.readFile(`${filePath}.mdx`, 'utf8')
  const source = await serialize(content, { parseFrontmatter: true })
  return {
    props: {
      source,
    },
  }
}

interface Props {
  source: MDXRemoteSerializeResult
}

const Post: NextPage<Props> = ({ source }) => {
  return (
    <>
      <MDXRemote {...source} />
    </>
  )
}

export default Post
