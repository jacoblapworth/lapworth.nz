import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { Text } from '@/components/Typography'
import { GetStaticProps } from '@/pages/_app'
import { styled } from '@/styles'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Xero',
    },
  }
}

const Grid = styled('div', {
  display: 'grid',
  marginBlock: '$md',
})

export const Xero: NextPage = () => {
  return (
    <>
      <NextSeo noindex={true} />
      <Text display size="xlarge">
        Xero
      </Text>
      <p>Design system for beautiful business</p>
      <Grid></Grid>
    </>
  )
}

export default Xero
