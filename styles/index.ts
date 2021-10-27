import { createStitches } from '@stitches/react'
// ;['#917373', '#dabdc0', '#daf1e4', '#427658']
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
      white: '#ffffff',
      white10: '#f6f6f7',
      white20: '#ececec',
      white30: '#e3e5e7',
      black70: '#717171',
      black80: '#202223',
      black90: '#111213',
      black100: '#0b0c0d',
      green50: '#008060',
      yellow50: '#FFC453',
      red50: '#D82C0D',
      grey5: '#F0F2F4',
      grey10: '#D6DBE0',
      grey20: '#BCC3CD',
      grey30: '#A2ACB9',
      grey40: '#8894A5',
      grey50: '#6D7D92',
      grey60: '#576475',
      grey70: '#424B57',
      grey80: '#2C323A',
      grey90: '#16191D',
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

export const lightTheme = createTheme({
  colors: {
    text: '$black80',
    primary: '$black100',
    secondary: '$black90',
    tertiary: '$black70',
    interactive: '$text',
    background: '$white10',
    surface: '$white',
    surfaceHovered: '$white10',
    onSurface: '$black90',
    divider: '$black100',
    critical: '$red',
    warning: '$yellow',
    success: '$green',
  },
})

export const darkTheme = createTheme({
  colors: {
    text: '$white30',
    primary: '$white',
    secondary: '$black90',
    tertiary: '$black70',
    interactive: '$text',
    background: '$black100',
    surface: '#202123',
    surfaceHovered: '#2f3133',
    onSurface: '$black90',
    divider: '$white',
    critical: '$red',
    warning: '$yellow',
    success: '$green',
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

  '::selection': {
    backgroundColor: '$primary',
    color: '$background',
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
