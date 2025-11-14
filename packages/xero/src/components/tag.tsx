import { styled } from '@/styled/jsx'

export const Tag = styled('span', {
  base: {
    alignItems: 'center',
    backgroundColor: 'background.neutral',
    borderRadius: 6,
    borderStyle: 'solid',
    borderWidth: 1,

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
        borderColor: 'text.inform/20',
        color: 'text.inform',
      },
      negative: {
        _selection: {
          backgroundColor: 'negative',
        },
        backgroundColor: 'background.negative',
        borderColor: 'text.negative/20',
        color: 'text.negative',
      },
      neutral: {
        backgroundColor: 'background.secondary',
        borderColor: 'text.faint/20',
        color: 'text.faint',
      },
      positive: {
        _selection: {
          backgroundColor: 'positive',
        },
        backgroundColor: 'background.positive',
        borderColor: 'text.positive/20',
        color: 'text.positive',
      },
      warning: {
        _selection: {
          backgroundColor: 'warning',
        },
        backgroundColor: 'background.warning',
        borderColor: 'text.warning/20',
        color: 'text.warning',
      },
    },
  },
})
