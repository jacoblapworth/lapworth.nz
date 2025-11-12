import type { GlobalStyleObject } from '@pandacss/types'

export const globalCss: GlobalStyleObject = {
  '*': {
    _focus: {
      outlineColor: 'border.focus',
    },
    _focusVisible: {
      outlineColor: 'border.focus',
      outlineOffset: 2,
      outlineStyle: 'solid',
      outlineWidth: 2,
    },
    fontFamily: 'inter',
  },
}
