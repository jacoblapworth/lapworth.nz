import * as Ariakit from '@ariakit/react'
import { ChevronDownIcon } from 'lucide-react'
import { cva } from '@/styled/css'
import { styled } from '@/styled/jsx'
import { LabelStyles } from './label'
import { MenuItemStyles, MenuStyles } from './menu'

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

export const SelectArrow = styled(
  Ariakit.SelectArrow,
  {
    base: {
      justifySelf: 'flex-end',
    },
  },
  {
    defaultProps: {
      children: <ChevronDownIcon size={16} />,
    },
  },
)
