import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import DiscoverTile from '@/components/Work/TradeMe/DiscoverTile'
import { XeroTile } from '@/components/Work/Xero'
import { XeroTile1 } from '@/components/Work/Xero/XeroTile'
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
      <NextSeo description="Xero, Vend, Timely, Trade Me" />
      <Layout>
        <XeroTile1 />
        <DiscoverTile />
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
