import type { StaticImageData } from 'next/image'
import { z } from 'zod/v4'

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
  cover: z.custom<StaticImageData>().optional(),
  slug: z.string(),
})

export type Work = z.infer<typeof Work>

async function getWork(): Promise<Work[]> {
  return []
}

export const work = await getWork()
