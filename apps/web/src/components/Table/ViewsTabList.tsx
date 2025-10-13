import * as Ariakit from '@ariakit/react'
import { styled } from '@/styled/jsx'

export const ViewsTabList = styled(Ariakit.TabList, {
  base: {
    backgroundColor: 'xero.background.secondary',
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    gap: '4px',
  },
})
