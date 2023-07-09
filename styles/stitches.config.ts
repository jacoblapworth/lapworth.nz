import { createStitches } from '@stitches/react'
// ;['#917373', '#dabdc0', '#daf1e4', '#427658']
export const {
  styled,
  getCssText,
  globalCss: stitchesGlobalCss,
  createTheme,
  css,
  keyframes,
  theme,
  prefix,
  config,
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
      max: '99999px;',
    },
    shadows: {
      md: '0 4px 8px $colors$shadow',
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
  white: {
    0: '#ffffff',
    10: '#f6f6f7',
    20: '#ececec',
    30: '#e3e5e7',
    80: 'rgba(255,255,255,0.1)',
  },
  black: {
    50: '#727272',
    70: '#717171',
    80: '#202223',
    90: '#111213',
    100: '#0b0c0d',
  },
  green: {
    50: '#008060',
  },
  yellow: {
    50: '#FFC453',
  },
  red: {
    50: '#D82C0D',
  },
  grey: {
    5: '#F0F2F4',
    10: '#D6DBE0',
    20: '#BCC3CD',
    30: '#A2ACB9',
    40: '#8894A5',
    50: '#6D7D92',
    60: '#576475',
    70: '#424B57',
    80: '#2C323A',
    90: '#16191D',
  },
}

export const lightTheme = createTheme('light', {
  colors: {
    text: colors.black[80],
    primary: colors.black[100],
    primaryOnDark: colors.white[0],
    secondary: colors.black[90],
    tertiary: colors.black[70],
    quaternary: colors.grey[10],
    interactive: colors.black[80],
    background: colors.white[10],
    surface: colors.white[0],
    surfaceHovered: colors.white[10],
    onSurface: colors.black[90],
    shadow: colors.grey[10],
    divider: colors.black[100],
    critical: colors.red[50],
    warning: colors.yellow[50],
    success: colors.green[50],
  },
})

export const darkTheme = createTheme('dark', {
  colors: {
    text: colors.white[30],
    primary: colors.white[0],
    secondary: colors.black[90],
    tertiary: colors.grey[40],
    quaternary: colors.grey[70],
    interactive: colors.white[30],
    background: colors.black[100],
    surface: '#202123',
    surfaceHovered: '#2f3133',
    onSurface: colors.black[90],
    shadow: colors.white[80],
    divider: colors.white[0],
    critical: colors.red[50],
    warning: colors.yellow[50],
    success: colors.green[50],
  },
})

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export const globalStyles = stitchesGlobalCss({
  // html: {
  //   color: '$text',
  //   fontFamily: '$system',
  //   fontSize: '100%',
  //   lineHeight: '1.2rem',
  //   cursor: 'auto',
  // },
  // a: {
  //   color: '$interactive',
  //   textDecoration: 'none',
  // },
  // main: {
  //   'p, li': {
  //     maxWidth: '70ch',
  //     fontSize: '1.125rem',
  //     lineHeight: '1.5rem',
  //   },
  //   'ul, ol': {
  //     paddingInlineStart: '$lg',
  //   },
  // },
  // '::selection': {
  //   backgroundColor: '$primary',
  //   color: '$background',
  // },
})
