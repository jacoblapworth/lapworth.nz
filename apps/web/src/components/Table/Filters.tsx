import { PlusIcon, TrashIcon } from 'lucide-react'
import { HStack } from '@/styled/jsx'
import { Button } from './Button'
import { FilterPill } from './FilterPill'
import { AddFilterMenu } from './FiltersAddMenu'

export interface Filter {
  id: string
  label: string
  operator?: string
  value: string
}

interface Props {
  filters: Filter[]
  onClear: () => void
  onAdd?: () => void
  onRemove: (id: string) => void
}

export function Filters({ filters, onClear, onAdd, onRemove }: Props) {
  return (
    <HStack
      borderBottomColor="xero.border.soft"
      borderBottomStyle="solid"
      borderBottomWidth={1}
      gap={8}
      justifyContent="space-between"
      padding={8}
    >
      <HStack>
        <AddFilterMenu />
        {filters.map(({ id, label, operator, value }) => (
          <FilterPill
            key={id}
            label={label}
            onRemove={() => onRemove(id)}
            operator={operator}
            value={value}
          />
        ))}
      </HStack>
      <HStack>
        {filters.length > 0 && (
          <Button onClick={onClear} variant="secondary">
            <TrashIcon size={16} />
            Clear filters
          </Button>
        )}
      </HStack>
    </HStack>
  )
}
