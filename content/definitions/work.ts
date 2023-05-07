import { defineDocumentType } from 'contentlayer/source-files'

import { computedFields } from './shared'

export const Work = defineDocumentType(() => ({
  name: 'Work',
  filePathPattern: `work/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
    status: {
      type: 'enum',
      options: ['draft', 'published'],
      required: true,
      default: 'published',
    },
  },
  computedFields,
}))
