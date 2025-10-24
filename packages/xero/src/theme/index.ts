import type { Theme } from '@pandacss/types'
import { textStyles } from './text'
import { semanticTokens, tokens } from './tokens'

export const theme: Theme = {
  keyframes: {
    loader: {
      0: { clipPath: 'polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)' },
      25: { clipPath: 'polygon(50% 50%,0 0,100% 0,100% 0,100% 0)' },
      50: {
        clipPath: 'polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)',
      },
      75: { clipPath: 'polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)' },
      100: { clipPath: 'polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)' },
    },
    rotate: {
      100: {
        transform: 'rotate(360deg)',
      },
    },
  },
  semanticTokens,
  textStyles,
  tokens,
}
