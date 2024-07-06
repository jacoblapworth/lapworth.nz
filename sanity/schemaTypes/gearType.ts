import { defineField, defineType } from 'sanity'

export const gearType = defineType({
  name: 'gear',
  title: 'Gear',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
