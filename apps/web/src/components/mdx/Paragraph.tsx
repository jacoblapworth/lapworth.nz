import { styled } from '@/styled/jsx'

export const Paragraph = styled('p', {
  base: {
    '&:has([data-image])': {
      maxWidth: 800,
    },
  },
})
