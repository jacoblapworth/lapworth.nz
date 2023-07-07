import {
  defineTokens,
  defineSemanticTokens,
  defineTextStyles,
  defineLayerStyles,
} from '@pandacss/dev'

export const tokens = defineTokens({
  sizes: {
    sm: { value: '8px' },
    md: { value: '16px' },
    lg: { value: '32px' },
  },
  spacing: {
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
    md: { value: '0 4px 8px {shadow}' },
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
      50: {
        value: '#008060',
      },
    },
    yellow: {
      50: {
        value: '#FFC453',
      },
    },
    red: {
      50: {
        value: '#D82C0D',
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
  colors: {
    text: {
      value: {
        base: '{black.80}',
        _dark: '{white.30}',
      },
    },
    primary: {
      value: {
        base: '{black.100}',
        _dark: '{white.0}',
      },
    },
    primaryOnDark: {
      value: {
        base: '{white.0}',
        _dark: '',
      },
    },
    secondary: {
      value: {
        base: '{black.90}',
        _dark: '{black.90}',
      },
    },
    tertiary: {
      value: {
        base: '{black.70}',
        _dark: '{grey.40}',
      },
    },
    quaternary: {
      value: {
        base: '{grey.10}',
        _dark: '{grey.70}',
      },
    },
    interactive: {
      value: {
        base: '{black.80}',
        _dark: '{white.30}',
      },
    },
    background: {
      value: {
        base: '{white.10}',
        _dark: '{black.100}',
      },
    },
    surface: {
      value: {
        base: '{white.0}',
        _dark: '#202123',
      },
    },
    surfaceHovered: {
      value: {
        base: '{white.10}',
        _dark: '#2f3133',
      },
    },
    onSurface: {
      value: {
        base: '{black.90}',
        _dark: '{black.90}',
      },
    },
    shadow: {
      value: {
        base: '{grey.10}',
        _dark: '{white.80}',
      },
    },
    divider: {
      value: {
        base: '{black.100}',
        _dark: '{white.0}',
      },
    },
    critical: {
      value: {
        base: '{red.50}',
        _dark: '{red.50}',
      },
    },
    warning: {
      value: {
        base: '{yellow.50}',
        _dark: '{yellow.50}',
      },
    },
    success: {
      value: {
        base: '{green.50}',
        _dark: '{green.50}',
      },
    },
  },
})

export const textStyles = defineTextStyles({})
export const layerStyles = defineLayerStyles({})
