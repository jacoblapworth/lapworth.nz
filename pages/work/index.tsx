import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { Text } from '@/components/Typography'

import { GetStaticProps } from '../_app'

export const Work: NextPage = () => {
  return (
    <>
      <NextSeo description="Xero, Vend, Timely, Trade Me" />
      <Text size="xlarge" display>
        Coming soon 👀
      </Text>
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
