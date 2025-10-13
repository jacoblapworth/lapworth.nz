import { defineSemanticTokens, defineTokens } from '@pandacss/dev'

export const tokens = defineTokens({
  colors: {
    black: {
      50: {
        value: '#727272',
      },
      70: {
        value: '#717171',
      },
      80: {
        value: '#202223',
      },
      90: {
        value: '#111213',
      },
      100: {
        value: '#0b0c0d',
      },
    },
    green: {
      50: {
        value: '#008060',
      },
    },
    grey: {
      5: {
        value: '#F0F2F4',
      },
      10: {
        value: '#D6DBE0',
      },
      20: {
        value: '#BCC3CD',
      },
      30: {
        value: '#A2ACB9',
      },
      40: {
        value: '#8894A5',
      },
      50: {
        value: '#6D7D92',
      },
      60: {
        value: '#576475',
      },
      70: {
        value: '#424B57',
      },
      80: {
        value: '#2C323A',
      },
      90: {
        value: '#16191D',
      },
    },
    red: {
      50: {
        value: '#D82C0D',
      },
    },
    white: {
      0: {
        value: '#ffffff',
      },
      10: {
        value: '#f6f6f7',
      },
      20: {
        value: '#ececec',
      },
      30: {
        value: '#e3e5e7',
      },
      80: {
        value: 'rgba(255,255,255,0.1)',
      },
    },

    yellow: {
      50: {
        value: '#FFC453',
      },
      100: {
        value: '#fef9c3',
      },
      800: {
        value: '#854d0e',
      },
    },
  },
  durations: {
    lg: { value: '500ms' },
    md: { value: '300ms' },
    sm: { value: '100ms' },
  },
  fontSizes: {
    lg: { value: '1.5rem' },
    md: { value: '1rem' },
    sm: { value: '0.875rem' },
  },
  fonts: {
    display: { value: 'canela' },
    mono: { value: 'mono' },
    serif: { value: 'sectra' },
    system: { value: 'system-ui' },
  },
  radii: {
    lg: { value: '12px' },
    max: { value: '99999px' },
    md: { value: '6px' },
    sm: { value: '3px' },
    xl: { value: '16px' },
  },
  shadows: {
    md: { value: '0 4px 8px {colors.shadow}' },
  },
  sizes: {
    lg: { value: '32px' },
    md: { value: '16px' },
    sm: { value: '8px' },
    xl: { value: '48px' },
  },
  spacing: {
    lg: { value: '32px' },
    md: { value: '16px' },
    sm: { value: '8px' },
    xs: { value: '4px' },
  },
  zIndex: {
    1: { value: 0 },
    2: { value: 100 },
    3: { value: 200 },
    4: { value: 1000 },
  },
})

