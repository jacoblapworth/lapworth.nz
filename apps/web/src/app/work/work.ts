import type { StaticImageData } from 'next/image'
import { z } from 'zod/v4'
import { getSlugFromPath, listMdxFiles, parseMdxFrontmatter } from '@/lib/mdx'

const WorkFrontmatter = z.object({
  category: z.string().optional(),
  cover: z.string().optional(),
  date: z.coerce.date(),
  description: z.string().max(999).optional(),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  links: z
    .array(
      z.object({
        href: z.string().url(),
        label: z.string().max(49),
      }),
    )
    .optional(),
  tags: z.array(z.string()).default([]),
  title: z.string().max(99),
})

export type WorkFrontmatter = z.infer<typeof WorkFrontmatter>

export const Work = WorkFrontmatter.extend({
  content: z.string(),
  cover: z.custom<StaticImageData>().optional(),
  params: z.array(z.string()),
  slug: z.string(),
})

export type Work = z.infer<typeof Work>

const WORK_DIR = process.cwd() + '/src/app/work'

async function getWork(): Promise<Work[]> {
  const files = await listMdxFiles(WORK_DIR)
  const items = await Promise.all(
    files.map(async (filePath) => {
      const { frontmatter, excerpt, content } = await parseMdxFrontmatter(
        WORK_DIR,
        filePath,
        WorkFrontmatter,
      )
      const params = getSlugFromPath(filePath)
      const slug = params.join('/')

      let cover: StaticImageData | undefined
      if (frontmatter.cover) {
        try {
          // Import cover relative to this file's directory
          const imagePath = `./${slug}/${frontmatter.cover}`
          cover = (await import(imagePath)).default as StaticImageData
        } catch (error) {
          console.error(`Error importing cover for work ${slug}:`, error)
        }
      }

      return {
        ...frontmatter,
        content,
        cover,
        // Keep excerpt available if needed later (not in schema)
        // @ts-expect-error - excerpt is not part of Work schema
        excerpt,
        params,
        slug,
      } satisfies Work
    }),
  )

  // Filter out any nulls just in case
  return items.filter(Boolean)
}

export const work = await getWork()
