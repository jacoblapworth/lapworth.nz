import { defineTokens, defineSemanticTokens } from '@pandacss/dev'

export const tokens = defineTokens({
  sizes: {
    sm: { value: '8px' },
    md: { value: '16px' },
    lg: { value: '32px' },
  },
  spacing: {
    xsm: { value: '4px' },
    sm: { value: '8px' },
    md: { value: '16px' },
    lg: { value: '32px' },
  },
  fonts: {
    display: { value: 'canela' },
    serif: { value: 'sectra' },
    system: { value: 'system-ui' },
  },
  fontSizes: {
    sm: { value: '0.875rem' },
    md: { value: '1rem' },
    lg: { value: '1.5rem' },
  },
  radii: {
    sm: { value: '3px' },
    md: { value: '6px' },
    lg: { value: '12px' },
    max: { value: '99999px;' },
  },
  shadows: {
    md: { value: '0 4px 8px {colors.shadow}' },
  },
  zIndex: {
    1: { value: 0 },
    2: { value: 100 },
    3: { value: 200 },
    4: { value: 1000 },
  },
  durations: {
    sm: { value: '100ms' },
    md: { value: '300ms' },
    lg: { value: '500ms' },
  },
  colors: {
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
      10: {
        value: '#E6F6F0',
      },
      20: {
        value: '#C2EAD9',
      },
      30: {
        value: '#9ADFC2',
      },
      40: {
        value: '#72D4AB',
      },
      50: {
        value: '#008060',
      },
      60: {
        value: '#00664D',
      },
      70: {
        value: '#004C39',
      },
      80: {
        value: '#003326',
      },
      90: {
        value: '#001A13',
      },
    },
    yellow: {
      50: {
        value: '#FFC453',
      },
    },
    red: {
      10: {
        value: '#FBE3E0',
      },
      20: {
        value: '#F6C7C1',
      },
      30: {
        value: '#F0ABA2',
      },
      40: {
        value: '#EB8E83',
      },
      50: {
        value: '#D82C0D',
      },
      60: {
        value: '#B4240A',
      },
      70: {
        value: '#8A1A07',
      },
      80: {
        value: '#611004',
      },
      90: {
        value: '#380A02',
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
  },
})

export const semanticTokens = defineSemanticTokens({
  borders: {
    divider: { value: '1px solid {colors.divider}' },
    muted: { value: '1px solid {colors.quaternary}' },
    primary: { value: '1px solid {colors.border}' },
    positive: {
      DEFAULT: { value: '1px solid {colors.border.positive}' },
      secondary: { value: '1px solid {colors.border.positive.secondary}' },
    },
    negative: {
      DEFAULT: { value: '1px solid {colors.border.negative}' },
      secondary: { value: '1px solid {colors.border.negative.secondary}' },
    },
  },
  colors: {
    text: {
      value: {
        base: '{colors.black.80}',
        _dark: '{colors.white.30}',
      },
    },
    primary: {
      value: {
        base: '{colors.black.100}',
        _dark: '{colors.white.0}',
      },
    },
    primaryOnDark: {
      value: {
        base: '{colors.white.0}',
        _dark: '',
      },
    },
    secondary: {
      value: {
        base: '{colors.black.90}',
        _dark: '{colors.black.90}',
      },
    },
    tertiary: {
      value: {
        base: '{colors.black.70}',
        _dark: '{colors.grey.40}',
      },
    },
    quaternary: {
      value: {
        base: '{colors.grey.10}',
        _dark: '{colors.grey.70}',
      },
    },
    interactive: {
      value: {
        base: '{colors.black.80}',
        _dark: '{colors.white.30}',
      },
    },
    background: {
      DEFAULT: {
        value: {
          base: '{colors.white.10}',
          _dark: '{colors.black.100}',
        },
      },
      positive: {
        value: {
          base: '{colors.green.10}',
          _dark: '{colors.green.90}',
        },
      },
      negative: {
        value: {
          base: '{colors.red.10}',
          _dark: '{colors.red.90}',
        },
      },
    },
    border: {
      DEFAULT: {
        value: '{colors.primary}',
      },
      positive: {
        DEFAULT: {
          value: '{colors.green.50}',
        },
        secondary: {
          value: {
            base: '{colors.green.20}',
            _dark: '{colors.green.80}',
          },
        },
      },
      negative: {
        DEFAULT: {
          value: '{colors.red.50}',
        },
        secondary: {
          value: {
            base: '{colors.red.20}',
            _dark: '{colors.red.80}',
          },
        },
      },
    },
    surface: {
      value: {
        base: '{colors.white.0}',
        _dark: '#202123',
      },
    },
    surfaceHovered: {
      value: {
        base: '{colors.white.10}',
        _dark: '#2f3133',
      },
    },
    onSurface: {
      value: {
        base: '{colors.black.90}',
        _dark: '{colors.black.90}',
      },
    },
    shadow: {
      value: {
        base: '{colors.grey.10}',
        _dark: '{colors.white.80}',
      },
    },
    divider: {
      value: {
        base: '{colors.black.100}',
        _dark: '{colors.white.0}',
      },
    },
    negative: {
      value: {
        base: '{colors.red.50}',
        _dark: '{colors.red.50}',
      },
    },
    warning: {
      value: {
        base: '{colors.yellow.50}',
        _dark: '{colors.yellow.50}',
      },
    },
    positive: {
      value: {
        base: '{colors.green.50}',
        _dark: '{colors.green.50}',
      },
    },
  },
})

const tradeMeColors = defineTokens.colors({
  pohutukawa: {
    DEFAULT: { value: 'pohutukawa.500' },
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
  },
  jaffa: {
    DEFAULT: { value: 'jaffa.500' },
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
  },
  'hokey-pokey': {
    DEFAULT: { value: 'hokey-pokey.500' },
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
  },
})

const tradeMeTokens = defineSemanticTokens.colors({
  marketplace: { value: 'pohutukawa' },
  jobs: { value: '#FC723E' },
  property: { value: '#2FBC7A' },
  motors: { value: '#6D7E98' },
  services: { value: '#535353' },
})
