import { NextPage } from 'next'
import NextImage from 'next/image'
import { NextSeo } from 'next-seo'

import { Text } from '@/components/Typography'
import { GetStaticProps } from '@/pages/_app'
import worldMap from '@/public/static/work/xero/principles-world-map.svg'
import { styled } from '@/styles'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Xero Experience Design Principles',
    },
  }
}

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  marginBlock: '$md',
})

export const Xero: NextPage = () => {
  return (
    <>
      <NextSeo noindex={true} />
      <Text as="h2" display size="large">
        Xero Experience Design Principles
      </Text>
      <p>Design system for beautiful business</p>

      <NextImage src={worldMap} alt="Map of world highlighting 7 locations" />
      <div>8 workshops</div>
      <div>7 regions</div>
      <div>4 time zones</div>
      <div>68 participants</div>
    </>
  )
}

export default Xero
