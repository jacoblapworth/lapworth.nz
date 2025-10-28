import { TrashIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { HStack } from '@/styled/jsx'
import { hstack } from '@/styled/patterns/hstack'
import { Button } from './Button'
import { FilterPill } from './FilterPill'
import { AddFilterMenu } from './FiltersAddMenu'

export interface Filter {
  id: string
  label: string
  values?: { id: string; label: string }[]
  operators?: { id: string; label: string }[]
}

export interface AppliedFilter {
  id: string
  label: string
  operator?: string
  value: string
}

interface Props {
  filters: Filter[]
  appliedFilters: AppliedFilter[]
  onClear: () => void
  onAdd?: () => void
  onRemove: (id: string) => void
}

export function Filters({
  filters,
  appliedFilters,
  onClear,
  onAdd,
  onRemove,
}: Props) {
  console.log({ appliedFilters })
  return (
    <motion.div
      className={hstack({
        borderBottomColor: 'border.soft',
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        flexGrow: 1,
        flexWrap: 'wrap',
        gap: 8,
        justifyContent: 'space-between',
        padding: 8,
      })}
      layout
    >
      <motion.div className={hstack({ flexGrow: 1, flexWrap: 'wrap' })} layout>
        <AddFilterMenu filters={filters} key="add" />
        <AnimatePresence>
          {appliedFilters.map(({ id, label, operator, value }) => (
            <FilterPill
              key={id}
              label={label}
              onOperatorChange={() => {}}
              onRemove={() => onRemove(id)}
              onValueChange={() => {}}
              operators={[
                { id: 'is', label: 'is' },
                { id: 'is-not', label: 'is not' },
              ]}
              selectedOperatorId={operator}
              selectedValueId={value}
              values={[
                { id: 'draft', label: 'draft' },
                { id: 'value2', label: 'Value 2' },
                { id: 'value3', label: 'Value 3' },
              ]}
            />
          ))}
        </AnimatePresence>
      </motion.div>
      <HStack>
        {appliedFilters.length > 0 && (
          <Button onClick={onClear} variant="secondary">
            <TrashIcon size={16} />
            Clear filters
          </Button>
        )}
      </HStack>
    </motion.div>
  )
}
