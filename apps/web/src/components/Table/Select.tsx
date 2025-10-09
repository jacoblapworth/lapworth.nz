import * as Ariakit from '@ariakit/react'
import { styled } from '@/styled/jsx'

export const Select = styled(Ariakit.Select, {
  base: {
    '&:focus': {
      borderColor: 'xero.border.focus',
      boxShadow: 'outline',
      outline: 'none',
    },
    backgroundColor: 'white',
    border: '1px solid',
    borderColor: 'xero.border.subtle',
    borderRadius: 4,
    boxShadow: 'sm',
    color: 'xero.text.primary',
    fontSize: 14,
    lineHeight: 1.5,
    padding: '8px 12px',
  },
})
