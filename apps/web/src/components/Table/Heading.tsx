import * as Ariakit from '@ariakit/react'
import { styled } from '@/styled/jsx'

export const Heading = styled(Ariakit.Heading, {
  base: {},
  defaultVariants: {
    size: 'medium',
  },
  variants: {
    size: {
      '2xlarge': {
        textStyle: 'xero.heading.2xlarge',
      },
      '3xlarge': {
        textStyle: 'xero.heading.3xlarge',
      },
      '4xlarge': {
        textStyle: 'xero.heading.4xlarge',
      },
      large: {
        textStyle: 'xero.heading.large',
      },
      medium: {
        textStyle: 'xero.heading.medium',
      },
      small: {
        textStyle: 'xero.heading.small',
      },
      xlarge: {
        textStyle: 'xero.heading.xlarge',
      },
      xsmall: {
        textStyle: 'xero.heading.xsmall',
      },
    },
  },
})
