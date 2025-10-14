import type { ReactNode } from 'react'
import { HStack, VStack } from '@/styled/jsx'
import { Button } from './Button'

export interface BulkAction {
  id: string
  label: ReactNode
  onClick: () => void
}

interface Props {
  actions: BulkAction[]
  isDisabled?: boolean
  summary: ReactNode
  selectedCount?: number
}

export function BulkActions({
  actions,
  isDisabled,
  summary,
  selectedCount,
}: Props) {
  return (
    <HStack
      borderBottomColor="border.soft"
      borderBottomStyle="solid"
      borderBottomWidth={1}
      justifyContent="space-between"
      padding={8}
    >
      <HStack gap={8}>
        {actions.map(({ id, label, onClick }) => (
          <Button disabled={isDisabled} key={id} onClick={onClick}>
            {label}
          </Button>
        ))}
      </HStack>
      <VStack
        alignItems="end"
        color="text.subtle"
        gap={2}
        lineHeight={1}
        marginBlock={-8}
        textStyle="body.small.regular"
      >
        <span>
          {selectedCount !== undefined ? `${selectedCount} selected ` : ''}
        </span>
        <span>{summary}</span>
      </VStack>
    </HStack>
  )
}
