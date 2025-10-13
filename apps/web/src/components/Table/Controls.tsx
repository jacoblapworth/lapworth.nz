import type { Column, Header, Table } from '@tanstack/react-table'
import { useDeferredValue } from 'react'
import { HStack } from '@/styled/jsx'
import { ColumnsMenu } from './ColumnsMenu'
import type { AppliedFilter } from './Filters'
import { FiltersToggle } from './FiltersToggle'
import { Search } from './Search'
import { ViewMenu } from './ViewMenu'
import { type View, Views } from './Views'

interface Props<TData> {
  views: View[]
  appliedFilters?: AppliedFilter[]
  showFilters?: boolean
  query: string
  onToggleFilters: () => void
  onSearch: (query: string) => void
  headers: Header<TData, unknown>[]
  table: Table<TData>
  columns: Column<TData, unknown>[]
}

export function Controls<TData>({
  views,
  table,
  columns,
  appliedFilters,
  headers,
  showFilters,
  query,
  onToggleFilters,
  onSearch,
}: Props<TData>) {
  return (
    <HStack
      borderBottomColor="xero.border.soft"
      borderBottomStyle="solid"
      borderBottomWidth={1}
      gap={8}
      justifyContent="space-between"
      padding={8}
    >
      <Views views={views} />
      <HStack alignItems="stretch" gap={8}>
        <Search table={table} />
        <FiltersToggle
          filterCount={appliedFilters?.length}
          isSelected={showFilters}
          onClick={onToggleFilters}
        />
        <ColumnsMenu columns={columns} headers={headers} />
        <ViewMenu />
      </HStack>
    </HStack>
  )
}
