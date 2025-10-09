import {
  type ColumnPinningState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type RowData,
  type TableOptions,
  useReactTable,
} from '@tanstack/react-table'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { styled } from '@/styled/jsx'
import { type BulkAction, BulkActions } from './BulkActions'
import { Controls } from './Controls'
import { DataGrid } from './DataGrid'
import { Filters } from './Filters'
import { Pagination } from './Pagination'

const inter = Inter({ subsets: ['latin'] })

const Container = styled('div', {
  base: {
    backgroundColor: 'white',
    borderColor: 'xero.border.subtle',
    borderRadius: 6,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: 'sm',
    color: 'xero.text.primary',
    display: 'flex',
    flexDirection: 'column',
  },
})

export function useTable<TData extends RowData>(
  props: Omit<
    TableOptions<TData>,
    'getCoreRowModel' | 'getSortedRowModel' | 'getFilteredRowModel'
  >,
) {
  const debug = false

  return useReactTable<TData>({
    columnResizeDirection: 'ltr',
    columnResizeMode: 'onChange',
    debugColumns: debug,
    debugHeaders: debug,
    debugTable: debug,
    defaultColumn: {
      maxSize: 800,
      minSize: 32,
    },
    enableColumnResizing: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    ...props,
  })
}

interface Props<TData extends RowData> {
  table: ReturnType<typeof useTable<TData>>
}

export function Table<TData extends RowData>({ table }: Props<TData>) {
  const [showFilters, setShowFilters] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [bulkActions, setBulkActions] = useState<BulkAction[]>([
    {
      id: 'delete',
      label: 'Delete',
      onClick: () => alert('Delete'),
    },
  ])
  const [filters, setFilters] = useState([
    {
      id: 'status',
      label: 'Status',
      operator: 'is',
      value: 'draft',
    },
  ])

  // const summaryRowModel = table.getFilteredSelectedRowModel()

  // summaryRowModel.flatRows
  //   .map((v) => v.getValue('paid'))
  //   .reduce((a, b) => a + b, 0)

  return (
    <Container className={inter.className}>
      <Controls
        columns={table.getAllFlatColumns()}
        filters={filters}
        headers={table.getFlatHeaders()}
        onSearch={setSearchQuery}
        onToggleFilters={() => setShowFilters((v) => !v)}
        searchQuery={searchQuery}
        showFilters={showFilters}
        table={table}
      />
      {showFilters && (
        <Filters
          filters={filters}
          onClear={() => setFilters([])}
          onRemove={(id) => setFilters((fs) => fs.filter((f) => f.id !== id))}
        />
      )}
      <BulkActions actions={bulkActions} />
      <DataGrid table={table} />
      <Pagination
        canNextPage={table.getCanNextPage()}
        canPreviousPage={table.getCanPreviousPage()}
        onNext={table.nextPage}
        onPrevious={table.previousPage}
        total={table.getRowModel().rows.length}
      />
    </Container>
  )
}
