import * as stylex from '@stylexjs/stylex'
import { keyframes, styled } from '@/stylex'

const styles = stylex.create({
  spinner: {
    animation: `${keyframes.rotate} 1s linear infinite`,
    borderRadius: '50%',
    height: 16,
    position: 'relative',
    width: 16,
    '::before': {
      animation: `${keyframes.loader} 2s linear infinite`,
      border: '2px solid #FFF',
      borderRadius: '50%',
      boxSizing: 'border-box',
      content: '""',
      inset: 0,
      position: 'absolute',
    },
  },
})

export const Spinner = styled('div', {
  base: styles.spinner,
})
