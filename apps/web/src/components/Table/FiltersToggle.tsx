import { ListFilterIcon } from 'lucide-react'
import { Button } from './Button'

interface Props {
  isSelected?: boolean
  filterCount?: number
  onClick?: () => void
}

export function FiltersToggle({ isSelected, filterCount, onClick }: Props) {
  return (
    <Button aria-selected={isSelected} onClick={onClick} variant="secondary">
      <ListFilterIcon size={16} />
      {isSelected ? 'Hide' : 'Show'} filters
      {filterCount ? ` (${filterCount})` : ''}
    </Button>
  )
}
