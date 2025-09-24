import { styled } from '@/styled/jsx'

export const Blockquote = styled('blockquote', {
  base: {
    '& p': {
      all: 'unset',
      display: 'inline-block',
      maxInlineSize: '50ch',
      position: 'relative',
    },
    borderInlineStart: 'muted',
    display: 'inline',
    hangingPunctuation: 'first last',
    lineHeight: '1.5rem',
    marginBlockEnd: 'md',
    paddingInlineStart: 'lg',
  },
})
