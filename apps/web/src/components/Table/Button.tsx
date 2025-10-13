import * as Ariakit from '@ariakit/react'
import { cva } from '@/styled/css'
import { styled } from '@/styled/jsx'

export const ButtonStyles = cva({
  base: {
    _disabled: {
      cursor: 'not-allowed',
      // pointerEvents: 'none',
    },

    _expanded: {
      backgroundColor: 'xero.background.secondary',
      borderColor: 'xero.border.regular',
    },

    alignItems: 'center',
    borderRadius: 'md',
    cursor: 'pointer',
    display: 'inline-flex',
    fontSize: 13,
    fontWeight: 500,
    gap: 8,
    lineHeight: '1.2',
    paddingBlock: 6,
    paddingInline: 8,
    transitionDuration: '100',
    transitionProperty: 'colors',
    transitionTimingFunction: 'in-out',
  },
  defaultVariants: {
    size: 'md',
    variant: 'secondary',
  },
  variants: {
    size: {
      md: {},
      sm: {},
    },
    variant: {
      primary: {
        backgroundColor: {
          _active: 'xero.action.active',
          _disabled: 'xero.action.disabled',
          _focus: 'xero.action.focus',
          _hover: 'xero.action.hover',
          base: 'xero.action',
        },
        color: 'white',
      },
      secondary: {
        _active: {
          color: 'xero.text',
        },
        _disabled: {
          color: 'xero.text.faint',
        },
        _selected: {
          _hover: {
            borderColor: 'xero.action.hover',
          },
          color: 'xero.action',
        },
        backgroundColor: {
          _active: 'xero.background.quaternary',
          _hover: 'xero.background.tertiary',
        },
        borderColor: {
          _active: 'xero.border.subtle',
          _focusVisible: 'xero.action.focus',
          _hover: 'xero.border.subtle',
          _selected: 'xero.action',
          base: 'xero.border.subtle',
        },
        borderStyle: 'solid',
        borderWidth: 1,
        color: 'xero.text',
      },
      tertiary: {},
    },
  },
})

export const Button = styled(Ariakit.Button, ButtonStyles)
