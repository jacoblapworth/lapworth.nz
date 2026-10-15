import * as Ariakit from '@ariakit/react'
import type { ComponentProps } from 'react'
import { cva } from '@/styled/css'
import { HStack, styled } from '@/styled/jsx'
import type { StyledVariantProps } from '@/styled/types'
import { Spinner } from './spinner'

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
    color: 'text',
    cursor: 'pointer',
    display: 'inline-grid',
    gap: '2',
    gridAutoFlow: 'column',
    lineHeight: '1.2',
    paddingBlock: '1.5',
    paddingInline: '2',
    placeItems: 'center',
    transitionDuration: '100',
    transitionProperty: 'colors',
    transitionTimingFunction: 'ease-in-out',
  },
  defaultVariants: {
    size: 'md',
    variant: 'secondary',
  },
  variants: {
    isLoading: {
      true: {
        cursor: 'progress',
      },
    },

    size: {
      md: {
        minHeight: '10',
        paddingInline: '3',
        textStyle: 'body.medium.semibold',
      },
      sm: {
        minHeight: '8',
        paddingBlock: '1',
        paddingInline: '2',
        textStyle: 'body.small.semibold',
      },
      xs: {
        minHeight: '6',
        paddingBlock: '0.5',
        paddingInline: '2',
        textStyle: 'body.small.semibold',
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
const ButtonElement = styled(Ariakit.Button, ButtonStyles)

type Props = Ariakit.ButtonProps &
  StyledVariantProps<typeof ButtonElement> &
  ComponentProps<'button'>

export function Button({ children, isLoading, ...props }: Props) {
  return (
    <ButtonElement {...props}>
      <HStack
        gap="2"
        gridArea="1/-1"
        visibility={isLoading ? 'hidden' : 'visible'}
      >
        {children}
      </HStack>
      {isLoading && <Spinner gridArea="1/-1" justifySelf="center" size="md" />}
    </ButtonElement>
  )
}
