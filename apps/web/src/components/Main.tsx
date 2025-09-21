import { styled } from '@/styled/jsx'

export const Main = styled(
  'main',
  {
    base: {
      gridArea: 'content',
      margin: 'md',
      maxWidth: 'calc(100vw - token(spacing.md) * 2)',
    },
  },
  {
    defaultProps: {
      tabIndex: 0,
    },
  },
)
