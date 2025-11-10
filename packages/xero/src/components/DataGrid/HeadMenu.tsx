import * as Ariakit from '@ariakit/react'
import { flexRender, type Header } from '@tanstack/react-table'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EllipsisVerticalIcon,
  EyeOffIcon,
  ListFilterIcon,
  PinOffIcon,
} from 'lucide-react'
import { type ReactNode, useState } from 'react'
import { HStack } from '@/styled/jsx'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItemRadio,
  MenuSeparator,
} from '../Menu'
import { Tooltip } from '../Tooltip'
import { SortIcon } from './SortIcon'

export interface TableHeadDropdownProps<TData, TValue> {
  header: Header<TData, TValue>
  children?: ReactNode
}

export function TableHeadMenu<TData, TValue>({
  header,
  children,
}: TableHeadDropdownProps<TData, TValue>) {
  const sort = header.column.getIsSorted()

  const [values, setValues] = useState({ dir: sort })

  return (
    <HStack alignItems="stretch" justifyContent="space-between" width="100%">
      <HStack>
        {children}
        <SortIcon sort={sort} />
      </HStack>
      <Ariakit.MenuProvider<typeof values>
        setValues={setValues}
        values={values}
      >
        <Ariakit.TooltipProvider>
          <Ariakit.TooltipAnchor
            render={<MenuButton size="xs" variant="tertiary" />}
          >
            <EllipsisVerticalIcon size={16} />
          </Ariakit.TooltipAnchor>
          <Tooltip>
            <Ariakit.TooltipArrow />
            {flexRender(header.column.columnDef.header, header.getContext())}{' '}
            column options
          </Tooltip>
        </Ariakit.TooltipProvider>
        <Menu portal>
          {header.column.getCanSort() && (
            <>
              <MenuItemRadio
                name="dir"
                onClick={() => header.column.toggleSorting(false)}
                value="asc"
              >
                <SortIcon sort="asc" />
                Sort ascending
              </MenuItemRadio>
              <MenuItemRadio
                name="dir"
                onClick={() => header.column.toggleSorting(true)}
                value="desc"
              >
                <SortIcon sort="desc" />
                Sort descending
              </MenuItemRadio>
            </>
          )}
          {header.column.getCanFilter() && (
            <>
              <MenuSeparator />
              <MenuItem>
                <ListFilterIcon size={16} />
                Filter...
              </MenuItem>
            </>
          )}
          {header.column.getCanPin() && (
            <>
              <MenuSeparator />
              {header.column.getIsPinned() ? (
                <MenuItem onClick={() => header.column.pin(false)}>
                  <PinOffIcon size={16} />
                  Unpin
                </MenuItem>
              ) : (
                <>
                  <MenuItem onClick={() => header.column.pin('left')}>
                    <ArrowLeftIcon size={16} />
                    Pin left
                  </MenuItem>
                  <MenuItem onClick={() => header.column.pin('right')}>
                    <ArrowRightIcon size={16} />
                    Pin right
                  </MenuItem>
                </>
              )}
              {/* <Ariakit.MenuButton
              ref={ref}
              {...props}
              className={clsx(!menu.parent && 'button', props.className)}
              render={
                menu.parent ? <MenuItem render={props.render} /> : undefined
              }
            >
              <span className="label">{label}</span>
              <Ariakit.MenuButtonArrow />
            </Ariakit.MenuButton>
            <Ariakit.Menu
              gutter={8}
              shift={menu.parent ? -9 : 0}
              className={menuStyles()}
            >
              {children}
            </Ariakit.Menu>
            <Menu label="Pin">
              <MenuItem>Pin left</MenuItem>
              <MenuItem>Pin right</MenuItem>
            </Menu> */}
            </>
          )}
          {header.column.getCanHide() && (
            <>
              <MenuSeparator />
              <MenuItem onClick={header.column.getToggleVisibilityHandler()}>
                <EyeOffIcon size={16} />
                Hide column
              </MenuItem>
            </>
          )}
        </Menu>
      </Ariakit.MenuProvider>
    </HStack>
  )
}
