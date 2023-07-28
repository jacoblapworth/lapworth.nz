'use client'

import { DiscoverTile } from '@/app/work/trademe/DiscoverTile'
import { VendTabsTile } from '@/app/work/vend/Tile'
import { XeroTile } from '@/app/work/xero/XeroTile'
import { styled } from '@/styled-system/jsx'

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
    <>
      <Layout>
        <XeroTile />
        <DiscoverTile />
        <VendTabsTile />
      </Layout>
    </>
  )
}
