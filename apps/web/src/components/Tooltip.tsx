import * as Ariakit from '@ariakit/react'
import { styled } from '@/styled/jsx'

export const Tooltip = styled(Ariakit.Tooltip, {
  base: {
    backgroundColor: 'background',
    borderColor: 'border',
    borderStyle: 'solid',
    borderWidth: 1,
    color: 'text',
    padding: '8px 12px',
  },
  variants: {},
})
