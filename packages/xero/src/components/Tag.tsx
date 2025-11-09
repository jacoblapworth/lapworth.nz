import * as stylex from '@stylexjs/stylex'
import { semanticColors } from '@/stylex/theme.stylex'
import { styled } from '@/stylex'

const styles = stylex.create({
  base: {
    alignItems: 'center',
    backgroundColor: semanticColors['background.neutral'],
    borderRadius: '6px',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: semanticColors['text.primary'],
    display: 'inline-flex',
    flexDirection: 'row',
    gap: '4px',
    paddingBlock: 0,
    paddingInline: '6px',
  },
  inform: {
    backgroundColor: semanticColors['background.inform'],
    borderColor: 'rgba(31, 104, 221, 0.2)', // text.inform/20
    color: semanticColors['text.inform'],
  },
  negative: {
    backgroundColor: semanticColors['background.negative'],
    borderColor: 'rgba(195, 18, 48, 0.2)', // text.negative/20
    color: semanticColors['text.negative'],
  },
  neutral: {
    backgroundColor: semanticColors['background.secondary'],
    borderColor: 'rgba(97, 107, 122, 0.2)', // text.faint/20
    color: semanticColors['text.faint'],
  },
  positive: {
    backgroundColor: semanticColors['background.positive'],
    borderColor: 'rgba(15, 123, 61, 0.2)', // text.positive/20
    color: semanticColors['text.positive'],
  },
  warning: {
    backgroundColor: semanticColors['background.warning'],
    borderColor: 'rgba(187, 66, 31, 0.2)', // text.warning/20
    color: semanticColors['text.warning'],
  },
})

export const Tag = styled('span', {
  base: styles.base,
  variants: {
    variant: {
      inform: styles.inform,
      negative: styles.negative,
      neutral: styles.neutral,
      positive: styles.positive,
      warning: styles.warning,
    },
  },
})
