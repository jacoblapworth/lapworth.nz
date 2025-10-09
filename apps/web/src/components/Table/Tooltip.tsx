import * as Ariakit from '@ariakit/react'

import { styled } from '@/styled/jsx'

export const Tooltip = styled(Ariakit.Tooltip, {
  base: {
    backgroundColor: 'grey.1',
    borderRadius: 'medium',
    color: 'white',
    paddingBlock: '2xsmall',
    paddingInline: 'xsmall',
    textStyle: 'body.small',
  },
})
