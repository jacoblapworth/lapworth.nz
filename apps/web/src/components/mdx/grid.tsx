import { styled } from '@/styled/jsx'

export const Grid = styled('div', {
  base: {
    display: 'grid',
    gap: 'md',
  },

  variants: {
    columns: {
      1: { gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' },
      2: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
      3: {
        gridTemplateColumns: {
          base: 'repeat(2, minmax(0, 1fr))',
          sm: 'repeat(3, minmax(0, 1fr))',
        },
      },
    },
  },
})
