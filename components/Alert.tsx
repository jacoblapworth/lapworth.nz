import { CircleAlert, CircleCheck } from 'lucide-react'

import { styled } from 'styled/jsx'
import { token } from 'styled/tokens'
import type { HTMLStyledProps, StyledVariantProps } from 'styled/types'

const Container = styled(
  'div',
  {
    base: {
      padding: 'sm',
      border: 'primary',
      gap: 'sm',
      display: 'inline-flex',
      alignSelf: 'start',
      alignItems: 'center',
    },

    variants: {
      sentiment: {
        positive: {
          borderColor: 'border.positive.secondary',
        },
        negative: {
          borderColor: 'border.negative.secondary',
        },
      },
    },
  },
  {
    defaultProps: {
      role: 'alert',
      tabIndex: 0,
    },
  },
)

const IconMap = {
  positive: CircleCheck,
  negative: CircleAlert,
}

type Props = HTMLStyledProps<'div'> & StyledVariantProps<typeof Container>

export function Alert({ children, ...props }: Props) {
  const Icon = props.sentiment && IconMap[props.sentiment]

  return (
    <Container {...props}>
      {Icon && (
        <Icon
          color={token(`colors.${props.sentiment ?? 'primary'}`)}
          role="presentation"
        />
      )}
      {children}
    </Container>
  )
}
