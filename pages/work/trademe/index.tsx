import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

import Discover from '@/components/Work/TradeMe/Discover'
import { createTheme, lightTheme } from '@/styles'

const tradeMeTheme = createTheme('trademe', {
  colors: {
    hokeyPokey: '#FFC041',
    marketplace: '#E95958',
    jobs: '#FC723E',
    property: '#2FBC7A',
    motors: '#6D7E98',
    services: '#535353',
  },
})

export default function TradeMe() {
  return (
    <>
      <NextSeo noindex={true} />
      <div className={tradeMeTheme}>
        <Discover />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      // hideNav: true,
      // theme: 'trademe',
    },
  }
}
