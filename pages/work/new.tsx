import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import DiscoverTile from '@/components/Work/TradeMe/DiscoverTile'
import { VendTabsTile } from '@/components/Work/Vend/Tile'
import { XeroTile } from '@/components/Work/Xero/XeroTile'
import { styled } from '@/styles'

import { GetStaticProps } from '../_app'

const Layout = styled('div', {
  display: 'grid',
  gap: '$lg',
  columnGap: '$md',
  gridTemplateColumns: 'repeat(8, 1fr)',
})

export const Work: NextPage = () => {
  return (
    <>
      <NextSeo noindex description="Xero, Vend, Timely, Trade Me" />
      <Layout>
        <XeroTile />
        <DiscoverTile />
        <VendTabsTile />
      </Layout>
    </>
  )
}

export default Work

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      title: 'Work',
    },
  }
}
