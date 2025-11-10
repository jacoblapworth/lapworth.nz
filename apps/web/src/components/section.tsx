import { styled } from '@/styled/jsx'

export const Section = styled('section', {
  base: {
    maxWidth: '70ch',
  },
  variants: {
    fullWidth: {
      true: {
        maxWidth: 'unset',
      },
    },
  },
})
