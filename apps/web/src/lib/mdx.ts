import fs, { glob } from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import type { z } from 'zod/v4'

export function getSlugFromPath(filePath: string): string[] {
  const pathWithoutExt = filePath.replace(/\.mdx$/, '')
  const parts = pathWithoutExt.split('/')
  const last = parts[parts.length - 1]
  if (last === 'index' || last === 'page') {
    parts.pop()
  }
  return parts
}

export async function listMdxFiles(baseDir: string): Promise<string[]> {
  const files: string[] = []
  for await (const file of glob('**/*.mdx', { cwd: baseDir })) {
    files.push(file)
  }
  return files
}

export async function parseMdxFrontmatter<TSchema extends z.ZodTypeAny>(
  baseDir: string,
  filePath: string,
  schema: TSchema,
): Promise<{
  frontmatter: z.infer<TSchema>
  excerpt?: string
}> {
  const fullPath = path.join(baseDir, filePath)
  const fileContents = await fs.readFile(fullPath, 'utf8')
  const { data, excerpt } = matter(fileContents)
  const frontmatter = schema.parse(data)
  return { excerpt, frontmatter }
}

export function toEntry(
  filePath: string,
  excerpt?: string,
): { filePath: string; params: string[]; slug: string; excerpt?: string } {
  const params = getSlugFromPath(filePath)
  return { excerpt, filePath, params, slug: params.join('/') }
}
