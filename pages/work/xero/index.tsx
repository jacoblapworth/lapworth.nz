import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import Text from '@/components/Typography/Text'
import { FigmaAccessibility } from '@/components/Work/Xero/FigmaAccessibility'
import { Highlight } from '@/components/Work/Xero/Highlight'
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
  gridTemplateColumns: 'repeat(2, 1fr)',
  marginBlock: '$md',
})

export const Xero: NextPage = () => {
  return (
    <>
      <NextSeo noindex={true} />
      <Text as="h2" display size="xlarge">
        Xero User Interface
      </Text>
      <p>Design system for beautiful business</p>
      <Grid>
        <FigmaAccessibility />
      </Grid>
    </>
  )
}

export default Xero
