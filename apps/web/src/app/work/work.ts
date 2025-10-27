import type { StaticImageData } from 'next/image'
import { z } from 'zod/v4'

const WorkFrontmatter = z.object({
  category: z.string().optional(),
  cover: z.image().optional(),
  date: z.isodate(),
  description: z.string().max(999).optional(),
  draft: z.boolean().default(false),
  excerpt: z.excerpt(),
  featured: z.boolean().default(false),
  links: s
    .array(
      z.object({
        href: z.string().url(),
        label: z.string().max(49),
      }),
    )
    .optional(),
  meta: meta,
  metadata: z.metadata(),
  path: z.path(),
  tags: z.array(z.string()).default([]),
  title: z.string().max(99),
  toc: z.toc(),
  video: z.file().optional(),
})

export type WorkFrontmatter = z.infer<typeof WorkFrontmatter>

export const Work = WorkFrontmatter.extend({
  cover: z.custom<StaticImageData>().optional(),
  slug: z.string(),
})

export type Work = z.infer<typeof Work>

async function getWork(): Promise<Work[]> {
  return []
}

export const work = await getWork()
