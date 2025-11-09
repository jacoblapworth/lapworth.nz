import * as stylex from '@stylexjs/stylex'

// Color tokens
export const colors = stylex.defineVars({
  blue: '#1F68DD',
  grey: {
    1: '#000A1E',
    2: '#404756',
    3: '#59606D',
    4: '#80858F',
    5: '#A6A9B0',
    6: '#CCCED2',
    7: '#E6E7E9',
    8: '#F2F3F4',
    alpha: {
      1: '#000A1E',
      2: 'rgba(0, 10, 30, 0.75)',
      3: 'rgba(0, 10, 30, 0.65)',
      4: 'rgba(0, 10, 30, 0.5)',
      5: 'rgba(0, 10, 30, 0.35)',
      6: 'rgba(0, 10, 30, 0.2)',
      7: 'rgba(0, 10, 30, 0.1)',
      8: 'rgba(0, 10, 30, 0.05)',
    },
  },
})

// Semantic color tokens
export const semanticColors = stylex.defineVars({
  // Action colors
  action: {
    default: colors.blue,
    active: '#1C5DC5',
    disabled: '#828995',
    focus: '#1C5DC5',
    hover: '#184390',
  },

  // Background colors
  background: {
    inform: '#F0F9FE',
    negative: '#FFF6F7',
    neutral: '#F6F6F8',
    positive: '#F0FBF3',
    primary: {
      default: '#FFFFFF',
      inverse: '#081F33',
    },
    quaternary: '#E1E2E5',
    secondary: '#F6F6F8',
    tertiary: '#EFF0F3',
    warning: '#FEF8E4',
  },

  // Border colors
  border: {
    focus: colors.blue,
    regular: '#A6AAB1',
    soft: '#E1E2E5',
    strong: '#828995',
    subtle: '#CFD1D5',
  },

  // Icon colors
  icon: {
    default: '#1E3145',
    faint: '#616B7A',
    inverse: '#FFF',
    muted: '#424F60',
  },

  // Status colors
  inform: colors.blue,
  negative: '#C31230',
  positive: '#0F7B3D',
  warning: '#BB421F',

  // Text colors
  text: {
    default: '#1E3145',
    faint: '#616B7A',
    inform: colors.blue,
    inverse: '#FFF',
    muted: '#424F60',
    negative: '#C31230',
    positive: '#0F7B3D',
    primary: '#1E3145',
    warning: '#BB421F',
  },
})

// Font tokens
export const fonts = stylex.defineVars({
  inter: 'inter',
  national: 'national',
})

export const fontSizes = stylex.defineVars({
  xsmall: '11px',
  small: '13px',
  medium: '15px',
  large: '17px',
  xlarge: {
    2: '20px',
    3: '24px',
    5: '40px',
    7: '64px',
    8: '80px',
  },
})

export const fontWeights = stylex.defineVars({
  regular: '400',
  medium: '500',
  semibold: '500',
  bold: '700',
})

export const lineHeights = stylex.defineVars({
  default: '145%',
  95: '95%',
  100: '100%',
  105: '105%',
  115: '115%',
  145: '145%',
})

// Spacing tokens
export const spacing = stylex.defineVars({
  sm: '4px',
  md: '8px',
  lg: '16px',
})

// Border radius
export const borderRadius = stylex.defineVars({
  sm: '4px',
  md: '6px',
  lg: '8px',
})

// Shadows
export const shadows = stylex.defineVars({
  hover: `0 8px 16px 0 ${colors.grey.alpha[6]}`,
  lift: `0 0 0 1px ${colors.grey.alpha[6]}, 0 3px 6px 0 ${colors.grey.alpha[6]}`,
  overflow: {
    bottom: `0 -1px 0 0 ${colors.grey.alpha[6]}, 0 -3px 0 0 ${colors.grey.alpha[8]}`,
    left: `1px 0 0 0 ${semanticColors.border.soft}, 3px 0 3px 0 ${colors.grey.alpha[8]}`,
    right: `-3px 0 3px 0 ${colors.grey.alpha[8]}`,
    top: `0 1px 0 0 ${colors.grey.alpha[6]}, 0 3px 0 0 ${colors.grey.alpha[8]}`,
  },
  pop: `0 8px 16px 0 ${colors.grey.alpha[6]}`,
})

// Z-index
export const zIndex = stylex.defineVars({
  responsiveoverlay: '200',
})

// Animation keyframes
export const keyframes = {
  loader: stylex.keyframes({
    '0%': { clipPath: 'polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)' },
    '25%': { clipPath: 'polygon(50% 50%,0 0,100% 0,100% 0,100% 0)' },
    '50%': {
      clipPath: 'polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)',
    },
    '75%': { clipPath: 'polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)' },
    '100%': { clipPath: 'polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)' },
  }),
  rotate: stylex.keyframes({
    '100%': {
      transform: 'rotate(360deg)',
    },
  }),
}
