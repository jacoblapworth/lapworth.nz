import { NextPage } from 'next'
import NextImage from 'next/image'
import { NextSeo } from 'next-seo'

import { Text } from '@/components/Typography'
import { GetStaticProps } from '@/pages/_app'
import disciplines from '@/public/static/work/xero/principles-disciplines.webp'
import worldMapDark from '@/public/static/work/xero/principles-world-map-dark.svg'
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

function Disciplines() {
  // const values = [{name: "Design", value: }]
  return <NextImage src={disciplines} alt="" />
}

function WorldMap() {
  const Grid = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    marginBlock: '$md',
    alignItems: 'center',
  })

  const Picture = styled('picture', {
    // display: 'grid',
    // gridTemplateColumns: 'repeat(8, 1fr)',
    // marginBlock: '$md',
    gridColumn: '3/-1',
    gridRow: '1',
  })

  const Image = styled(NextImage, {
    maxWidth: '100%',
    height: 'auto',
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
      <Picture>
        <source
          srcSet={worldMapDark.src}
          media="(prefers-color-scheme: dark)"
        />
        <source srcSet={worldMap.src} media="(prefers-color-scheme: light)" />
        <Image src={worldMapDark} alt="Map of world highlighting 7 locations" />
      </Picture>
    </Grid>
  )
}

const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
})

const Row = styled('div', {
  gridColumn: '1 / -1',
  '@sm': {
    gridColumn: '1 / -1',
  },

  '@lg': {
    gridColumn: '1 / -3',
  },
})

export const Xero: NextPage = () => {
  return (
    <Container>
      <NextSeo noindex={true} />
      <Row>
        <Text as="h2" display size="large">
          Xero Experience Design Principles
        </Text>
      </Row>
      <Row>
        <p>
          Design involves problem-solving, storytelling, and the development of
          engaging experiences that go beyond aesthetic appeal, all of which are
          critical elements. Constructing a unified Design System heavily relies
          on the establishment of design principles.
        </p>
        <p>
          To ensure an outstanding user experience for Xero&apos;s customers, we
          collaborated with cross-disciplinary teams to co-create the Experience
          Design Principles. Our aim was to create a comprehensive set of
          principles that would guide our teams day-to-day design decisions.
        </p>
      </Row>
      <Row>
        <WorldMap />
      </Row>
      <Row>
        <Disciplines />
      </Row>
    </Container>
  )
}

export default Xero
