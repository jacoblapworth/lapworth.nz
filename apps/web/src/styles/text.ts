import { defineTextStyles } from '@pandacss/dev'

export const textStyles = defineTextStyles({
  xero: {
    body: {
      large: {
        regular: {
          value: {
            fontFamily: 'inter',
            fontSize: 'large',
            fontWeight: 'regular',
            lineHeight: '145%',
          },
        },
        semibold: {
          value: {
            fontFamily: 'inter',
            fontSize: 'large',
            fontWeight: 'semibold',
            lineHeight: '145%',
          },
        },
      },
      small: {
        regular: {
          value: {
            fontFamily: 'inter',
            fontSize: 'xsmall',
            fontWeight: 'regular',
            lineHeight: '145%',
          },
        },
        semibold: {
          value: {
            fontFamily: 'inter',
            fontSize: 'xsmall',
            fontWeight: 'semibold',
            lineHeight: '145%',
          },
        },
      },
      standard: {
        regular: {
          value: {
            fontFamily: 'inter',
            fontSize: 'base',
            fontWeight: 'regular',
            lineHeight: '145%',
          },
        },
        semibold: {
          value: {
            fontFamily: 'inter',
            fontSize: 'base',
            fontWeight: 'semibold',
            lineHeight: '145%',
          },
        },
      },
    },

    button: {
      small: {
        value: {
          fontFamily: 'inter',
          fontSize: 'xsmall',
          fontWeight: 'medium',
          lineHeight: '100%',
        },
      },
      standard: {
        value: {
          fontFamily: 'inter',
          fontSize: 'small',
          fontWeight: 'medium',
          lineHeight: '100%',
        },
      },
    },
    heading: {
      large: {
        bold: {
          value: {
            fontFamily: 'national',
            fontSize: '7xlarge',
            fontWeight: 'bold',
            lineHeight: '105%',
          },
        },
      },
      small: {
        bold: {
          value: {
            fontFamily: 'national',
            fontSize: '3xlarge',
            fontWeight: 'bold',
            lineHeight: '115%',
          },
        },
      },
      standard: {
        bold: {
          value: {
            fontFamily: 'national',
            fontSize: '5xlarge',
            fontWeight: 'bold',
            lineHeight: '105%',
          },
        },
      },
      super: {
        bold: {
          value: {
            fontFamily: 'national',
            fontSize: '8xlarge',
            fontWeight: 'bold',
            lineHeight: '95%',
          },
        },
      },
      tiny: {
        bold: {
          value: {
            fontFamily: 'national',
            fontSize: '2xlarge',
            fontWeight: 'bold',
            lineHeight: '145%',
          },
        },
      },
    },
  },
})
