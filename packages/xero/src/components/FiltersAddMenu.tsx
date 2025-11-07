import * as Ariakit from '@ariakit/react'
import { PlusIcon } from 'lucide-react'
import { Button } from './Button'
import type { Filter } from './Filters'
import { Menu, MenuItem } from './Menu'

interface Props {
  filters: Filter[]
}

export function AddFilterMenu({ filters }: Props) {
  return (
    <Ariakit.MenuProvider>
      <Ariakit.MenuButton render={<Button size="sm" />}>
        <PlusIcon size={16} />
        Add filter
      </Ariakit.MenuButton>
      <Menu>
        {filters.map((filter) => (
          <MenuItem key={filter.id}>{filter.label}</MenuItem>
        ))}
      </Menu>
    </Ariakit.MenuProvider>
  )
}