export const semanticTokens = defineSemanticTokens({
  blurs: {
    lg: { value: 'blur(12px)' },
    md: { value: 'blur(8px)' },
    sm: { value: 'blur(4px)' },
  },
  borders: {
    divider: { value: '1px solid {colors.divider}' },
    muted: { value: '1px solid {colors.quaternary}' },
    primary: { value: '1px solid {colors.primary}' },
    secondary: { value: '1px solid {colors.secondary}' },
    tertiary: { value: '1px solid {colors.tertiary}' },
  },
  colors: {
    background: {
      value: {
        _dark: '{colors.black.100}',
        base: '{colors.white.10}',
      },
    },
    critical: {
      value: {
        _dark: '{colors.red.50}',
        base: '{colors.red.50}',
      },
    },
    divider: {
      value: {
        _dark: '{colors.white.0}',
        base: '{colors.black.100}',
      },
    },
    interactive: {
      value: {
        _dark: '{colors.white.30}',
        base: '{colors.black.80}',
      },
    },
    onSurface: {
      value: {
        _dark: '{colors.black.90}',
        base: '{colors.black.90}',
      },
    },
    primary: {
      value: {
        _dark: '{colors.white.0}',
        base: '{colors.black.100}',
      },
    },
    primaryOnDark: {
      value: {
        _dark: '',
        base: '{colors.white.0}',
      },
    },
    quaternary: {
      value: {
        _dark: '{colors.grey.70}',
        base: '{colors.grey.10}',
      },
    },
    secondary: {
      value: {
        _dark: '{colors.grey.30}',
        base: '{colors.grey.70}',
      },
    },
    shadow: {
      value: {
        _dark: '{colors.white.80}',
        base: '{colors.grey.10}',
      },
    },
    success: {
      value: {
        _dark: '{colors.green.50}',
        base: '{colors.green.50}',
      },
    },
    surface: {
      value: {
        _dark: '#202123',
        base: '{colors.white.0}',
      },
    },
    surfaceHovered: {
      value: {
        _dark: '#2f3133',
        base: '{colors.white.10}',
      },
    },
    tertiary: {
      value: {
        _dark: '{colors.grey.40}',
        base: '{colors.grey.50}',
      },
    },
    text: {
      value: {
        _dark: '{colors.white.30}',
        base: '{colors.black.80}',
      },
    },
    warning: {
      surface: {
        value: {
          _dark: '{colors.yellow.800}',
          base: '{colors.yellow.100}',
        },
      },
      value: {
        _dark: '{colors.yellow.50}',
        base: '{colors.yellow.50}',
      },
    },
    xero: {
      action: {
        active: { value: '#1C5DC5' },
        DEFAULT: { value: '{colors.xero.blue}' },
        disabled: { value: '#828995' },
        focus: { value: '#1C5DC5' },
        hover: { value: '#184390' },
      },
      background: {
        inform: { value: '#F0F9FE' },
        negative: { value: '#FFF6F7' },
        neutral: { value: '#F6F6F8' },
        positive: { value: '#F0FBF3' },
        primary: { value: '#FFFFFF' },
        quaternary: { value: '#E1E2E5' },
        secondary: { value: '#F6F6F8' },
        tertiary: { value: '#EFF0F3' },
        warning: { value: '#FEF8E4' },
      },
      blue: { value: '#1F68DD' },
      border: {
        regular: { value: '#A6AAB1' },
        soft: { value: '#E1E2E5' },
        strong: { value: '#828995' },
        subtle: { value: '#CFD1D5' },
      },
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
      icon: {
        DEFAULT: { value: '#1E3145' },
        faint: { value: '#616B7A' },
        inverse: { value: '#FFF' },
        muted: { value: '#424F60' },
      },
      inform: {
        value: '{colors.xero.blue}',
      },
      negative: {
        value: '#C31230',
      },
      positive: {
        value: '#0F7B3D',
      },
      text: {
        DEFAULT: { value: '{colors.xero.text.primary}' },
        faint: { value: '#616B7A' },
        inform: { value: '{colors.xero.inform}' },
        inverse: { value: '#FFF' },
        muted: { value: '#424F60' },
        negative: { value: '{colors.xero.negative}' },
        positive: { value: '{colors.xero.positive}' },
        primary: { value: '#1E3145' },
        warning: { value: '{colors.xero.warning}' },
      },
      warning: {
        value: '#BB421F',
      },
    },
  },
  shadows: {
    xero: {
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
            '0 -1px 0 0 {colors.xero.grey.alpha.6}, 0 -3px 0 0 {colors.xero.grey.alpha.8}',
        },
        left: {
          value:
            '1px 0 0 0 {colors.xero.grey.alpha.6}, 3px 0 0 0 {colors.xero.grey.alpha.8}',
        },
        right: {
          value:
            '-1px 0 0 0 {colors.xero.grey.alpha.6}, -3px 0 0 0 {colors.xero.grey.alpha.8}',
        },
        top: {
          value:
            '0 1px 0 0 {colors.xero.grey.alpha.6}, 0 3px 0 0 {colors.xero.grey.alpha.8}',
        },
      },
      pop: {
        value: '0 8px 16px 0 {colors.xero.grey.alpha.6}',
      },
    },
  },
})

export const tradeMeColors = defineTokens.colors({
  'hokey-pokey': {
    '5': { value: '#FFFCF0' },
    '10': { value: '#FFFAE5' },
    '20': { value: '#FFF4D1' },
    '30': { value: '#FFE8AC' },
    '50': { value: '#FFE18D' },
    '100': { value: '#FFD972' },
    '200': { value: '#FFD35F' },
    '300': { value: '#FFCB4F' },
    '400': { value: '#FFC041' },
    '500': { value: '#F9AF2C' },
    '600': { value: '#EB9600' },
    '700': { value: '#D57800' },
    '800': { value: '#B45600' },
    '900': { value: '#943900' },
    DEFAULT: { value: 'hokey-pokey.500' },
  },
  jaffa: {
    '5': { value: '#FFF8F5' },
    '10': { value: '#FFF2ED' },
    '20': { value: '#FFE9E1' },
    '30': { value: '#FFD9CA' },
    '50': { value: '#FFC6B0' },
    '100': { value: '#FFAF8F' },
    '200': { value: '#FF976E' },
    '300': { value: '#FF8455' },
    '400': { value: '#FC723E' },
    '500': { value: '#F3632D' },
    '600': { value: '#E95219' },
    '700': { value: '#D54209' },
    '800': { value: '#C23802' },
    '900': { value: '#A72F00' },
    DEFAULT: { value: 'jaffa.500' },
  },
  pohutukawa: {
    '5': { value: '#FFF8F8' },
    '10': { value: '#FFF1F2' },
    '20': { value: '#FFE7E7' },
    '30': { value: '#FFD5D5' },
    '50': { value: '#FFBCBD' },
    '100': { value: '#FA999B' },
    '200': { value: '#F57F7E' },
    '300': { value: '#EF6D6B' },
    '400': { value: '#E95958' },
    '500': { value: '#E34647' },
    '600': { value: '#D93A3F' },
    '700': { value: '#C82630' },
    '800': { value: '#B21C2A' },
    '900': { value: '#9F2023' },
    DEFAULT: { value: 'pohutukawa.500' },
  },
})

export const tradeMeTokens = defineSemanticTokens.colors({
  jobs: { value: '#FC723E' },
  marketplace: { value: 'pohutukawa' },
  motors: { value: '#6D7E98' },
  property: { value: '#2FBC7A' },
  services: { value: '#535353' },
})
