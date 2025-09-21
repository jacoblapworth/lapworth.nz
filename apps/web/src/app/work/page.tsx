import { work } from '@/content'
import { styled } from '@/styled/jsx'
import type { Metadata } from 'next'
import Link from 'next/link'

const Layout = styled('div', {
  base: {
    display: 'grid',
    gap: 'lg',
    columnGap: 'md',
    gridTemplateColumns: 'repeat(8, 1fr)',
  },
})

export const metadata: Metadata = {
  title: 'Work',
  description: 'Xero, Vend, Timely, Trade Me',
  robots: {
    index: false,
  },
}

export default function Page() {
  return (
    <Layout>
      {work.map((item) => (
        <div key={item.slug}>
          <Link href={`/work/${item.slug}`}>{item.title}</Link>
        </div>
      ))}
      {/* <XeroTile />
        <DiscoverTile />
        <VendTabsTile /> */}
    </Layout>
  )
}
