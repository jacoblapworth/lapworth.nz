import path from 'node:path'
import { cacheLife, cacheTag } from 'next/cache'
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
  hideFromRelated: z.boolean().default(false),
  links: z
    .array(
      z.object({
        href: z.url(),
        label: z.string().max(49),
      }),
    )
    .optional(),
  showRelated: z.boolean().default(true),
  tags: z.array(z.string()).default([]),
  title: z.string().max(99),
})

export type WorkFrontmatter = z.infer<typeof WorkFrontmatter>

export const Work = WorkFrontmatter.extend({
  cover: z.custom<StaticImageData>().optional(),
  excerpt: z.string().optional(),
  filePath: z.string(),
  params: z.array(z.string()),
  slug: z.string(),
})

export type Work = z.infer<typeof Work>

const WORK_DIR = path.join(process.cwd(), 'src/app/work')

export async function getWork(): Promise<Work[]> {
  'use cache'
  cacheTag('work')
  cacheLife('max')
  const files = await listMdxFiles(WORK_DIR)
  const items = await Promise.all(
    files.map(async (filePath) => {
      const { frontmatter, excerpt } = await parseMdxFrontmatter(
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
        cover,
        excerpt,
        filePath,
        params,
        slug,
      } satisfies Work
    }),
  )

  // Filter out any nulls just in case
  const validItems = items.filter(Boolean)

  validItems.sort((a, b) => b.date.getTime() - a.date.getTime())

  return validItems
}

export async function getPostBySlugParams(slug: string[]) {
  const work = await getWork()
  return work.find((post) => post.slug === slug.join('/'))
}

/**
 * Get related posts for a given post
 *
 * A simple algorithm that scores posts based on shared category and tags.
 */
export async function getRelatedPosts(
  currentPost: Work,
  limit = 3,
): Promise<Work[]> {
  const work = await getWork()
  // Calculate relevance score for each post
  const scoredPosts = work
    .filter(
      ({ slug, draft, hideFromRelated }) =>
        slug !== currentPost.slug && !draft && !hideFromRelated,
    )
    .map((post) => {
      let score = 0

      // Same category gets highest score
      if (currentPost.category && post.category === currentPost.category) {
        score += 10
      }

      // Shared tags get points
      const currentTags = currentPost.tags ?? []
      const postTags = post.tags ?? []
      const sharedTags = postTags.filter((tag) => currentTags.includes(tag))
      score += sharedTags.length * 2

      return { post, score }
    })
    .filter(({ score }) => score > 0) // Only include posts with some relevance
    .sort((a, b) => {
      // Sort by score first, then by date
      if (b.score !== a.score) {
        return b.score - a.score
      }
      return b.post.date.getTime() - a.post.date.getTime()
    })

  return scoredPosts.slice(0, limit).map(({ post }) => post)
}
