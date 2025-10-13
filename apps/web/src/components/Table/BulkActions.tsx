import type { ReactNode } from 'react'
import { HStack } from '@/styled/jsx'
import { Button } from './Button'

export interface BulkAction {
  id: string
  label: ReactNode
  onClick: () => void
}

interface Props {
  actions: BulkAction[]
  isDisabled?: boolean
}

export function BulkActions({ actions, isDisabled }: Props) {
  return (
    <HStack
      borderBottomColor="xero.border.soft"
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
      <HStack>Summary count</HStack>
    </HStack>
  )
}
