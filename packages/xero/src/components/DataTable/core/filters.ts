import { isAnyOf, uniq } from '../lib/array'
import { isColumnOptionArray } from '../lib/helpers'
import type {
  ColumnConfig,
  ColumnDataType,
  ColumnOption,
  ElementType,
  FilterStrategy,
  Nullable,
  TAccessorFn,
  TOrderFn,
  TTransformOptionFn,
} from './types'

class ColumnConfigBuilder<
  TData,
  TType extends ColumnDataType = any,
  TVal = unknown,
  TId extends string = string, // Add TId generic
> {
  private config: Partial<ColumnConfig<TData, TType, TVal, TId>>

  constructor(type: TType) {
    this.config = { type } as Partial<ColumnConfig<TData, TType, TVal, TId>>
  }

  private clone(): ColumnConfigBuilder<TData, TType, TVal, TId> {
    const newInstance = new ColumnConfigBuilder<TData, TType, TVal, TId>(
      this.config.type as TType,
    )
    newInstance.config = { ...this.config }
    return newInstance
  }

  id<TNewId extends string>(
    value: TNewId,
  ): ColumnConfigBuilder<TData, TType, TVal, TNewId> {
    const newInstance = this.clone() as any // We'll refine this
    newInstance.config.id = value
    return newInstance as ColumnConfigBuilder<TData, TType, TVal, TNewId>
  }

  accessor<TNewVal>(
    accessor: TAccessorFn<TData, TNewVal>,
  ): ColumnConfigBuilder<TData, TType, TNewVal, TId> {
    const newInstance = this.clone() as any
    newInstance.config.accessor = accessor
    return newInstance as ColumnConfigBuilder<TData, TType, TNewVal, TId>
  }

  displayName(value: string): ColumnConfigBuilder<TData, TType, TVal, TId> {
    const newInstance = this.clone()
    newInstance.config.displayName = value
    return newInstance
  }

  icon(value: any): ColumnConfigBuilder<TData, TType, TVal, TId> {
    const newInstance = this.clone()
    newInstance.config.icon = value
    return newInstance
  }

  min(
    value: number,
  ): ColumnConfigBuilder<
    TData,
    TType extends 'number' ? TType : never,
    TVal,
    TId
  > {
    if (this.config.type !== 'number') {
      throw new Error('min() is only applicable to number columns')
    }
    const newInstance = this.clone() as any
    newInstance.config.min = value
    return newInstance
  }

  max(
    value: number,
  ): ColumnConfigBuilder<
    TData,
    TType extends 'number' ? TType : never,
    TVal,
    TId
  > {
    if (this.config.type !== 'number') {
      throw new Error('max() is only applicable to number columns')
    }
    const newInstance = this.clone() as any
    newInstance.config.max = value
    return newInstance
  }

  options(
    value: ColumnOption[],
  ): ColumnConfigBuilder<
    TData,
    TType extends 'option' | 'multiOption' ? TType : never,
    TVal,
    TId
  > {
    if (!isAnyOf(this.config.type, ['option', 'multiOption'])) {
      throw new Error(
        'options() is only applicable to option or multiOption columns',
      )
    }
    const newInstance = this.clone() as any
    newInstance.config.options = value
    return newInstance
  }

  transformOptionFn(
    fn: TTransformOptionFn<TVal>,
  ): ColumnConfigBuilder<
    TData,
    TType extends 'option' | 'multiOption' ? TType : never,
    TVal,
    TId
  > {
    if (!isAnyOf(this.config.type, ['option', 'multiOption'])) {
      throw new Error(
        'transformOptionFn() is only applicable to option or multiOption columns',
      )
    }
    const newInstance = this.clone() as any
    newInstance.config.transformOptionFn = fn
    return newInstance
  }

  orderFn(
    fn: TOrderFn<TVal>,
  ): ColumnConfigBuilder<
    TData,
    TType extends 'option' | 'multiOption' ? TType : never,
    TVal,
    TId
  > {
    if (!isAnyOf(this.config.type, ['option', 'multiOption'])) {
      throw new Error(
        'orderFn() is only applicable to option or multiOption columns',
      )
    }
    const newInstance = this.clone() as any
    newInstance.config.orderFn = fn
    return newInstance
  }

  build(): ColumnConfig<TData, TType, TVal, TId> {
    if (!this.config.id) throw new Error('id is required')
    if (!this.config.accessor) throw new Error('accessor is required')
    if (!this.config.displayName) throw new Error('displayName is required')
    if (!this.config.icon) throw new Error('icon is required')
    return this.config as ColumnConfig<TData, TType, TVal, TId>
  }
}

