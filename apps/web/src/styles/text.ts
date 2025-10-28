import { defineTextStyles } from '@pandacss/dev'

export const textStyles = defineTextStyles({
  body: {
    lg: {
      value: {
        fontSize: '2rem',
        lineHeight: '2.4rem',
      },
    },
    md: {
      value: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
      },
    },
    sm: {
      value: {
        fontSize: '0.8rem',
        lineHeight: '1.2rem',
      },
    },
    xl: {
      value: {
        fontSize: '3rem',
        lineHeight: '3rem',
      },
    },
  },
  display: {
    lg: {
      value: {
        fontSize: '2rem',
        lineHeight: '2rem',
        sm: {
          fontSize: '3rem',
          lineHeight: '3rem',
        },
      },
    },
    md: {
      value: {
        fontSize: '1.4rem',
        sm: {
          fontSize: '1.5rem',
        },
      },
    },
    sm: {
      value: {
        fontSize: '1.2rem',
        sm: {
          fontSize: '1.2rem',
        },
      },
    },
    xl: {
      value: {
        fontSize: '4rem',
        lineHeight: '4rem',
        sm: {
          fontSize: '6rem',
          lineHeight: '6rem',
        },
      },
    },
  },
})
