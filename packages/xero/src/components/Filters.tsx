import { TrashIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { css } from '@/styled/css'
import { HStack } from '@/styled/jsx'
import { Button } from './Button'
import { FilterPill } from './FilterPill'
import { AddFilterMenu } from './FiltersAddMenu'

export interface Filter {
  id: string
  label: string
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
  return (
    <motion.div
      animate={{ height: 'auto', opacity: 1 }}
      className={css({
        borderBottomColor: 'border.soft',
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'space-between',
        overflow: 'hidden',
        padding: 8,
      })}
      exit={{
        height: 0,
      }}
      initial={{
        height: 0,
      }}
      key="filters"
      transition={{
        duration: 0.1,
        ease: 'easeInOut',
      }}
    >
      <HStack>
        <AddFilterMenu filters={filters} />
        {appliedFilters.map(({ id, label, operator, value }) => (
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
