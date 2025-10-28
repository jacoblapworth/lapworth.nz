import { styled } from '@/styled/jsx'

export const Stack = styled('div', {
  base: {
    display: 'flex',
  },

  compoundVariants: [
    { css: { justifyContent: 'flex-start' }, dir: 'col', y: 'top' },
    { css: { justifyContent: 'center' }, dir: 'col', y: 'center' },
    { css: { justifyContent: 'flex-end' }, dir: 'col', y: 'bottom' },

    { css: { justifyContent: 'flex-start' }, dir: 'row', x: 'left' },
    { css: { justifyContent: 'center' }, dir: 'row', x: 'center' },
    { css: { justifyContent: 'flex-end' }, dir: 'row', x: 'right' },

    { css: { alignItems: 'flex-start' }, dir: 'col', x: 'left' },
    { css: { alignItems: 'center' }, dir: 'col', x: 'center' },
    { css: { alignItems: 'flex-end' }, dir: 'col', x: 'right' },

    { css: { alignItems: 'flex-start' }, dir: 'row', y: 'top' },
    { css: { alignItems: 'center' }, dir: 'row', y: 'center' },
    { css: { alignItems: 'flex-end' }, dir: 'row', y: 'bottom' },
  ],

  variants: {
    density: {
      packed: {},
      spaceBetween: {
        justifyContent: 'space-between !important',
      },
    },
    dir: {
      col: { flexDirection: 'column' },
      row: { flexDirection: 'row' },
    },
    x: {
      center: {},
      left: {},
      right: {},
    },
    y: {
      bottom: {},
      center: {},
      top: {},
    },
  },
})
