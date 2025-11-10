import * as Ariakit from '@ariakit/react'
import { styled } from '@/styled/jsx'

export const ViewsTabList = styled(Ariakit.TabList, {
  base: {
    backgroundColor: 'background.secondary',
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '4px',
  },
})
