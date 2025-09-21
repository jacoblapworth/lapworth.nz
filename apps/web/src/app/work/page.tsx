'use client'

import { DiscoverTile } from '@/src/app/work/trademe/DiscoverTile'
import { VendTabsTile } from '@/src/app/work/vend/Tile'
import { XeroTile } from '@/src/app/work/xero/XeroTile'
import { styled } from '@/styled/jsx'

const Layout = styled('div', {
  base: {
    display: 'grid',
    gap: 'lg',
    columnGap: 'md',
    gridTemplateColumns: 'repeat(8, 1fr)',
  },
})

export default function Page() {
  return (
    <Layout>
      <XeroTile />
      <DiscoverTile />
      <VendTabsTile />
    </Layout>
  )
}
