import { type SchemaTypeDefinition } from 'sanity'

import {
  gearType,
  gearBrandType,
  gearCategoryType,
} from './schemaTypes/gearType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gearType, gearBrandType, gearCategoryType],
}
