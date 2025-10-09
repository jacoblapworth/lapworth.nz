import { styled } from '@/styled/jsx'

export const Tag = styled('span', {
  base: {
    alignItems: 'center',
    backgroundColor: 'xero.bg.subtle',
    borderRadius: 12,
    color: 'xero.text.primary',
    display: 'inline-flex',
    flexDirection: 'row',
    gap: 4,
    padding: '4px 8px',
  },
  variants: {
    variant: {
      inform: {
        backgroundColor: 'xero.background.inform',
        color: 'xero.text.inform',
      },
      negative: {
        backgroundColor: 'xero.background.negative',
        color: 'xero.text.negative',
      },
      positive: {
        backgroundColor: 'xero.background.positive',
        color: 'xero.text.positive',
      },
      warning: {
        backgroundColor: 'xero.background.warning',
        color: 'xero.text.warning',
      },
    },
  },
})
