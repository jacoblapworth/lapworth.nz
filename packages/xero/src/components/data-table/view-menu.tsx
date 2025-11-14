import {
  ArrowDownUpIcon,
  CopyIcon,
  LayoutGridIcon,
  PencilIcon,
  SlidersVerticalIcon,
  TrashIcon,
} from 'lucide-react'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuProvider,
  MenuSeparator,
} from '../menu'

export function ViewMenu() {
  return (
    <MenuProvider>
      <MenuButton size="sm">
        <SlidersVerticalIcon size={16} />
      </MenuButton>
      <Menu>
        <MenuItem>
          <PencilIcon size={16} />
          Rename view
        </MenuItem>
        <MenuItem>
          <CopyIcon size={16} />
          Duplicate view
        </MenuItem>
        <MenuItem>
          <CopyIcon size={16} />
          Save changes
        </MenuItem>
        <MenuSeparator />
        <MenuItem>
          <TrashIcon size={16} />
          Delete view
        </MenuItem>
        <MenuSeparator />
        <MenuItem>
          <ArrowDownUpIcon size={16} />
          Sort by...
        </MenuItem>
        <MenuItem>
          <LayoutGridIcon size={16} />
          Layout
        </MenuItem>
      </Menu>
    </MenuProvider>
  )
}
