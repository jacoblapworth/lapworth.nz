import * as Ariakit from '@ariakit/react'
import { cva } from '@/styled/css'
import { styled } from '@/styled/jsx'
import { LabelStyles } from './Label'
import { MenuItemStyles, MenuStyles } from './Menu'

export const SelectStyles = cva({
  base: {
    _active: {
      borderColor: 'border.regular',
    },
    _disabled: {
      backgroundColor: 'background.tertiary',
      cursor: 'not-allowed',
      opacity: 0.6,
    },
    _focus: {
      borderColor: 'primary',
      boxShadow: 'focus',
      outline: 'none',
    },
    _hover: {
      borderColor: 'border.regular',
    },
    alignItems: 'center',
    backgroundColor: 'background.primary',
    border: 'subtle',
    borderRadius: 'md',
    color: 'text.primary',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: 40,
    padding: '3',
    paddingInline: 12,
    textStyle: 'body.medium.regular',
    width: '100%',
  },
})

export const Select = styled(Ariakit.Select, SelectStyles)

export const SelectPopover = styled(Ariakit.SelectPopover, MenuStyles, {
  defaultProps: {
    gutter: 4,
  },
})

export const SelectItem = styled(Ariakit.SelectItem, MenuItemStyles)

export const SelectLabel = styled(Ariakit.SelectLabel, LabelStyles)
