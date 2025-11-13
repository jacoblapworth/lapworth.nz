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
    inter: { value: 'Inter' },
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
      active: {
        value: {
          _dark: '#4A90E2',
          base: '#1C5DC5',
        },
      },
      DEFAULT: {
        value: {
          _dark: '#156ffe',
          base: '{colors.blue}',
        },
      },
      disabled: {
        value: {
          _dark: '#5A6270',
          base: '#828995',
        },
      },
      focus: {
        value: {
          _dark: '#4A90E2',
          base: '#1C5DC5',
        },
      },
      hover: {
        value: {
          _dark: '#6BB0FF',
          base: '#184390',
        },
      },
    },
    background: {
      inform: {
        value: {
          _dark: '#0D2940',
          base: '#F0F9FE',
        },
      },
      negative: {
        value: {
          _dark: '#3D1A1F',
          base: '#FFF6F7',
        },
      },
      neutral: {
        value: {
          _dark: '#1A1F2E',
          base: '#F6F6F8',
        },
      },
      positive: {
        value: {
          _dark: '#0F2E1C',
          base: '#F0FBF3',
        },
      },
      primary: {
        DEFAULT: {
          value: {
            _dark: '#12171c',
            base: '#FFFFFF',
          },
        },
        inverse: {
          value: {
            _dark: '#FFFFFF',
            base: '#081F33',
          },
        },
      },
      quaternary: {
        value: {
          _dark: '#2A3142',
          base: '#E1E2E5',
        },
      },
      secondary: {
        value: {
          _dark: '#0F1621',
          base: '#F6F6F8',
        },
      },
      tertiary: {
        value: {
          _dark: '#1A2231',
          base: '#EFF0F3',
        },
      },
      warning: {
        value: {
          _dark: '#3D2E0F',
          base: '#FEF8E4',
        },
      },
    },
    border: {
      focus: { value: '{colors.action}' },
      regular: {
        value: {
          _dark: '#3D4452',
          base: '#A6AAB1',
        },
      },
      soft: {
        value: {
          _dark: '#2A3142',
          base: '#E1E2E5',
        },
      },
      strong: {
        value: {
          _dark: '#4D5563',
          base: '#828995',
        },
      },
      subtle: {
        value: {
          _dark: '#343B4A',
          base: '#CFD1D5',
        },
      },
    },
    icon: {
      DEFAULT: {
        value: {
          _dark: '#E1E4E8',
          base: '#1E3145',
        },
      },
      faint: {
        value: {
          _dark: '#9198A1',
          base: '#616B7A',
        },
      },
      inverse: {
        value: {
          _dark: '#1E3145',
          base: '#FFF',
        },
      },
      muted: {
        value: {
          _dark: '#A6ACB5',
          base: '#424F60',
        },
      },
    },
    inform: {
      value: {
        _dark: '#5BA3FF',
        base: '{colors.blue}',
      },
    },
    negative: {
      value: {
        _dark: '#FF5B7A',
        base: '#C31230',
      },
    },
    positive: {
      value: {
        _dark: '#5EC689',
        base: '#0F7B3D',
      },
    },
    shadow: {
      primary: {
        value: {
          _dark: '{colors.grey.2/20}',
          base: '{colors.grey.alpha.6}',
        },
      },
    },
    text: {
      DEFAULT: {
        value: '{colors.text.primary}',
      },
      faint: {
        value: {
          _dark: '#9198A1',
          base: '#616B7A',
        },
      },
      inform: { value: '{colors.inform}' },
      inverse: {
        value: {
          _dark: '#1E3145',
          base: '#FFF',
        },
      },
      muted: {
        value: {
          _dark: '#A6ACB5',
          base: '#424F60',
        },
      },
      negative: { value: '{colors.negative}' },
      positive: { value: '{colors.positive}' },
      primary: {
        value: {
          _dark: '#E1E4E8',
          base: '#1E3145',
        },
      },
      warning: { value: '{colors.warning}' },
    },
    warning: {
      value: {
        _dark: '#FF9B6B',
        base: '#BB421F',
      },
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
      value: '0 8px 16px 0 {colors.shadow.primary}',
    },
    lift: {
      value:
        '0 0 0 1px {colors.shadow.primary}, 0 3px 6px 0 {colors.shadow.primary}',
    },
    overflow: {
      bottom: {
        value:
          '0 -1px 0 0 {colors.shadow.primary}, 0 -3px 0 0 {colors.grey.alpha.8}',
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
