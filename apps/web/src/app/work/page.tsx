import type { Metadata } from 'next'

import { work } from '@/content'
import { styled, VStack } from '@/styled/jsx'
import { DiscoverTile } from './trademe/DiscoverTile'
import { VendTabsTile } from './vend/Tile'
import { WorkListItem } from './WorkListItem'
import { XeroTile } from './xero/XeroTile'

const Layout = styled('div', {
  base: {
    columnGap: 'md',
    display: 'grid',
    gap: 'lg',
    marginBlock: 'lg',
    // gridTemplateColumns: 'repeat(8, 1fr)',
  },
})

export const metadata: Metadata = {
  description: 'Xero, Vend, Timely, Trade Me',
  title: 'Work',
}

export default function Page() {
  return (
    <>
      <VStack alignItems="start">
        {work.map((item) => (
          <WorkListItem item={item} key={item.slug} />
        ))}
      </VStack>
      <Layout>
        <XeroTile />
        <DiscoverTile />
        <VendTabsTile />
      </Layout>
    </>
  )
}
