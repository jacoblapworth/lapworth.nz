import * as Ariakit from '@ariakit/react'
import { PlusIcon } from 'lucide-react'
import { Button } from './Button'
import { Menu, MenuItem } from './Menu'

export function AddFilterMenu() {
  return (
    <Ariakit.MenuProvider>
      <Ariakit.MenuButton render={<Button />}>
        <PlusIcon size={16} />
        Add filter
      </Ariakit.MenuButton>
      <Menu>
        <MenuItem>Add filter</MenuItem>
      </Menu>
    </Ariakit.MenuProvider>
  )
}
