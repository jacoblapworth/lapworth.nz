import { styled } from '@/styled/jsx'

export const Tag = styled('span', {
  base: {
    border: 'muted',
    borderRadius: 'md',
    color: 'text',
    fontSize: 'sm',
    lineHeight: '1',
    paddingBlock: 'xs',
    paddingInline: 'sm',
  },
  variants: {
    sentiment: {
      negative: {
        backgroundColor: 'negative.surface',
        borderColor: 'negative',
      },
      positive: {
        backgroundColor: 'positive.surface',
        borderColor: 'positive',
      },
      warning: {
        backgroundColor: 'warning.surface',
        borderColor: 'warning',
      },
    },
  },
})
