import { SelectArrow, SelectProvider } from '@ariakit/react'
import type { RowData, Table } from '@tanstack/react-table'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { Box, HStack } from '@/styled/jsx'
import { Button } from './button'
import { Select, SelectItem, SelectLabel, SelectPopover } from './select'
import { SrOnly } from './sr-only'

interface Props<TData extends RowData> {
  table: Table<TData>
}

export function Pagination<TData extends RowData>({ table }: Props<TData>) {
  const canNextPage = table.getCanNextPage()
  const canPreviousPage = table.getCanPreviousPage()
  const currentPage = table.getState().pagination.pageIndex
  const pageCount = table.getPageCount()
  const pageSize = table.getState().pagination.pageSize
  const total = table.getRowCount()

  return (
    <HStack
      borderBlockStartColor="border.soft"
      borderBlockStartStyle="solid"
      borderBlockStartWidth={1}
      justifyContent="space-between"
      padding={8}
    >
      <HStack color="text" textStyle="body.small.regular">
        <SelectProvider
          // defaultValue={String(pageSize)}
          setValue={(v) => table.setPageSize(Number(v))}
          value={String(pageSize)}
        >
          <SelectLabel>Items per page</SelectLabel>
          <Select>
            {pageSize}
            <SelectArrow />
          </Select>

          <SelectPopover>
            {[10, 20, 50, 100].map((size) => (
              <SelectItem key={size} value={String(size)}>
                {size}
              </SelectItem>
            ))}
          </SelectPopover>
        </SelectProvider>
        {total} items
      </HStack>

      <HStack>
        <Box
          color="text.subtle"
          fontVariantNumeric="tabular-nums"
          marginInlineEnd={8}
          textStyle="body.small.regular"
        >
          Page {currentPage + 1} of {pageCount}
        </Box>
        <Button
          disabled={!canPreviousPage}
          onClick={table.previousPage}
          size="sm"
        >
          <ArrowLeftIcon size={16} />
          <SrOnly>Previous page</SrOnly>
        </Button>
        <Button disabled={!canNextPage} onClick={table.nextPage} size="sm">
          <ArrowRightIcon size={16} />
          <SrOnly>Next page</SrOnly>
        </Button>
      </HStack>
    </HStack>
  )
}
