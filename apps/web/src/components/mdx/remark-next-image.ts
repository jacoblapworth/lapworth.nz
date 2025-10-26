import { readFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
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

export const nextImage = () => {
  return async (tree: Node) => {
    const images: ImageNode[] = []

    // Find all the local image nodes
    visit(tree, 'image', (node: ImageNode) => {
      // Skip remote images
      if (node.url.startsWith('http')) {
        return
      }

      images.push(node)
    })

    // Process images
    await Promise.all(images.map(transformNextImage))
    return tree
  }
}

async function transformNextImage(node: ImageNode) {
  const path = join(process.cwd(), 'public', node.url)
  console.log('CWD:', process.cwd(), '->', path)
  const buffer = await readFile(path)
  const metadata = await getImageMetadata(buffer)
  if (metadata == null) {
    throw new Error(`Failed to get image metadata: ${path}`)
  }
  // Convert original node to next/image
  node.type = 'mdxJsxFlowElement'
  node.name = 'img'
  node.attributes = [
    { name: 'alt', type: 'mdxJsxAttribute', value: node.alt },
    { name: 'src', type: 'mdxJsxAttribute', value: node.url },
    { name: 'width', type: 'mdxJsxAttribute', value: metadata.width },
    { name: 'height', type: 'mdxJsxAttribute', value: metadata.height },
    {
      name: 'blurDataURL',
      type: 'mdxJsxAttribute',
      value: metadata.blurDataURL,
    },
  ]

  if (node.title) {
    node.attributes.push({
      name: 'title',
      type: 'mdxJsxAttribute',
      value: node.title,
    })
  }
}
