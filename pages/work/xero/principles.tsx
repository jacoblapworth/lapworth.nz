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

function WorldMap() {
  const Grid = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    marginBlock: '$md',
    alignItems: 'center',
  })

  const Image = styled(NextImage, {
    // display: 'grid',
    // gridTemplateColumns: 'repeat(8, 1fr)',
    // marginBlock: '$md',
    maxWidth: '100%',
    height: 'auto',
    gridColumn: '3/-1',
    gridRow: '1',
  })

  const Ul = styled('ul', {
    gridColumn: '1/-1',
    gridRow: '1',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  })

  return (
    <Grid>
      <Ul>
        <Text display size="medium">
          8 workshops
        </Text>
        <Text display size="medium">
          7 regions
        </Text>
        <Text display size="medium">
          4 time zones
        </Text>
        <Text display size="medium">
          68 participants
        </Text>
      </Ul>
      <Image src={worldMap} alt="Map of world highlighting 7 locations" />
    </Grid>
  )
}

export const Xero: NextPage = () => {
  return (
    <>
      <NextSeo noindex={true} />
      <Text as="h2" display size="large">
        Xero Experience Design Principles
      </Text>
      <p>Design system for beautiful business</p>

      <WorldMap />
    </>
  )
}

export default Xero
