import rehypeShiki from '@shikijs/rehype'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { rehypePrettyCode } from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'

import { defineCollection, defineConfig, s } from 'velite'

const meta = s
  .object({
    title: s.string().optional(),
    description: s.string().optional(),
    keywords: s.array(s.string()).optional(),
  })
  .default({})

const recipe = defineCollection({
  name: 'Recipe',
  pattern: 'recipes/**/*.mdx',
  schema: s.object({
    draft: s.boolean().default(false),
    title: s.string().max(99),
    slug: s.slug('recipes'),
    servings: s.number().min(1).optional(),
    image: s.image().optional(),
    prep: s.string().optional(),
    cook: s.string().optional(),
    toc: s.toc(),
    metadata: s.metadata(),
    excerpt: s.excerpt(),
    content: s.mdx(),
  }),
})

const work = defineCollection({
  name: 'Work',
  pattern: 'work/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.slug('work'),
      date: s.isodate(),
      cover: s.image().optional(),
      video: s.file().optional(),
      description: s.string().max(999).optional(),
      draft: s.boolean().default(false),
      featured: s.boolean().default(false),
      categories: s.array(s.string()).default(['Journal']),
      tags: s.array(s.string()).default([]),
      meta: meta,
      toc: s.toc(),
      metadata: s.metadata(),
      excerpt: s.excerpt(),
      content: s.mdx(),
    })
    .transform((data) => ({ ...data, permalink: `/work/${data.slug}` })),
})

export default defineConfig({
  root: 'src/content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: {
    work,
    recipe,
  },
  mdx: {
    rehypePlugins: [
      rehypePrettyCode,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
      [
        rehypeShiki,
        {
          theme: 'one-dark-pro',
        },
      ],
    ],
  },
})
