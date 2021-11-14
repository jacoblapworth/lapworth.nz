import { styled } from '@/styles'

const Text = styled('div', {
  color: '$text',
  variants: {
    size: {
      small: {
        fontSize: '0.8rem',
      },
      medium: {
        fontSize: '1rem',
      },
      large: {
        fontSize: '2rem',
        lineHeight: '2rem',
      },
      xlarge: {
        fontSize: '3rem',
        lineHeight: '3rem',
      },
    },
    display: {
      true: {},
    },

    serif: {
      true: {
        fontFamily: '$serif',
        fontWeight: '400',
      },
    },
  },
  compoundVariants: [
    {
      display: 'true',
      size: 'xlarge',
      css: {
        fontSize: '4rem',
        lineHeight: '4rem',
        marginBlock: '4rem',
        '@sm': {
          fontSize: '6rem',
          lineHeight: '6rem',
          marginBlock: '5rem',
        },
      },
    },
    {
      display: 'true',
      size: 'large',
      css: {
        fontSize: '2rem',
        lineHeight: '2rem',
        marginBlock: '3rem',
        '@sm': {
          fontSize: '3rem',
          lineHeight: '3rem',
          marginBlock: '5rem',
        },
      },
    },
  ],
  defaultVariants: {
    size: 'medium',
  },
})

export default Text
