import * as Ariakit from '@ariakit/react'
import { styled } from '@/styled/jsx'
import { ButtonStyles } from './Button'
import { MenuItemStyles, MenuStyles } from './Menu'

export const SelectProvider = Ariakit.SelectProvider

export const Select = styled(Ariakit.Select, ButtonStyles, {
  defaultProps: {
    children: undefined,
  },
})

export const SelectPopover = styled(Ariakit.SelectPopover, MenuStyles, {
  defaultProps: {
    gutter: 4,
  },
})

export const SelectItem = styled(Ariakit.SelectItem, MenuItemStyles)

export const SelectLabel = styled(Ariakit.SelectLabel, {
  base: {
    textStyle: 'body.small.medium',
  },
})