// Update the helper interface
interface FluentColumnConfigHelper<TData> {
  text: () => ColumnConfigBuilder<TData, 'text', string>
  number: () => ColumnConfigBuilder<TData, 'number', number>
  date: () => ColumnConfigBuilder<TData, 'date', Date>
  option: () => ColumnConfigBuilder<TData, 'option', string>
  multiOption: () => ColumnConfigBuilder<TData, 'multiOption', string[]>
}

// Factory function remains mostly the same
export function createColumnConfigHelper<
  TData,
>(): FluentColumnConfigHelper<TData> {
  return {
    date: () => new ColumnConfigBuilder<TData, 'date', Date>('date'),
    multiOption: () =>
      new ColumnConfigBuilder<TData, 'multiOption', string[]>('multiOption'),
    number: () => new ColumnConfigBuilder<TData, 'number', number>('number'),
    option: () => new ColumnConfigBuilder<TData, 'option', string>('option'),
    text: () => new ColumnConfigBuilder<TData, 'text', string>('text'),
  }
}

export function getColumnOptions<TData, TType extends ColumnDataType, TVal>(
  column: ColumnConfig<TData, TType, TVal>,
  data: TData[],
  strategy: FilterStrategy,
): ColumnOption[] {
  if (!isAnyOf(column.type, ['option', 'multiOption'])) {
    console.warn(
      'Column options can only be retrieved for option and multiOption columns',
    )
    return []
  }

  if (strategy === 'server' && !column.options) {
    throw new Error('column options are required for server-side filtering')
  }

  if (column.options) {
    return column.options
  }

  const filtered = data
    .flatMap(column.accessor)
    .filter((v): v is NonNullable<TVal> => v !== undefined && v !== null)

  let models = uniq(filtered)

  if (column.orderFn) {
    const sort = column.orderFn
    models = models.sort((m1, m2) =>
      sort(
        m1 as ElementType<NonNullable<TVal>>,
        m2 as ElementType<NonNullable<TVal>>,
      ),
    )
  }

  // if (column.transformOptionFn) {
  //   // Memoize transformOptionFn calls
  //   const memoizedTransform = (model) =>
  //       (deps[0] ?? [])
  //         .map((m) =>
  //           column.transformOptionFn?.(m as ElementType<NonNullable<TVal>>),
  //         )
  //         .filter(Boolean),

  //   return memoizedTransform() ?? []
  // }

  if (isColumnOptionArray(models)) return models

  throw new Error(
    `[data-table-filter] [${column.id}] Either provide static options, a transformOptionFn, or ensure the column data conforms to ColumnOption type`,
  )
}

export function getFacetedUniqueValues<
  TData,
  TType extends ColumnDataType,
  TVal,
>(
  column: ColumnConfig<TData, TType, TVal>,
  values: string[] | ColumnOption[],
  strategy: FilterStrategy,
): Map<string, number> | undefined {
  if (!isAnyOf(column.type, ['option', 'multiOption'])) {
    console.warn(
      'Faceted unique values can only be retrieved for option and multiOption columns',
    )
    return new Map<string, number>()
  }

  if (strategy === 'server') {
    return column.facetedOptions
  }

  const acc = new Map<string, number>()

  if (isColumnOptionArray(values)) {
    for (const option of values) {
      const curr = acc.get(option.value) ?? 0
      acc.set(option.value, curr + 1)
    }
  } else {
    for (const option of values) {
      const curr = acc.get(option as string) ?? 0
      acc.set(option as string, curr + 1)
    }
  }

  return acc
}

export function getFacetedMinMaxValues<
  TData,
  TType extends ColumnDataType,
  TVal,
>(
  column: ColumnConfig<TData, TType, TVal>,
  data: TData[],
  strategy: FilterStrategy,
): [number, number] | undefined {
  if (column.type !== 'number') return undefined // Only applicable to number columns

  if (typeof column.min === 'number' && typeof column.max === 'number') {
    return [column.min, column.max]
  }

  if (strategy === 'server') {
    return undefined
  }

  const values = data
    .flatMap((row) => column.accessor(row) as Nullable<number>)
    .filter((v): v is number => typeof v === 'number' && !Number.isNaN(v))

  if (values.length === 0) {
    return [0, 0] // Fallback to config or reasonable defaults
  }

  const min = Math.min(...values)
  const max = Math.max(...values)

  return [min, max]
}
