import * as stylex from '@stylexjs/stylex'
import * as Ariakit from '@ariakit/react'
import { cva, styled, type StyledVariantProps } from '@/stylex'
import { HStack } from '@/stylex/jsx'
import { borderRadius, semanticColors } from '@/stylex/theme.stylex'
import { textStyles } from '@/stylex/textStyles'
import { Spinner } from './Spinner'

const buttonStyles = stylex.create({
  base: {
    alignItems: 'center',
    borderRadius: borderRadius.md,
    cursor: {
      default: 'pointer',
      ':disabled': 'not-allowed',
    },
    display: 'inline-grid',
    gap: '8px',
    gridAutoFlow: 'column',
    lineHeight: '1.2',
    paddingBlock: '6px',
    paddingInline: '8px',
    placeItems: 'center',
    transitionDuration: '100ms',
    transitionProperty: 'background-color, border-color, color',
    transitionTimingFunction: 'ease-in-out',
    backgroundColor: {
      '[aria-expanded="true"]': semanticColors['background-secondary'],
    },
    borderColor: {
      '[aria-expanded="true"]': semanticColors['border-regular'],
    },
  },
  // Size variants
  sizeXs: {
    minHeight: '24px',
    paddingInline: '8px',
  },
  sizeSm: {
    minHeight: '32px',
    paddingBlock: '4px',
    paddingInline: '8px',
  },
  sizeMd: {
    minHeight: '40px',
    paddingInline: '12px',
  },
  // Variant styles
  primary: {
    backgroundColor: {
      default: semanticColors['action-default'],
      ':hover': semanticColors['action-hover'],
      ':active': semanticColors['action-active'],
      ':focus': semanticColors['action-focus'],
      ':disabled': semanticColors['action-disabled'],
    },
    color: 'white',
  },
  secondary: {
    backgroundColor: {
      default: 'transparent',
      ':hover': semanticColors['background-tertiary'],
      ':active': semanticColors['background-quaternary'],
    },
    borderColor: {
      default: semanticColors['border-subtle'],
      ':hover': semanticColors['border-subtle'],
      ':active': semanticColors['border-subtle'],
      '[aria-selected="true"]': semanticColors['action-default'],
    },
    borderStyle: 'solid',
    borderWidth: '1px',
    color: {
      default: semanticColors['text-default'],
      ':active': semanticColors['text-default'],
      ':disabled': semanticColors['text-faint'],
      '[aria-selected="true"]': semanticColors['action-default'],
    },
  },
  secondarySelected: {
    borderColor: {
      ':hover': semanticColors['action-hover'],
    },
  },
  tertiary: {
    backgroundColor: {
      ':hover': semanticColors['background-tertiary'],
    },
  },
})

const buttonTextStyles = {
  xs: textStyles.body.small.semibold.default,
  sm: textStyles.body.small.semibold.default,
  md: textStyles.body.medium.semibold.default,
}

export const ButtonStyles = cva({
  base: buttonStyles.base,
  defaultVariants: {
    size: 'md',
    variant: 'secondary',
  },
  variants: {
    size: {
      md: stylex.create({
        default: {
          ...buttonStyles.sizeMd,
          ...buttonTextStyles.md,
        },
      }).default,
      sm: stylex.create({
        default: {
          ...buttonStyles.sizeSm,
          ...buttonTextStyles.sm,
        },
      }).default,
      xs: stylex.create({
        default: {
          ...buttonStyles.sizeXs,
          ...buttonTextStyles.xs,
        },
      }).default,
    },
    variant: {
      primary: buttonStyles.primary,
      secondary: buttonStyles.secondary,
      tertiary: buttonStyles.tertiary,
    },
  },
})

const ButtonElement = styled(Ariakit.Button, ButtonStyles)

type Props = Ariakit.ButtonProps &
  StyledVariantProps<typeof ButtonStyles> & {
    isLoading?: boolean
  }

const hstackStyles = stylex.create({
  container: {
    gap: '8px',
    gridArea: '1 / -1',
  },
  hidden: {
    visibility: 'hidden',
  },
  visible: {
    visibility: 'visible',
  },
})

const spinnerStyles = stylex.create({
  container: {
    gridArea: '1 / -1',
    justifySelf: 'center',
  },
})

export function Button({ children, isLoading, ...props }: Props) {
  return (
    <ButtonElement {...props}>
      <HStack
        {...stylex.props(
          hstackStyles.container,
          isLoading ? hstackStyles.hidden : hstackStyles.visible,
        )}
      >
        {children}
      </HStack>
      {isLoading && <Spinner {...stylex.props(spinnerStyles.container)} />}
    </ButtonElement>
  )
}
