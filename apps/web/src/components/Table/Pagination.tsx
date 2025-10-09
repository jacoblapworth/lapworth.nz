import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { HStack } from '@/styled/jsx'
import { Button } from './Button'
import { SrOnly } from './SrOnly'

interface Props {
  total: number
  pageSize?: number
  currentPage?: number
  onNext: () => void
  onPrevious: () => void
  canPreviousPage?: boolean
  canNextPage?: boolean
}

export function Pagination({
  total,
  pageSize = 10,
  currentPage = 1,
  onNext,
  onPrevious,
  canPreviousPage,
  canNextPage,
}: Props) {
  const totalPages = Math.ceil(total / pageSize)

  return (
    <HStack
      borderBlockStartColor="xero.border.soft"
      borderBlockStartStyle="solid"
      borderBlockStartWidth={1}
      justifyContent="space-between"
      padding={8}
    >
      <HStack></HStack>
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
