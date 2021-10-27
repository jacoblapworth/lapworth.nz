import { createStitches } from '@stitches/react'

export const {
  styled,
  getCssText,
  globalCss,
  createTheme,
  css,
  keyframes,
  theme,
} = createStitches({
  prefix: 'j',
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
  theme: {
    fonts: {
      display: 'canela',
      text: 'sectra',
      system: 'system-ui',
    },
    colors: {
      text: '#202223',
      primary: '$black',
      secondary: '#111213',
      interactive: '$text',
      background: '#f6f6f7',
      surface: '#111213',
      onSurface: '#111213',
      critical: '#D82C0D',
      warning: '#FFC453',
      success: '#008060',
      decorative: '#FFC96B',
      black: 'rgba(31, 41, 55,1)',
    },
    sizes: {
      sm: '8px',
      md: '16px',
      lg: '32px',
    },
    space: {
      sm: '8px',
      md: '16px',
      lg: '32px',
    },
    fontSizes: {
      sm: '0.875rem',
      md: '1rem',
      lg: '1.5rem',
    },
  },
})

export const darkTheme = createTheme({
  colors: {
    text: '#e3e5e7',
    primary: 'white',
    secondary: '#111213',
    interactive: '$text',
    background: '#0b0c0d',
    surface: '#202123',
    onSurface: '#111213',
    critical: '#D82C0D',
    warning: '#FFC453',
    success: '#008060',
    decorative: '#FFC96B',
    black: 'rgba(31, 41, 55,1)',
  },
})

export const globalStyles = globalCss({
  '*': {
    color: '$text',
    fontFamily: '$system',
    fontSize: '100%',
  },

  ':link': {
    color: '$interactive',
    textDecoration: 'unset',
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  ':visited': {
    color: '$interactive',
  },

  '@font-face': [
    {
      fontFamily: 'canela',
      fontWeight: 100,
      src: "url(/fonts/canela/thin.woff2) format('woff2'), url(/fonts/canela/thin.woff) format('woff')",
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'canela',
      fontWeight: 400,
      src: "url(/fonts/canela/regular.woff2) format('woff2'), url(/fonts/canela/regular.woff) format('woff')",
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'sectra',
      fontWeight: 700,
      src: "url(/fonts/sectra/Bold.woff2) format('woff2'), url(/fonts/sectra/Bold.woff) format('woff')",
      fontDisplay: 'swap',
    },
  ],
})
