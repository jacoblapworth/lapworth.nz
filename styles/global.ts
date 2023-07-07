import {
  defineGlobalStyles,
  defineLayerStyles,
  defineTextStyles,
} from '@pandacss/dev'

export const textStyles = defineTextStyles({})
export const layerStyles = defineLayerStyles({})
export const globalCss = defineGlobalStyles({
  html: {
    color: 'text',
    fontFamily: 'system',
    fontSize: '100%',
    lineHeight: '1.2rem',
    cursor: 'auto',
  },

  a: {
    color: 'interactive',
    textDecoration: 'none',
  },

  main: {
    'p, li': {
      maxWidth: '70ch',
      fontSize: '1.125rem',
      lineHeight: '1.5rem',
    },

    'ul, ol': {
      paddingInlineStart: 'lg',
    },
  },

  '::selection': {
    backgroundColor: 'primary',
    color: 'background',
  },
})
