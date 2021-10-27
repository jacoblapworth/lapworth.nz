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
        lineHeight: '1rem',
      },
      xlarge: {
        fontSize: '3rem',
        lineHeight: '1rem',
      },
    },
    display: {
      true: {
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
    serif: {
      true: {
        fontFamily: '$serif',
        fontWeight: '400',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

export default Text
