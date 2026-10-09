'use client'

import { useCreateAtom, useSelector } from '@tanstack/react-store'

import {
  aggregationFn_count,
  aggregationFn_extent,
  aggregationFn_mean,
  aggregationFn_sum,
  columnFilteringFeature,
  columnGroupingFeature,
  columnOrderingFeature,
  columnPinningFeature,
  columnResizingFeature,
  columnSizingFeature,
  columnVisibilityFeature,
  createFilteredRowModel,
  createGroupedRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  createTableHook,
  filterFns,
  globalFilteringFeature,
  metaHelper,
  type PaginationState,
  type RowData,
  rowAggregationFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  sortFns,
  tableFeatures,
} from '@tanstack/react-table'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { Pagination } from '@/components/pagination'
import { styled } from '@/styled/jsx'
import { DataGrid } from '../data-grid'
import { type BulkAction, BulkActions } from './bulk-actions'
import { Controls } from './controls'
import type { View } from './data-views'
import { Filters } from './filters'
import {
  appliedFiltersToColumnFilters,
  columnFiltersToAppliedFilters,
} from './utils/filter-utils'

const Container = styled('div', {
  base: {
    backgroundColor: 'background',
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

interface ColumnMeta {
  alignment?: 'start' | 'center' | 'end'
  isNumeric?: boolean
  isEditable?: boolean
}

const features = tableFeatures({
  aggregationFns: {
    count: aggregationFn_count,
    extent: aggregationFn_extent,
    mean: aggregationFn_mean,
    sum: aggregationFn_sum,
  },
  columnFilteringFeature,
  columnGroupingFeature,
  columnMeta: metaHelper<ColumnMeta>(),
  columnOrderingFeature,
  columnPinningFeature,
  columnResizingFeature,
  columnSizingFeature,
  columnVisibilityFeature,
  filteredRowModel: createFilteredRowModel(),
  filterFns,
  globalFilteringFeature,
  groupedRowModel: createGroupedRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  rowAggregationFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns,
})

export type TableFeatures = typeof features

// biome-ignore lint/correctness/useHookAtTopLevel: The paginationAtom hook is used at the top level to create a persistent atom for pagination state.
const paginationAtom = useCreateAtom<PaginationState>({
  pageIndex: 0,
  pageSize: 20,
})

// biome-ignore lint/correctness/useHookAtTopLevel: The pagination selector hook is used at the top level to create a persistent selector for pagination state.
export const pagination = useSelector(paginationAtom)

export const {
  useAppTable,
  createAppColumnHelper,
  useTableContext,
  useCellContext,
  useHeaderContext,
} = createTableHook({
  atoms: {
    pagination: paginationAtom,
  },
  autoResetPageIndex: true,
  columnResizeDirection: 'ltr',
  columnResizeMode: 'onChange',
  debugTable: process.env.NODE_ENV === 'development',
  defaultColumn: {
    maxSize: 800,
    minSize: 32,
  },
  enableColumnResizing: true,
  features,

  // Register reusable components
  // tableComponents: { PaginationControls },
  // cellComponents: { TextCell },
  // headerComponents: { SortIndicator },
})

interface Props<TData extends RowData> {
  table: ReturnType<typeof useAppTable<TData>>
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
    table.state.columnFilters,
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
                  table.state.columnFilters.filter((f) => f.id !== id),
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
