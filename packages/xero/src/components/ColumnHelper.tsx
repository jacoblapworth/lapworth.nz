import type { HeaderContext } from '@tanstack/react-table'

export function footer<TData, TValue>(ctx: HeaderContext<TData, TValue>) {
  const fn = ctx.column.getAutoAggregationFn()

  if (!fn) return null

  const { rows, flatRows } = ctx.table.getPrePaginationRowModel()
  return fn(ctx.column.id, rows, flatRows)
}
