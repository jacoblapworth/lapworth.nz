import { defineSemanticTokens, defineTokens } from '@pandacss/dev'
export const tokens = defineTokens({
  colors: {
    blue: { value: '#1F68DD' },
    grey: {
      1: { value: '#000A1E' },
      2: { value: '#404756' },
      3: { value: '#59606D' },
      4: { value: '#80858F' },
      5: { value: '#A6A9B0' },
      6: { value: '#CCCED2' },
      7: { value: '#E6E7E9' },
      8: { value: '#F2F3F4' },
      alpha: {
        1: { value: '{colors.grey.1}' },
        2: { value: 'rgba(0, 10, 30, 0.75)' },
        3: { value: 'rgba(0, 10, 30, 0.65)' },
        4: { value: 'rgba(0, 10, 30, 0.5)' },
        5: { value: 'rgba(0, 10, 30, 0.35)' },
        6: { value: 'rgba(0, 10, 30, 0.2)' },
        7: { value: 'rgba(0, 10, 30, 0.1)' },
        8: { value: 'rgba(0, 10, 30, 0.05)' },
      },
    },
  },
  fonts: {
    inter: { value: 'inter' },
  },
  radii: {
    lg: { value: '12px' },
    md: { value: '6px' },
    sm: { value: '3px' },
  },
})

export const semanticTokens = defineSemanticTokens({
  borders: {
    regular: { value: '1px solid {colors.border.regular}' },
    soft: { value: '1px solid {colors.border.soft}' },
    strong: { value: '2px solid {colors.border.strong}' },
    subtle: { value: '1px solid {colors.border.subtle}' },
  },
  colors: {
    action: {
      active: { value: '#1C5DC5' },
      DEFAULT: { value: '{colors.blue}' },
      disabled: { value: '#828995' },
      focus: { value: '#1C5DC5' },
      hover: { value: '#184390' },
    },
    background: {
      inform: { value: '#F0F9FE' },
      negative: { value: '#FFF6F7' },
      neutral: { value: '#F6F6F8' },
      positive: { value: '#F0FBF3' },
      primary: {
        DEFAULT: { value: '#FFFFFF' },
        inverse: { value: '#081F33' },
      },
      quaternary: { value: '#E1E2E5' },
      secondary: { value: '#F6F6F8' },
      tertiary: { value: '#EFF0F3' },
      warning: { value: '#FEF8E4' },
    },
    border: {
      focus: { value: '{colors.action}' },
      regular: { value: '#A6AAB1' },
      soft: { value: '#E1E2E5' },
      strong: { value: '#828995' },
      subtle: { value: '#CFD1D5' },
    },

    icon: {
      DEFAULT: { value: '#1E3145' },
      faint: { value: '#616B7A' },
      inverse: { value: '#FFF' },
      muted: { value: '#424F60' },
    },
    inform: {
      value: '{colors.blue}',
    },
    negative: {
      value: '#C31230',
    },
    positive: {
      value: '#0F7B3D',
    },
    text: {
      DEFAULT: { value: '{colors.text.primary}' },
      faint: { value: '#616B7A' },
      inform: { value: '{colors.inform}' },
      inverse: { value: '#FFF' },
      muted: { value: '#424F60' },
      negative: { value: '{colors.negative}' },
      positive: { value: '{colors.positive}' },
      primary: { value: '#1E3145' },
      warning: { value: '{colors.warning}' },
    },
    warning: {
      value: '#BB421F',
    },
  },
  fontSizes: {
    large: { value: '17px' },
    medium: { value: '15px' },
    small: { value: '13px' },
  },
  fontWeights: {
    regular: { value: '400' },
    semibold: { value: '500' },
  },
  lineHeights: {
    default: { value: '145%' },
  },
  shadows: {
    hover: {
      value: '0 8px 16px 0 {colors.grey.alpha.6}',
    },
    lift: {
      value:
        '0 0 0 1px {colors.grey.alpha.6}, 0 3px 6px 0 {colors.grey.alpha.6}',
    },
    overflow: {
      bottom: {
        value:
          '0 -1px 0 0 {colors.grey.alpha.6}, 0 -3px 0 0 {colors.grey.alpha.8}',
      },
      left: {
        value:
          '1px 0 0 0 {colors.border.soft}, 3px 0 3px 0 {colors.grey.alpha.8}',
      },
      right: {
        value: '-3px 0 3px 0 {colors.grey.alpha.8}',
      },
      top: {
        value:
          '0 1px 0 0 {colors.grey.alpha.6}, 0 3px 0 0 {colors.grey.alpha.8}',
      },
    },
    pop: {
      value: '0 8px 16px 0 {colors.grey.alpha.6}',
    },
  },
  spacing: {
    lg: { value: '16px' },
    md: { value: '12px' },
    sm: { value: '8px' },
    xl: { value: '24px' },
    xs: { value: '4px' },
  },
  zIndex: {
    responsiveoverlay: { value: 200 },
  },
})
