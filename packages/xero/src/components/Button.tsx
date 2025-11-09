import * as Ariakit from '@ariakit/react'
import { cva } from '@/styled/css'
import { HStack, styled } from '@/styled/jsx'
import type { HTMLStyledProps, StyledVariantProps } from '@/styled/types'
import { Spinner } from './Spinner'

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
    display: 'inline-grid',
    gap: 8,
    gridAutoFlow: 'column',
    lineHeight: '1.2',
    paddingBlock: 6,
    paddingInline: 8,
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
    size: {
      md: {
        minHeight: 40,
        paddingInline: 12,
        textStyle: 'body.medium.semibold',
      },
      sm: {
        minHeight: 32,
        paddingBlock: 4,
        paddingInline: 8,
        textStyle: 'body.small.semibold',
      },
      xs: {
        minHeight: 24,
        paddingInline: 8,
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
  HTMLStyledProps<'button'> & {
    isLoading?: boolean
  }

export function Button({ children, isLoading, ...props }: Props) {
  return (
    <ButtonElement {...props}>
      <HStack
        gap={8}
        gridArea="1/-1"
        visibility={isLoading ? 'hidden' : 'visible'}
      >
        {children}
      </HStack>
      {isLoading && <Spinner gridArea="1/-1" justifySelf="center" />}
    </ButtonElement>
  )
}
