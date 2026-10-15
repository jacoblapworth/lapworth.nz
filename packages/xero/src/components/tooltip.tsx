import * as Ariakit from '@ariakit/react'

import { styled } from '@/styled/jsx'

export const Tooltip = styled(Ariakit.Tooltip, {
  base: {
    backgroundColor: 'background.primary.inverse',
    borderRadius: 6,
    color: 'white',
    paddingBlock: '1',
    paddingInline: '2',
    textStyle: 'body.small.regular',
  },
})
