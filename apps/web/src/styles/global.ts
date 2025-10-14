import { defineGlobalStyles, defineLayerStyles } from '@pandacss/dev'

export const layerStyles = defineLayerStyles({})
export const globalCss = defineGlobalStyles({
  '*': {
    _focusVisible: {
      outlineColor: 'interactive',
      outlineOffset: 5,
      outlineStyle: 'auto',
      outlineWidth: 5,
    },

    _selection: {
      backgroundColor: 'primary',
      color: 'background',
    },
  },

  a: {
    color: 'interactive',
    textDecoration: 'none',
  },

  html: {
    color: 'text',
    cursor: 'auto',
    fontFamily: 'system',
    fontSize: '100%',
    lineHeight: '1.2rem',
  },

  main: {
    'p, li': {
      // fontSize: '1.125rem',
      lineHeight: '1.5rem',
      maxWidth: '60ch',
    },
  },
})
