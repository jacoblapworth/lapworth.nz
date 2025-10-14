// import { Select } from '@ariakit/react'

import { SelectArrow } from '@ariakit/react'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { HStack } from '@/styled/jsx'
import { Button } from './Button'
import {
  Select,
  SelectItem,
  SelectLabel,
  SelectPopover,
  SelectProvider,
} from './Select'
import { SrOnly } from './SrOnly'

interface Props {
  total: number
  pageSize: number
  currentPage: number
  onNext: () => void
  onPrevious: () => void
  canPreviousPage?: boolean
  canNextPage?: boolean
  onPageSizeChange: (size: number) => void
}

export function Pagination({
  total,
  pageSize,
  onPageSizeChange,
  onNext,
  onPrevious,
  canPreviousPage,
  canNextPage,
}: Props) {
  console.log({ pageSize })
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
