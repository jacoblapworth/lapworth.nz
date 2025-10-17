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
    max: { value: '99999px;' },
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
    border: {
      value: '{colors.divider}',
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
