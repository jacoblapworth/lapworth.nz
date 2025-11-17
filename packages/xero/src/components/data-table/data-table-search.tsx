'use client'

import type { RowData, Table } from '@tanstack/react-table'
import { useState } from 'react'
import { Search } from '../search'

interface Props<TData extends RowData> {
  table: Table<TData>
}

export function DataTableSearch<TData extends RowData>({
  table,
}: Props<TData>) {
  const [query, setQuery] = useState('')
  return (
    <Search
      label="Search table"
      onChange={(e) => {
        setQuery(e.target.value)
        table.setGlobalFilter(e.target.value)
      }}
      onClear={() => {
        setQuery('')
        table.setGlobalFilter('')
      }}
      size="sm"
      value={query}
    />
  )
}
