import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

import Discover from '@/components/Work/TradeMe/Discover'
import { createTheme, darkTheme, styled } from '@/styles'

export const tradeMeTheme = createTheme('trademe', {
  colors: {
    hokeyPokey: '#FFC041',
    marketplace: '#E95958',
    jobs: '#FC723E',
    property: '#2FBC7A',
    motors: '#6D7E98',
    services: '#535353',
    'pohutukawa-5': '#FFF8F8',
    'pohutukawa-10': '#FFF1F2',
    'pohutukawa-20': '#FFE7E7',
    'pohutukawa-30': '#FFD5D5',
    'pohutukawa-50': '#FFBCBD',
    'pohutukawa-100': '#FA999B',
    'pohutukawa-200': '#F57F7E',
    'pohutukawa-300': '#EF6D6B',
    'pohutukawa-400': '#E95958',
    'pohutukawa-500': '#E34647',
    'pohutukawa-600': '#D93A3F',
    'pohutukawa-700': '#C82630',
    'pohutukawa-800': '#B21C2A',
    'pohutukawa-900': '#9F2023',
    'jaffa-5': '#FFF8F5',
    'jaffa-10': '#FFF2ED',
    'jaffa-20': '#FFE9E1',
    'jaffa-30': '#FFD9CA',
    'jaffa-50': '#FFC6B0',
    'jaffa-100': '#FFAF8F',
    'jaffa-200': '#FF976E',
    'jaffa-300': '#FF8455',
    'jaffa-400': '#FC723E',
    'jaffa-500': '#F3632D',
    'jaffa-600': '#E95219',
    'jaffa-700': '#D54209',
    'jaffa-800': '#C23802',
    'jaffa-900': '#A72F00',
    'hokey-pokey-5': '#FFFCF0',
    'hokey-pokey-10': '#FFFAE5',
    'hokey-pokey-20': '#FFF4D1',
    'hokey-pokey-30': '#FFE8AC',
    'hokey-pokey-50': '#FFE18D',
    'hokey-pokey-100': '#FFD972',
    'hokey-pokey-200': '#FFD35F',
    'hokey-pokey-300': '#FFCB4F',
    'hokey-pokey-400': '#FFC041',
    'hokey-pokey-500': '#F9AF2C',
    'hokey-pokey-600': '#EB9600',
    'hokey-pokey-700': '#D57800',
    'hokey-pokey-800': '#B45600',
    'hokey-pokey-900': '#943900',
  },
})

const Theme = styled('div', {
  [darkTheme]: {
    [darkTheme.colors.background.variable]: 'magenta',
  },
})

export default function TradeMe() {
  return (
    <>
      <NextSeo noindex={true} />
      <div className={tradeMeTheme}>
        <Theme />
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
