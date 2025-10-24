import { styled } from '@/styled/jsx'

export const Spinner = styled('div', {
  base: {
    _before: {
      animation: 'loader 2s linear infinite',
      border: '2px solid #FFF',
      borderRadius: '50%',
      boxSizing: 'border-box',
      content: '""',
      inset: 0,
      position: 'absolute',
    },

    animation: 'rotate 1s linear infinite',
    borderRadius: '50%',
    height: 16,
    position: 'relative',
    width: 16,
  },
})
