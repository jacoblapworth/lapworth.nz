import type { GlobalStyleObject } from '@pandacss/types'

export const globalCss: GlobalStyleObject = {
  '*': {
    fontFamily: 'inter',
  },

  '& *': {
    _focus: {
      outlineColor: 'border.focus',
    },
    _focusVisible: {
      outlineColor: 'border.focus',
    },
  },
}
