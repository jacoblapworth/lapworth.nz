import type { RowData, Table } from '@tanstack/react-table'
import type { ReactNode } from 'react'
import * as stylex from '@stylexjs/stylex'
import { HStack, VStack } from '@/stylex/jsx'
import { semanticColors } from '@/stylex/theme.stylex'
import { textStyles } from '@/stylex/textStyles'
import { Button } from './Button'

export interface BulkAction {
  id: string
  label: ReactNode
  onClick: () => void
}

interface Props<TData extends RowData> {
  table: Table<TData>
  actions: BulkAction[]
}

const styles = stylex.create({
  container: {
    alignItems: 'stretch',
    gap: 0,
  },
  header: {
    borderBottomColor: semanticColors['border.soft'],
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    justifyContent: 'space-between',
    padding: '8px',
  },
  actions: {
    gap: '8px',
  },
  summary: {
    alignItems: 'end',
    color: semanticColors['text.faint'],
    fontSize: '12px',
    gap: '2px',
    lineHeight: 1,
    marginBlock: '-8px',
  },
  selectAllBar: {
    alignItems: 'center',
    borderBottomColor: semanticColors['border.soft'],
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    justifyContent: 'center',
    paddingBlock: '8px',
  },
})

const summaryText = textStyles.body.small.regular
const selectAllText = textStyles.body.small.regular

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
    <VStack {...stylex.props(styles.container)}>
      <HStack {...stylex.props(styles.header)}>
        <HStack {...stylex.props(styles.actions)}>
          {actions.map(({ id, label, onClick }) => (
            <Button
              disabled={!isSomeRowsSelected}
              key={id}
              onClick={onClick}
              size="sm"
            >
              {label}
            </Button>
          ))}
        </HStack>
        <VStack {...stylex.props(styles.summary, summaryText.default)}>
          <span>
            {selectedCount !== undefined ? `${selectedCount} selected ` : ''}
          </span>
        </VStack>
      </HStack>
      {isPageSelected && (
        <HStack {...stylex.props(styles.selectAllBar, selectAllText.default)}>
          {showSelectAll
            ? `Selected ${selectedCount} on this page.`
            : `Selected all ${selectedCount} that match your filters.`}
          {showSelectAll && (
            <Button onClick={table.getToggleAllRowsSelectedHandler()} size="sm">
              Select all that match your filters
            </Button>
          )}
        </HStack>
      )}
    </VStack>
  )
}
