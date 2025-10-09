import type { Column, Header, Table } from '@tanstack/react-table'
import { HStack } from '@/styled/jsx'
import { ColumnsMenu } from './ColumnsMenu'
import type { Filter } from './Filters'
import { FiltersToggle } from './FiltersToggle'
import { Search } from './Search'
import { ViewMenu } from './ViewMenu'
import { Views } from './Views'

interface Props<TData> {
  filters?: Filter[]
  showFilters: boolean
  searchQuery: string
  onToggleFilters: () => void
  onSearch: (query: string) => void
  headers: Header<TData, unknown>[]
  table: Table<TData>
  columns: Column<TData, unknown>[]
}

export function Controls<TData>({
  columns,
  filters,
  headers,
  showFilters,
  searchQuery,
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
      <Views
        views={[
          { id: 'all', label: 'All' },
          { id: 'invoices', label: 'Invoices' },
          { id: 'bills', label: 'Bills' },
        ]}
      />
      <HStack alignItems="stretch" gap={8}>
        <Search onSearch={onSearch} query={searchQuery} />
        <FiltersToggle
          filterCount={filters?.length}
          isSelected={showFilters}
          onClick={onToggleFilters}
        />
        <ColumnsMenu columns={columns} headers={headers} />
        <ViewMenu />
      </HStack>
    </HStack>
  )
}
