import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
} from '@shikijs/transformers'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { rehypePrettyCode } from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeUnwrapImages from 'rehype-unwrap-images'
import remarkGfm from 'remark-gfm'

import { defineCollection, defineConfig, s } from 'velite'

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split('/'),
})

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
    cook: s.string().optional(),
    draft: s.boolean().default(false),
    excerpt: s.excerpt(),
    image: s.image().optional(),
    markdown: s.markdown(),
    mdx: s.mdx(),
    metadata: s.metadata(),
    prep: s.string().optional(),
    raw: s.raw(),
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
      category: s.string().optional(),
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
            href: s.string().url(),
            label: s.string().max(49),
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
    .transform((data) => ({ ...data, permalink: `/work/${data.slug}` }))
    .transform(computedFields),
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
      [
        rehypePrettyCode,
        {
          defaultColor: false,
          theme: {
            dark: 'github-dark-dimmed',
            light: 'github-light',
          },
          transformers: [
            transformerNotationDiff({ matchAlgorithm: 'v3' }),
            transformerNotationHighlight({ matchAlgorithm: 'v3' }),
            transformerNotationFocus({ matchAlgorithm: 'v3' }),
            transformerNotationErrorLevel({ matchAlgorithm: 'v3' }),
          ],
        },
      ],
      [rehypeUnwrapImages],
      [rehypeSlug],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            ariaLabel: 'Link to section',
          },
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
    console.log(work)
    work.sort((a, b) => (a.date > b.date ? -1 : 1))
  },
  root: 'src/content',
})
