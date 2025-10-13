import * as Ariakit from '@ariakit/react'

import { styled } from '@/styled/jsx'

export const Tooltip = styled(Ariakit.Tooltip, {
  base: {
    backgroundColor: 'xero.background.inverse',
    borderRadius: 6,
    color: 'white',
    paddingBlock: '2xsmall',
    paddingInline: 'xsmall',
    textStyle: 'body.small',
  },
})
