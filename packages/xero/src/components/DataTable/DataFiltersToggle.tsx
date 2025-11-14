import NumberFlow from '@number-flow/react'
import { ListFilterIcon } from 'lucide-react'
import { Box } from '@/styled/jsx'
import { Button } from '../Button'

interface Props {
  isSelected?: boolean
  filterCount?: number
  onClick?: () => void
}

export function DataFiltersToggle({ isSelected, filterCount, onClick }: Props) {
  return (
    <Button
      aria-selected={isSelected}
      className="group"
      onClick={onClick}
      size="sm"
      variant="secondary"
    >
      <ListFilterIcon size={16} />
      {isSelected ? 'Hide' : 'Show'} filters
      {filterCount ? (
        <Box
          _groupHover={{
            backgroundColor: 'background.primary',
          }}
          backgroundColor="background.tertiary"
          borderRadius={6}
          fontVariantNumeric="tabular-nums"
          lineHeight="1"
          marginBlock={-4}
          paddingInline={6}
        >
          <NumberFlow value={filterCount} />
        </Box>
      ) : null}
    </Button>
  )
}
