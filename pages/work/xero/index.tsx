import { NextPage } from 'next'
import NextLink from 'next/link'
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
  gap: '$md',
})

const Link = styled(NextLink, {
  textDecoration: 'underline',
  textDecorationColor: '$quaternary',

  '&:hover': {
    textDecoration: 'underline',
    textDecorationColor: '$interactive',
  },
})

export const Xero: NextPage = () => {
  return (
    <>
      <NextSeo noindex={true} />
      <Text as="h1" display size="xlarge">
        Xero User Interface
      </Text>
      <Text size="large">Design system for beautiful business</Text>
      <Grid>
        <Link href="xero/flexibility">
          Navigating flexibility in the design system
        </Link>
        <Link href="xero/deconstructing-intent">
          Deconstructing the intent of your design
        </Link>
        <Link href="xero/principles">
          Experience design principles for cohesive decision making
        </Link>
        <Link href="xero/figma-plugin">
          Bringing documentation and tools to Figma
        </Link>
      </Grid>
    </>
  )
}

export default Xero
