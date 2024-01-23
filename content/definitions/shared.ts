import { ComputedFields, defineNestedType } from 'contentlayer/source-files'

export const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },

  slugAsParams: {
    type: 'list',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1),
  },
}

export const LabelledLink = defineNestedType(() => ({
  name: 'LabelledLink',
  fields: {
    label: { type: 'string', required: true },
    url: { type: 'string', required: true },
  },
}))
