import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

import type { Literal, Node, Parent } from 'unist'
import { visit } from 'unist-util-visit'
import { getImageMetadata, Image } from 'velite'

export type ImageNode = Parent & {
  url: string
  alt: string
  name: string
  attributes: (Literal & { name: string })[]
}

export const nextImage = () => {
  return async (tree: Node) => {
    const images: ImageNode[] = []

    // Find all the local image node.
    visit(tree, 'image', (node: Node, _, parent: Parent) => {
      const imageNode = node as ImageNode
      // Skip remote images.
      if (imageNode.url.startsWith('http')) {
        return
      }

      images.push(imageNode)
    })

    // Process images.
    await Promise.all(images.map(transformNextImage))
    return tree
  }
}

const transformNextImage = async (imageNode: ImageNode) => {
  const path = join(process.cwd(), 'public', imageNode.url)
  const buffer = await readFile(path)
  const metadata = await getImageMetadata(buffer)
  if (metadata == null) {
    throw new Error(`Failed to get image metadata: ${path}`)
  }
  // Convert original node to next/image
  ;(imageNode.type = 'mdxJsxFlowElement'),
    (imageNode.name = 'Image'),
    (imageNode.attributes = [
      { name: 'alt', type: 'mdxJsxAttribute', value: imageNode.alt },
      { name: 'src', type: 'mdxJsxAttribute', value: imageNode.url },
      { name: 'width', type: 'mdxJsxAttribute', value: metadata.width },
      { name: 'height', type: 'mdxJsxAttribute', value: metadata.height },
      {
        name: 'blurDataURL',
        type: 'mdxJsxAttribute',
        value: metadata.blurDataURL,
      },
    ])
}
