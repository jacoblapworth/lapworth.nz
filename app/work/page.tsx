'use client'

import DiscoverTile from '@/components/Work/TradeMe/DiscoverTile'
import { VendTabsTile } from '@/components/Work/Vend/Tile'
import { XeroTile } from '@/components/Work/Xero/XeroTile'
import { styled } from '@/styles'

const Layout = styled('div', {
  display: 'grid',
  gap: '$lg',
  columnGap: '$md',
  gridTemplateColumns: 'repeat(8, 1fr)',
})

export default function Page() {
  return (
    <>
      <Layout>
        <XeroTile />
        <DiscoverTile />
        <VendTabsTile />
      </Layout>
    </>
  )
}
