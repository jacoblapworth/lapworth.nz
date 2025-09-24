import rehypeShiki from '@shikijs/rehype'
import { transformerNotationDiff } from '@shikijs/transformers'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { rehypePrettyCode } from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

import { defineCollection, defineConfig, s } from 'velite'

const meta = s
  .object({
    description: s.string().optional(),
    keywords: s.array(s.string()).optional(),
    title: s.string().optional(),
  })
  .default({})

const recipes = defineCollection({
  name: 'Recipe',
  pattern: 'recipes/**/*.mdx',
  schema: s.object({
    content: s.mdx(),
    cook: s.string().optional(),
    draft: s.boolean().default(false),
    excerpt: s.excerpt(),
    image: s.image().optional(),
    metadata: s.metadata(),
    prep: s.string().optional(),
    servings: s.number().min(1).optional(),
    slug: s.slug('recipes'),
    title: s.string().max(99),
    toc: s.toc(),
  }),
})

const work = defineCollection({
  name: 'Work',
  pattern: 'work/**/*.mdx',
  schema: s
    .object({
      categories: s.array(s.string()).default(['work']),
      content: s.mdx(),
      cover: s.image().optional(),
      date: s.isodate(),
      description: s.string().max(999).optional(),
      draft: s.boolean().default(false),
      excerpt: s.excerpt(),
      featured: s.boolean().default(false),
      links: s
        .array(
          s.object({
            label: s.string().max(49),
            url: s.string().url(),
          }),
        )
        .optional(),
      meta: meta,
      metadata: s.metadata(),
      slug: s.slug('work'),
      tags: s.array(s.string()).default([]),
      title: s.string().max(99),
      toc: s.toc(),
      video: s.file().optional(),
    })
    .transform((data) => ({ ...data, permalink: `/work/${data.slug}` })),
})

export default defineConfig({
  collections: {
    recipes,
    work,
  },
  complete({ work, recipes }) {
    const drafts = work.filter(({ draft }) => draft)
    console.info(`Work: ${work.length}`)
    console.info(`Recipes: ${recipes.length}`)
    console.info(`Drafts: ${drafts.length}`)
  },
  mdx: {
    rehypePlugins: [
      rehypePrettyCode,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            ariaLabel: 'Link to section',
            className: ['subheading-anchor'],
          },
        },
      ],
      [
        rehypeShiki,
        {
          defaultColor: 'light-dark()',
          themes: {
            dark: 'github-dark',
            light: 'github-light',
          },
          transformers: [transformerNotationDiff()],
        },
      ],
    ],
    remarkPlugins: [remarkGfm],
  },
  output: {
    assets: 'public/static',
    base: '/static/',
    clean: true,
    data: '.velite',
    name: '[name].[hash:8].[ext]',
  },
  prepare: ({ work }) => {
    work.sort((a, b) => (a.date > b.date ? -1 : 1))
  },
  root: 'src/content',
})
