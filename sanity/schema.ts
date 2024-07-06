import { type SchemaTypeDefinition } from 'sanity'

import { gearType } from './schemaTypes/gearType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gearType],
}
