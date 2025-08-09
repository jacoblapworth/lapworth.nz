'use client'

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
    <>
      <Layout>
        {/* <XeroTile />
        <DiscoverTile />
        <VendTabsTile /> */}
      </Layout>
    </>
  )
}
