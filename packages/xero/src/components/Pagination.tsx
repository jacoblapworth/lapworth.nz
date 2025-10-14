// import { Select } from '@ariakit/react'

import { SelectArrow } from '@ariakit/react'
import type { RowData, Table } from '@tanstack/react-table'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { Box, HStack } from '@/styled/jsx'
import { Button } from './Button'
import {
  Select,
  SelectItem,
  SelectLabel,
  SelectPopover,
  SelectProvider,
} from './Select'
import { SrOnly } from './SrOnly'

interface Props<TData extends RowData> {
  table: Table<TData>
}

export function Pagination<TData extends RowData>({ table }: Props<TData>) {
  const canNextPage = table.getCanNextPage()
  const canPreviousPage = table.getCanPreviousPage()
  const currentPage = table.getState().pagination.pageIndex
  const onNext = table.nextPage
  const onPageSizeChange = table.setPageSize
  const onPrevious = table.previousPage
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
          defaultValue={String(pageSize)}
          setValue={(v) => onPageSizeChange(Number(v))}
        >
          <SelectLabel>Items per page</SelectLabel>
          <Select>
            {pageSize}
            <SelectArrow />
          </Select>

          <SelectPopover>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
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
        <Button disabled={!canPreviousPage} onClick={onPrevious} size="sm">
          <ArrowLeftIcon size={16} />
          <SrOnly>Previous page</SrOnly>
        </Button>
        <Button disabled={!canNextPage} onClick={onNext} size="sm">
          <ArrowRightIcon size={16} />
          <SrOnly>Next page</SrOnly>
        </Button>
      </HStack>
    </HStack>
  )
}
