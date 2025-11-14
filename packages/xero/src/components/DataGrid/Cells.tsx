import type { CellContext, RowData } from '@tanstack/react-table'
import { useFormatter } from 'next-intl'

export function TextCell<TData extends RowData, TValue>({
  ctx,
}: {
  ctx: CellContext<TData, TValue>
}) {
  const value = ctx.getValue()
  return value
}

export function DateCell<TData extends RowData, TValue>({
  ctx,
}: {
  ctx: CellContext<TData, TValue>
}) {
  const format = useFormatter()
  const value = ctx.getValue()

  if (value instanceof Date) {
    return format.dateTime(value, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }

  return ''
}

export function CurrencyCell<TData extends RowData, TValue>({
  ctx,
}: {
  ctx: CellContext<TData, TValue>
}) {
  const format = useFormatter()
  const value = ctx.getValue()

  if (typeof value === 'number') {
    return format.number(value, {
      compactDisplay: 'short',
      currency: 'GBP',
      // currencyDisplay: 'symbol',
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
      style: 'currency',
    })
  }
}
