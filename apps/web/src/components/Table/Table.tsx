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
import { parseAsBoolean, useQueryState } from 'nuqs'
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
  return useReactTable<TData>({
    columnResizeDirection: 'ltr',
    columnResizeMode: 'onChange',
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
  bulkActions: BulkAction[]
}

export function Table<TData extends RowData>({
  table,
  bulkActions,
}: Props<TData>) {
  const [showFilters, setShowFilters] = useQueryState(
    'filter',
    parseAsBoolean.withDefault(false),
  )
  const [searchQuery, setSearchQuery] = useState('')
  const [appliedFilters, setAppliedFilters] = useState([
    {
      id: 'status',
      label: 'Status',
      operator: 'is',
      value: 'draft',
    },
  ])

  const filters = table
    .getAllFlatColumns()
    .filter((col) => col.getCanFilter())
    .map(({ columnDef: { id, header } }) => {
      if (!header || typeof header !== 'string' || !id) {
        return undefined
      }
      return {
        id,
        label: header,
      }
    })
    .filter(Boolean)

  const summaryRowModel = table.getFilteredSelectedRowModel()

  summaryRowModel.flatRows
    .map((v) => v.getValue<number>('paid'))
    .reduce((a, b) => a + b, 0)

  return (
    <Container className={inter.className}>
      <Controls
        appliedFilters={appliedFilters}
        columns={table.getAllFlatColumns()}
        headers={table.getFlatHeaders()}
        onSearch={setSearchQuery}
        onToggleFilters={() => setShowFilters((v) => !v)}
        query={searchQuery}
        showFilters={showFilters}
        table={table}
        views={[
          { id: 'all', label: 'All' },
          { id: 'invoices', label: 'Invoices' },
          { id: 'bills', label: 'Bills' },
        ]}
      />
      {showFilters && (
        <Filters
          appliedFilters={appliedFilters}
          filters={filters}
          onClear={() => setAppliedFilters([])}
          onRemove={(id) =>
            setAppliedFilters((fs) => fs.filter((f) => f.id !== id))
          }
        />
      )}
      <BulkActions
        actions={bulkActions}
        isDisabled={!table.getIsSomeRowsSelected()}
      />
      <DataGrid table={table} />
      <Pagination
        canNextPage={table.getCanNextPage()}
        canPreviousPage={table.getCanPreviousPage()}
        onNext={table.nextPage}
        onPrevious={table.previousPage}
        total={table.getRowCount()}
      />
    </Container>
  )
}
