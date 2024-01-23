import { defineDocumentType } from 'contentlayer/source-files'

import { LabelledLink, computedFields } from './shared'

export const Recipe = defineDocumentType(() => ({
  name: 'Recipe',
  filePathPattern: `recipes/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the recipe',
      required: true,
    },
    description: {
      type: 'string',
      description: 'Short summary of the recipe',
    },
    date: {
      type: 'date',
      description: 'The date of the recipe',
      required: true,
    },
    image: {
      type: 'string',
      description: 'The image of the recipe',
    },
    servings: {
      type: 'string',
      description: 'The number of servings',
    },
    prep: {
      type: 'string',
      description: 'The prep time',
    },
    cook: {
      type: 'string',
      description: 'The cook time',
    },
    source: {
      type: 'nested',
      of: LabelledLink,
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
