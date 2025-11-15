import type { RowData, Table } from '@tanstack/react-table'
import type { ReactNode } from 'react'
import { HStack, VStack } from '@/styled/jsx'
import { Button } from '../button'

export interface BulkAction {
  id: string
  label: ReactNode
  onClick: () => void
}

interface Props<TData extends RowData> {
  table: Table<TData>
  actions: BulkAction[]
}

export function BulkActions<TData extends RowData>({
  table,
  actions,
}: Props<TData>) {
  const isSomeRowsSelected = table.getIsSomeRowsSelected()
  const selectedCount = table.getFilteredSelectedRowModel().flatRows.length
  const isPageSelected = table.getIsAllPageRowsSelected()
  const isAllSelected = table.getIsAllRowsSelected()
  const showSelectAll = isPageSelected && !isAllSelected

  return (
    <VStack
      alignItems="stretch"
      backgroundColor="background"
      borderRadius="lg"
      bottom="lg"
      boxShadow="lift"
      gap={0}
      left="50%"
      position="sticky"
      translate="auto"
      translateX="-50%"
      width={{
        base: '100%',
        md: '80%',
      }}
      zIndex={1000}
    >
      <HStack justifyContent="space-between" padding={8}>
        <HStack gap={8}>
          {actions.map(({ id, label, onClick }) => (
            <Button
              disabled={!(isSomeRowsSelected || isAllSelected)}
              key={id}
              onClick={onClick}
              size="sm"
            >
              {label}
            </Button>
          ))}
        </HStack>
        <VStack
          alignItems="end"
          color="text.faint"
          fontSize={12}
          gap={2}
          lineHeight={1}
          marginBlock={-8}
          textStyle="body.small.regular"
        >
          <span>
            {selectedCount !== undefined ? `${selectedCount} selected ` : ''}
          </span>
          {/* <span>{summary}</span> */}
        </VStack>
      </HStack>
      {isPageSelected && (
        <HStack
          alignItems="center"
          borderBlockStart="soft"
          justifyContent="center"
          paddingBlock={8}
          textStyle="body.small.regular"
        >
          {showSelectAll
            ? `Selected ${selectedCount} on this page.`
            : `Selected all ${selectedCount} that match your filters.`}
          {showSelectAll && (
            <Button onClick={table.getToggleAllRowsSelectedHandler()} size="xs">
              Select all that match your filters
            </Button>
          )}
        </HStack>
      )}
    </VStack>
  )
}
