import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import type { Root } from 'mdast'
import { remark } from 'remark'
import remarkMdx from 'remark-mdx'
import { visit } from 'unist-util-visit'
import type { TocItem } from '@/components/table-of-contents'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export async function extractToc(
  baseDir: string,
  filePath: string,
): Promise<TocItem[]> {
  const fullPath = path.join(baseDir, filePath)
  const fileContents = await fs.readFile(fullPath, 'utf8')
  const { content } = matter(fileContents)

  const processor = remark().use(remarkMdx)
  const tree = processor.parse(content) as Root

  const headings: Array<{ depth: number; text: string; id: string }> = []

  visit(tree, 'heading', (node) => {
    if (node.depth >= 2 && node.depth <= 3) {
      // Extract text from heading
      let text = ''
      visit(node, 'text', (textNode) => {
        text += textNode.value
      })

      if (text) {
        const id = slugify(text)
        headings.push({
          depth: node.depth,
          id,
          text,
        })
      }
    }
  })

  // Build nested structure
  const toc: TocItem[] = []
  const stack: Array<{ item: TocItem; depth: number }> = []

  for (const heading of headings) {
    const item: TocItem = {
      children: [],
      depth: heading.depth,
      id: heading.id,
      title: heading.text,
    }

    // Pop stack until we find a parent with lesser depth
    while (stack.length > 0 && stack[stack.length - 1].depth >= heading.depth) {
      stack.pop()
    }

    if (stack.length === 0) {
      // Top-level item
      toc.push(item)
    } else {
      // Nested item
      const parent = stack[stack.length - 1].item
      if (!parent.children) {
        parent.children = []
      }
      parent.children.push(item)
    }

    stack.push({ depth: heading.depth, item })
  }

  return toc
}
