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
import { defineCollection, defineConfig, s } from 'velite'
import { nextImage } from '@/components/mdx/remark-next-image'

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
      path: s.path(),
      tags: s.array(s.string()).default([]),
      title: s.string().max(99),
      toc: s.toc(),
      video: s.file().optional(),
    })
    .transform((data) => {
      const params = data.path.split('/').slice(1)
      return {
        params,
        slug: params.join('/'),
        ...data,
      }
    }),
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
    copyLinkedFiles: true,
    gfm: true,
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
    remarkPlugins: [nextImage],
    removeComments: true,
  },
  output: {
    assets: 'public/static',
    base: '/static/',
    clean: true,
    data: '.velite',
    name: '[name].[hash:8].[ext]',
  },
  prepare: ({ work, recipes }) => {
    work.sort((a, b) => (a.date > b.date ? -1 : 1))
    recipes.sort((a, b) => (a.title < b.title ? -1 : 1))
  },
  root: 'src/content',
})
