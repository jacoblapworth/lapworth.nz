import * as Ariakit from '@ariakit/react'

import { styled } from '@/styled/jsx'

export const Tooltip = styled(Ariakit.Tooltip, {
  base: {
    backgroundColor: 'background.primary.inverse',
    borderRadius: 6,
    color: 'white',
    paddingBlock: 4,
    paddingInline: 8,
    textStyle: 'body.small.regular',
  },
})
