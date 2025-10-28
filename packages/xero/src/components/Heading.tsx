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
        textStyle: 'heading.2xlarge',
      },
      '3xlarge': {
        textStyle: 'heading.3xlarge',
      },
      '4xlarge': {
        textStyle: 'heading.4xlarge',
      },
      large: {
        textStyle: 'heading.large',
      },
      medium: {
        textStyle: 'heading.medium',
      },
      small: {
        textStyle: 'heading.small',
      },
      xlarge: {
        textStyle: 'heading.xlarge',
      },
      xsmall: {
        textStyle: 'heading.xsmall',
      },
    },
  },
})
