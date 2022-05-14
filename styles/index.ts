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
      serif: 'sectra',
      system: 'system-ui',
    },
    sizes: {
      sm: '8px',
      md: '16px',
      lg: '32px',
    },
    radii: {
      sm: '8px',
      md: '16px',
      lg: '30px',
      max: '9999px',
      circle: '50%',
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
    radii: {
      sm: '3px',
      md: '6px',
      lg: '12px',
    },
    shadows: {
      md: '0 4px 8px $colors$secondary',
    },
    zIndices: {
      1: '0',
      2: '100',
      3: '200',
      4: '1000',
    },
    transitions: {
      sm: 'transform .1s',
      md: 'transform .3s',
      lg: 'transform .5s',
    },
  },
})

const colors = {
  white: '#ffffff',
  transparent: 'transparent',
  black: {
    50: '#FAFAFA',
    100: '#F4F4F5',
    200: '#E4E4E7',
    300: '#D4D4D8',
    400: '#A1A1AA',
    500: '#71717A',
    600: '#52525B',
    700: '#3F3F46',
    800: '#27272A',
    900: '#18181B',
  },
  green: {
    500: '#008060',
  },
  yellow: {
    500: '#FFC453',
  },
  red: {
    500: '#D82C0D',
  },
}

export const lightTheme = createTheme('light', {
  colors: {
    text: colors.black[800],
    primary: colors.black[900],
    secondary: colors.black[800],
    tertiary: colors.black[600],
    interactive: colors.black[800],
    background: colors.black[50],
    surface: colors.white,
    surfaceHovered: 'rgba(0,0,0, 0.05)',
    onSurface: colors.black[900],
    divider: colors.black[900],
    critical: colors.red[500],
    warning: colors.yellow[500],
    success: colors.green[500],
  },
})

export const darkTheme = createTheme('dark', {
  colors: {
    text: colors.black[200],
    primary: colors.white,
    secondary: colors.black[900],
    tertiary: colors.black[400],
    interactive: colors.black[200],
    background: colors.black[900],
    surface: colors.black[800],
    surfaceHovered: 'rgba(255,255,255, 0.05)',
    onSurface: colors.black[900],
    divider: colors.white,
    critical: colors.red[500],
    warning: colors.yellow[500],
    success: colors.green[500],
  },
})

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export const globalStyles = globalCss({
  html: {
    color: '$text',
    fontFamily: '$system',
    fontSize: '100%',
    lineHeight: '1.2rem',
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
    backgroundColor: '$text',
    color: '$background',
  },

  'h1, h2, h3, h4, h5, h6': {
    fontWeight: 'normal',
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
      fontWeight: 400,
      src: "url(/fonts/sectra/Regular.woff) format('woff')",
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'sectra',
      fontWeight: 700,
      src: "url(/fonts/sectra/Bold.woff) format('woff')",
      fontDisplay: 'swap',
    },
  ],
})
