import type { Metadata } from 'next'
import Image from 'next/image'

import { Text } from '@/components/Typography'
import { work } from '@/content'
import { styled, VStack } from '@/styled/jsx'
import { DiscoverTile } from './trademe/DiscoverTile'
import { VendTabsTile } from './vend/Tile'
import { Link } from './WorkListItem'
import { XeroTile } from './xero/XeroTile'

const Layout = styled('div', {
  base: {
    marginBlock: 'lg',
    display: 'grid',
    gap: 'lg',
    columnGap: 'md',
    // gridTemplateColumns: 'repeat(8, 1fr)',
  },
})

export const metadata: Metadata = {
  title: 'Work',
  description: 'Xero, Vend, Timely, Trade Me',
}

export default function Page() {
  return (
    <>
      <VStack alignItems="start">
        {work.map(({ slug, cover, title, date }) => (
          <div key={slug}>
            <Link href={`/work/${slug}`}>
              {cover && (
                <Image src={cover} alt={title} width={500} height={300} />
              )}

              {title}
              <Text color="tertiary">
                {new Date(date).toLocaleDateString()}
              </Text>
            </Link>
          </div>
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
