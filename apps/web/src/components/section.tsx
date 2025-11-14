import { styled } from '@/styled/jsx'

export const Section = styled('section', {
  base: {
    '& > *': {
      gridColumn: 'content-start/content-end',
    },
    display: 'inherit',
    gridColumn: '1/-1 !important',
    gridTemplateColumns: 'subgrid',
  },
})
