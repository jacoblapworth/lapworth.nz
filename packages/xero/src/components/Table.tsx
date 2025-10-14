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
import { cx } from '@/styled/css'
import { styled } from '@/styled/jsx'
import { type BulkAction, BulkActions } from './BulkActions'
import { Controls } from './Controls'
import { DataGrid } from './DataGrid'
import { Filters } from './Filters'
import { Pagination } from './Pagination'

const inter = Inter({ subsets: ['latin'], variable: '--fonts-inter' })

const Container = styled('div', {
  base: {
    backgroundColor: 'white',
    borderColor: 'border.subtle',
    borderRadius: 6,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: 'sm',
    color: 'text.primary',
    display: 'flex',
    flexDirection: 'column',
  },
})

export function useTable<TData extends RowData>({
  initialState: { pagination, ...initialState } = {},
  ...props
}: Omit<
  TableOptions<TData>,
  'getCoreRowModel' | 'getSortedRowModel' | 'getFilteredRowModel'
>) {
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
    initialState: {
      pagination: {
        ...pagination,
        pageSize: 20,
      },
      ...initialState,
    },
    ...props,
  })
}

interface Props<TData extends RowData> {
  table: ReturnType<typeof useTable<TData>>
  bulkActions: BulkAction[]
  /**
   * The key of the column to sum for the summary row
   *
   * Must be a number column
   */
  summaryTotalKey: string
}

export function Table<TData extends RowData>({
  table,
  bulkActions,
  summaryTotalKey,
}: Props<TData>) {
  // const [showFilters, setShowFilters] = useQueryState(
  //   'filter',
  //   parseAsBoolean.withDefault(false),
  // )
  const [showFilters, setShowFilters] = useState(true)
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

  const summary = summaryRowModel.flatRows
    .map((v) => v.getValue<number>(summaryTotalKey))
    .reduce((a, b) => a + b, 0)

  return (
    <Container className={cx(inter.className, inter.variable)}>
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
        selectedCount={summaryRowModel.flatRows.length}
        summary={summary.toFixed(2)}
      />
      <DataGrid table={table} />
      <Pagination
        canNextPage={table.getCanNextPage()}
        canPreviousPage={table.getCanPreviousPage()}
        currentPage={table.getState().pagination.pageIndex}
        onNext={table.nextPage}
        onPageSizeChange={table.setPageSize}
        onPrevious={table.previousPage}
        pageCount={table.getPageCount()}
        pageSize={table.getState().pagination.pageSize}
        total={table.getRowCount()}
      />
    </Container>
  )
}
