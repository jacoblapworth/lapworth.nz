import * as stylex from '@stylexjs/stylex'
import { styled } from './utils'

/**
 * Layout primitives - replicate panda-css JSX factory patterns
 */

// Box - A generic container with StyleX support
export const Box = styled('div', {})

// HStack - Horizontal stack layout
const hstackBase = stylex.create({
  default: {
    display: 'flex',
    flexDirection: 'row',
  },
})

export const HStack = styled('div', {
  base: hstackBase.default,
})

// VStack - Vertical stack layout
const vstackBase = stylex.create({
  default: {
    display: 'flex',
    flexDirection: 'column',
  },
})

export const VStack = styled('div', {
  base: vstackBase.default,
})

// Stack - Generic stack with direction variant
const stackStyles = stylex.create({
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
  },
  vertical: {
    display: 'flex',
    flexDirection: 'column',
  },
})

export const Stack = styled('div', {
  variants: {
    direction: {
      horizontal: stackStyles.horizontal,
      vertical: stackStyles.vertical,
    },
  },
  defaultVariants: {
    direction: 'vertical',
  },
})
