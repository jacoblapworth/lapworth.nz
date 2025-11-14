import type { Column, Header, RowData, Table } from '@tanstack/react-table'
import { HStack } from '@/styled/jsx'
import { ColumnsMenu } from './ColumnsMenu'
import { DataFiltersToggle } from './DataFiltersToggle'
import { type View, Views } from './DataViews'
import { DataTableSearch } from './data-table-search'
import type { AppliedFilter } from './Filters'
import { ViewMenu } from './ViewMenu'

interface Props<TData extends RowData> {
  views: View[]
  appliedFilters?: AppliedFilter[]
  showFilters?: boolean
  query: string
  onToggleFilters: () => void
  onSearch: (query: string) => void
  onViewChange: (viewId: string | null | undefined) => void
  selectedViewId: string | null | undefined
  headers: Header<TData, unknown>[]
  table: Table<TData>
  columns: Column<TData, unknown>[]
}

export function Controls<TData extends RowData>({
  views,
  table,
  columns,
  appliedFilters,
  headers,
  showFilters,
  query,
  onToggleFilters,
  onSearch,
  onViewChange,
  selectedViewId,
}: Props<TData>) {
  return (
    <HStack
      borderBottomColor="border.soft"
      borderBottomStyle="solid"
      borderBottomWidth={1}
      flexWrap="wrap"
      gap={8}
      justifyContent="space-between"
      padding={8}
    >
      <Views
        onChange={onViewChange}
        selectedId={selectedViewId}
        views={views}
      />
      <HStack
        alignItems="stretch"
        flexGrow={1}
        flexWrap="wrap"
        gap={8}
        justifyContent="flex-end"
        // maxWidth={700}
      >
        <DataTableSearch table={table} />
        <HStack alignItems="stretch" flexWrap="wrap" gap={8}>
          <DataFiltersToggle
            filterCount={appliedFilters?.length}
            isSelected={showFilters}
            onClick={onToggleFilters}
          />
          <ColumnsMenu columns={columns} headers={headers} />
          <ViewMenu />
        </HStack>
      </HStack>
    </HStack>
  )
}
