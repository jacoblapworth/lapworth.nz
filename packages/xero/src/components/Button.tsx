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
      backgroundColor: 'background.secondary',
      borderColor: 'border.regular',
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
      sm: {
        paddingBlock: 4,
        paddingInline: 6,
      },
    },
    variant: {
      primary: {
        backgroundColor: {
          _active: 'action.active',
          _disabled: 'action.disabled',
          _focus: 'action.focus',
          _hover: 'action.hover',
          base: 'action',
        },
        color: 'white',
      },
      secondary: {
        _active: {
          color: 'text',
        },
        _disabled: {
          color: 'text.faint',
        },
        _selected: {
          _hover: {
            borderColor: 'action.hover',
          },
          color: 'action',
        },
        backgroundColor: {
          _active: 'background.quaternary',
          _hover: 'background.tertiary',
        },
        borderColor: {
          _active: 'border.subtle',
          _focusVisible: 'action.focus',
          _hover: 'border.subtle',
          _selected: 'action',
          base: 'border.subtle',
        },
        borderStyle: 'solid',
        borderWidth: 1,
        color: 'text',
      },
      tertiary: {
        _hover: {
          backgroundColor: 'background.tertiary',
        },
      },
    },
  },
})

export const Button = styled(Ariakit.Button, ButtonStyles)
