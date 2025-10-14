import { styled } from '@/styled/jsx'

export const Tag = styled('span', {
  base: {
    alignItems: 'center',
    backgroundColor: 'background.neutral',
    borderRadius: 6,
    color: 'text.primary',
    display: 'inline-flex',
    flexDirection: 'row',
    gap: 4,
    paddingBlock: 0,
    paddingInline: 6,
  },
  variants: {
    variant: {
      inform: {
        backgroundColor: 'background.inform',
        color: 'text.inform',
      },
      negative: {
        _selection: {
          backgroundColor: 'negative',
        },
        backgroundColor: 'background.negative',
        color: 'text.negative',
      },
      neutral: {
        backgroundColor: 'background.secondary',
        color: 'text.faint',
      },
      positive: {
        _selection: {
          backgroundColor: 'positive',
        },
        backgroundColor: 'background.positive',
        color: 'text.positive',
      },
      warning: {
        _selection: {
          backgroundColor: 'warning',
        },
        backgroundColor: 'background.warning',
        color: 'text.warning',
      },
    },
  },
})
