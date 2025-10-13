import { styled } from '@/styled/jsx'

export const Tag = styled('span', {
  base: {
    alignItems: 'center',
    backgroundColor: 'xero.background.neutral',
    borderRadius: 6,
    color: 'xero.text.primary',
    display: 'inline-flex',
    flexDirection: 'row',
    gap: 4,
    paddingBlock: 0,
    paddingInline: 6,
  },
  variants: {
    variant: {
      inform: {
        backgroundColor: 'xero.background.inform',
        color: 'xero.text.inform',
      },
      negative: {
        _selection: {
          backgroundColor: 'xero.negative',
        },
        backgroundColor: 'xero.background.negative',
        color: 'xero.text.negative',
      },
      neutral: {
        backgroundColor: 'xero.background.secondary',
        color: 'xero.text.faint',
      },
      positive: {
        _selection: {
          backgroundColor: 'xero.positive',
        },
        backgroundColor: 'xero.background.positive',
        color: 'xero.text.positive',
      },
      warning: {
        _selection: {
          backgroundColor: 'xero.warning',
        },
        backgroundColor: 'xero.background.warning',
        color: 'xero.text.warning',
      },
    },
  },
})
