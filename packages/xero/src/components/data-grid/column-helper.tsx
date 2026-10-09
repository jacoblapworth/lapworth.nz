import type { CellData, HeaderContext, RowData } from '@tanstack/react-table'
import type { TableFeatures } from '../data-table/table'

export function footer<
  TData extends RowData,
  TValue extends CellData = CellData,
>(ctx: HeaderContext<TableFeatures, TData, TValue>) {
  const { rows } = ctx.table.getPrePaginatedRowModel()
  return ctx.column.getAggregationValue({
    rows,
  })
}
