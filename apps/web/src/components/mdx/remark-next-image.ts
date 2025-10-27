import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { Image } from 'mdast'
import type { MdxJsxFlowElement } from 'mdast-util-mdx-jsx'
import type { Plugin } from 'unified'
import type { Literal, Node, Parent } from 'unist'
import { visit } from 'unist-util-visit'
import { getImageMetadata } from 'velite'

export type ImageNode = Parent & {
  url: string
  alt: string
  name: string
  title?: string
  attributes: (Literal & { name: string })[]
}

export async function nextImage() {
  return async (tree: Node) => {
    const images: Image[] = []

    visit(tree, 'image', (node: Image) => {
      if (node.url.startsWith('http')) {
        return
      }

      images.push(node)
    })

    await Promise.all(images.map(transformNextImage))
    return tree
  }
}

async function transformNextImage(node: Image) {
  const path = join(process.cwd(), 'public', node.url)
  const buffer = await readFile(path)
  const metadata = await getImageMetadata(buffer)
  if (metadata == null) {
    throw new Error(`Failed to get image metadata: ${path}`)
  }

  const jsx: MdxJsxFlowElement = {
    attributes: [
      { name: 'alt', type: 'mdxJsxAttribute', value: node.alt },
      { name: 'src', type: 'mdxJsxAttribute', value: node.url },
      {
        name: 'width',
        type: 'mdxJsxAttribute',
        value: metadata.width.toString(),
      },
      {
        name: 'height',
        type: 'mdxJsxAttribute',
        value: metadata.height.toString(),
      },
      {
        name: 'blurDataURL',
        type: 'mdxJsxAttribute',
        value: metadata.blurDataURL,
      },
    ],
    children: [],
    name: 'img',
    type: 'mdxJsxFlowElement',
  }

  if (node.title) {
    jsx.attributes.push({
      name: 'title',
      type: 'mdxJsxAttribute',
      value: node.title,
    })
  }

  node = jsx as unknown as Image
}
