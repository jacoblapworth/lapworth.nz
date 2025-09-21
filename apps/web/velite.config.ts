import rehypeShiki from '@shikijs/rehype'
import { rehypePrettyCode } from 'rehype-pretty-code'
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
      // updated: timestamp(),
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
    clean: false,
  },
  collections: {
    work,
    recipe,
  },
  mdx: {
    rehypePlugins: [
      [rehypePrettyCode],
      [
        rehypeShiki,
        {
          theme: 'one-dark-pro',
        },
      ],
    ],
  },
  // prepare: ({ categories, tags, posts }) => {
  //   const docs = posts.filter(
  //     (i) => process.env.NODE_ENV !== 'production' || !i.draft,
  //   )

  //   // missing categories, tags from posts or courses inlined
  //   const categoriesFromDoc = Array.from(
  //     new Set(docs.flatMap((i) => i.categories)),
  //   ).filter((i) => categories.find((j) => j.name === i) == null)
  //   categories.push(
  //     ...categoriesFromDoc.map((name) => ({
  //       name,
  //       slug: slugify(name),
  //       permalink: '',
  //       count: { total: 0, posts: 0 },
  //     })),
  //   )
  //   for (const category of categories) {
  //     category.count.posts = posts.filter((j) =>
  //       j.categories.includes(category.name),
  //     ).length
  //     category.count.total = category.count.posts
  //     category.permalink = `/${category.slug}`
  //   }

  //   const tagsFromDoc = Array.from(new Set(docs.flatMap((i) => i.tags))).filter(
  //     (i) => tags.find((j) => j.name === i) == null,
  //   )
  //   tags.push(
  //     ...tagsFromDoc.map((name) => ({
  //       name,
  //       slug: slugify(name),
  //       permalink: '',
  //       count: { total: 0, posts: 0 },
  //     })),
  //   )
  //   for (const tag of tags) {
  //     tag.count.posts = posts.filter((j) => j.tags.includes(tag.name)).length
  //     tag.count.total = tag.count.posts
  //     tag.permalink = `/${tag.slug}`
  //   }

  //   // push extra data to collections, it's ok!! but they are not type-safed
  //   // Object.assign(collections, {
  //   //   anything: { name: 'Anything', data: { name: 'Anything' } },
  //   //   list: ['one', 'two', 'three']
  //   // })

  //   // return false // return false to prevent velite from writing data to disk
  // },
})
