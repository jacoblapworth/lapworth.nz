import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss, createTheme, css, keyframes } =
  createStitches({
    prefix: 'j',
    media: {
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)',
    },
    theme: {
      fonts: {
        display: 'canela',
        text: 'sectra',
        system: 'system-ui',
      },
      colors: {
        hiContrast: 'hsl(206,10%,5%)',
        loContrast: 'white',
        black: 'rgba(31, 41, 55,1)',
      },
      sizes: {
        sm: '8px',
        md: '16px',
        lg: '32px',
      },
      space: {
        sm: '8px',
        md: '16px',
        lg: '32px',
      },
      fontSizes: {
        1: '13px',
        2: '15px',
        3: '17px',
      },
    },
  })

export const globalStyles = globalCss({
  '*': {
    fontFamily: '$system',
  },

  ':link': {
    color: '$black',
    textDecoration: 'unset',
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  ':visited': {
    color: '$black',
  },

  '@font-face': [
    {
      fontFamily: 'canela',
      fontWeight: 100,
      src: "url(/fonts/canela/thin.woff2) format('woff2'), url(/fonts/canela/thin.woff) format('woff')",
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'canela',
      fontWeight: 400,
      src: "url(/fonts/canela/regular.woff2) format('woff2'), url(/fonts/canela/regular.woff) format('woff')",
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'sectra',
      fontWeight: 700,
      src: "url(/fonts/sectra/Bold.woff2) format('woff2'), url(/fonts/sectra/Bold.woff) format('woff')",
      fontDisplay: 'swap',
    },
  ],
})
