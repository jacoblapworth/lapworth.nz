import * as Ariakit from '@ariakit/react'
import { styled } from '@/styled/jsx'

export const ViewTab = styled(Ariakit.Tab, {
  base: {
    _selected: {
      _hover: {
        backgroundColor: 'xero.action/5',
        borderColor: 'xero.action.hover',
      },
      backgroundColor: 'white',
      borderColor: 'xero.action',
      color: 'xero.action',
    },
    backgroundColor: {
      _hover: 'xero.background.tertiary',
      base: '#F6F6F8',
    },
    borderColor: {
      _hover: 'xero.border.subtle',
      base: 'transparent',
    },
    borderRadius: 'md',
    borderStyle: 'solid',
    borderWidth: 1,
    color: 'text',
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: 500,
    paddingBlock: 4,
    paddingInline: 8,
  },
})
