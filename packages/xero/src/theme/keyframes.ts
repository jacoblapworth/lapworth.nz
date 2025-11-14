import { defineKeyframes } from '@pandacss/dev'

export const keyframes = defineKeyframes({
  fadeIn: {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
  fadeOut: {
    '0%': { opacity: 1 },
    '100%': { opacity: 0 },
  },
  loader: {
    0: { clipPath: 'polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)' },
    25: { clipPath: 'polygon(50% 50%,0 0,100% 0,100% 0,100% 0)' },
    50: {
      clipPath: 'polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)',
    },
    75: { clipPath: 'polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)' },
    100: { clipPath: 'polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)' },
  },
  rotate: {
    100: {
      transform: 'rotate(360deg)',
    },
  },
  spin: {
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  stroke: {
    '0%': {
      strokeDasharray: '1px, 200px',
      strokeDashoffset: '0',
    },
    '50%': {
      strokeDasharray: '100px, 200px',
      strokeDashoffset: '-15px',
    },
    '100%': {
      strokeDasharray: '100px, 200px',
      strokeDashoffset: ' -125px',
    },
  },
})
