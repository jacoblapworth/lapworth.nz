'use client'

import {
  getCoreRowModel,
  getFilteredRowModel,
  getGroupedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type RowData,
  type TableOptions,
  useReactTable,
} from '@tanstack/react-table'
import { AnimatePresence, motion } from 'motion/react'
// import { Inter } from 'next/font/google'
import { useState } from 'react'
import { styled } from '@/styled/jsx'
import { DataGrid } from '../DataGrid'
import { Pagination } from '../Pagination'
import { type BulkAction, BulkActions } from './BulkActions'
import { Controls } from './Controls'
import type { View } from './DataViews'
import { Filters } from './Filters'
import {
  appliedFiltersToColumnFilters,
  columnFiltersToAppliedFilters,
} from './utils/filterUtils'

// const inter = Inter({ subsets: ['latin'], variable: '--fonts-inter' })

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

export function CollapsibleRow({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      animate={{
        height: 'auto',
        opacity: 1,
      }}
      exit={{
        height: 0,
        opacity: 0,
      }}
      initial={{
        height: 0,
        opacity: 0,
      }}
      key="filters"
      style={{
        overflow: 'hidden',
      }}
      transition={{
        duration: 0.1,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}

export function useTable<TData extends RowData>({
  meta,
  initialState: { pagination, ...initialState } = {},
  ...props
}: Omit<
  TableOptions<TData>,
  'getCoreRowModel' | 'getSortedRowModel' | 'getFilteredRowModel'
>) {
  return useReactTable<TData>({
    columnResizeDirection: 'ltr',
    columnResizeMode: 'onChange',
    // debugRows: true,
    // debugTable: true,
    // debugColumns: true,
    // debugHeaders: true,
    defaultColumn: {
      maxSize: 800,
      minSize: 32,
    },
    enableColumnResizing: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: {
        pageSize: 20,
        ...pagination,
      },
      ...initialState,
    },
    meta: {
      ...meta,
    },

    // onColumnFiltersChange: (e) => {
    //   if (typeof props.onColumnFiltersChange === 'function') {
    //     props.onColumnFiltersChange(e)
    //   } else {
    //     setAppliedFilters(e)
    //   }
    // },
    state: {
      // columnFilters: appliedFilters,
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
  views: View[]
}

export function Table<TData extends RowData>({
  table,
  bulkActions,
  summaryTotalKey,
  views,
}: Props<TData>) {
  // const [showFilters, setShowFilters] = useQueryState(
  //   'filter',
  //   parseAsBoolean.withDefault(false),
  // )
  const [showFilters, setShowFilters] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedViewId, setSelectedViewId] = useState<
    string | null | undefined
  >(views[0]?.id)

  const onViewChange = (viewId: string | null | undefined) => {
    setSelectedViewId(viewId)
    const view = views.find((v) => v.id === viewId)
    const newFilters = view?.filters || []

    // Convert AppliedFilter[] to ColumnFiltersState and apply to table
    const columnFilters = appliedFiltersToColumnFilters(newFilters)
    table.setColumnFilters(columnFilters)
  }

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

  // Convert table's columnFilters to AppliedFilter[] for UI components
  const appliedFilters = columnFiltersToAppliedFilters(
    table.getState().columnFilters,
    filters as { id: string; label: string }[],
  )

  const summaryRowModel = table.getFilteredSelectedRowModel()

  const _summary = summaryRowModel.flatRows
    .map((v) => v.getValue<number>(summaryTotalKey))
    .reduce((a, b) => a + b, 0)

  return (
    <Container
    // className={cx(inter.className, inter.variable)}
    >
      <Controls
        appliedFilters={appliedFilters}
        columns={table.getAllFlatColumns()}
        headers={table.getFlatHeaders()}
        onSearch={setSearchQuery}
        onToggleFilters={() => setShowFilters((v) => !v)}
        onViewChange={onViewChange}
        query={searchQuery}
        selectedViewId={selectedViewId}
        showFilters={showFilters}
        table={table}
        views={views}
      />
      <AnimatePresence mode="wait">
        {showFilters && (
          <CollapsibleRow key="filters">
            <Filters
              appliedFilters={appliedFilters}
              filters={filters}
              onClear={() => table.setColumnFilters([])}
              onRemove={(id) =>
                table.setColumnFilters(
                  table.getState().columnFilters.filter((f) => f.id !== id),
                )
              }
            />
          </CollapsibleRow>
        )}
      </AnimatePresence>
      <BulkActions actions={bulkActions} table={table} />
      <DataGrid table={table} />
      <Pagination table={table} />
    </Container>
  )
}
