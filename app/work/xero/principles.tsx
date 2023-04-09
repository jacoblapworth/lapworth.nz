import { MDXProvider } from '@mdx-js/react'
import { NextPage } from 'next'
import NextImage from 'next/image'
import { MDXRemote } from 'next-mdx-remote'

import { Text } from '@/components/Typography'
import { images } from '@/components/Work/Xero'
import { MDXPageProps, prepareMDX } from '@/lib/markdown'
import disciplines from '@/public/static/work/xero/principles-disciplines.webp'
import worldMapDark from '@/public/static/work/xero/principles-world-map-dark.svg'
import worldMap from '@/public/static/work/xero/principles-world-map.svg'
import { styled } from '@/styles'

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

const Grid = styled('div', {
  display: 'grid',
  maxWidth: 1200,
  position: 'relative',
  marginBlockEnd: '$lg',
})

export const Page: NextPage<MDXPageProps> = ({ source }) => {
  return (
    <MDXProvider>
      <Grid>
        <Text as="h1" display size="large">
          {source.frontmatter?.title}
        </Text>
        <MDXRemote
          {...source}
          components={{ WorldMap, Disciplines }}
          scope={{ images }}
        />
      </Grid>
    </MDXProvider>
  )
}

export default Page
