import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { XeroSplash } from '@/components/Work/Xero'

import { GetStaticProps } from '../_app'

export const Work: NextPage = () => {
  return (
    <>
      <NextSeo description="Xero, Vend, Timely, Trade Me" />

      <XeroSplash />
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
