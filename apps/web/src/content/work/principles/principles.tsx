'use client'

import { MDXProvider } from '@mdx-js/react'
import type { NextPage } from 'next'
import NextImage, { type StaticImageData } from 'next/image'
import { MDXRemote } from 'next-mdx-remote'

// import { images } from '@/app/work/xero/images'
import { Text } from '@/components/Typography'
import type { MDXPageProps } from '@/lib/markdown'
import disciplines from '@/public/work/xero/principles-disciplines.webp'
import worldMap from '@/public/work/xero/principles-world-map.svg'
import worldMapDark from '@/public/work/xero/principles-world-map-dark.svg'
import { styled } from '@/styled/jsx'

export function Principles() {
  const Container = styled('div', {
    base: {
      _selection: {
        backgroundColor: 'background',
        color: 'primary',
      },
      display: 'grid',
      gap: 'lg',
      gridAutoColumns: '1fr',
      gridAutoFlow: 'column',
      justifyItems: 'stretch',
    },
  })

  const Card = styled('div', {
    base: {
      alignItems: 'center',
      backgroundColor: '#002A46',
      borderRadius: 'lg',
      color: '#fff',
      display: 'grid',
      gridTemplateRows: '1fr min-content',
      justifyContent: 'center',
      minHeight: '20rem',
      padding: 'lg',
      textAlign: 'center',
    },
  })

  const principles = [
    {
      means: [
        'Think about my context (place, time, device, business type, accessibility needs)',
        'Think about my experience level(with Xero, accounting, running a small business) ',
        'Understand the problems I care about right now',
      ],
      outcome: 'Always feeling like ‘Xero is for me’',
      title: 'Meet me where I am at',
      value: 1,
      watch: [
        'Over-indexing on flexibility that results in paradox of choice and unnecessary complexity',
        'Biases and assumptions',
      ],
    },
    {
      means: [
        'Be familiar, predictable and reliable',
        'Connect my data and my tools seamlessly',
        'Reduce manual work',
      ],
      outcome: 'I feel efficient’',
      title: 'Remove friction',
      value: 2,
      watch: [
        'Efficiency at the cost of accuracy or not providing key information',
        'Consistency at the cost of utility and usability',
      ],
    },
    {
      means: [
        'Reveal what I need, when I need it',
        'Do not overwhelm me with complexity',
        'Don’t distract me with irrelevant noise',
      ],
      outcome: 'My time feels valued',
      title: 'Honour my attention',
      value: 3,
      watch: ['Omitting useful content for simplicity sake'],
    },
    {
      means: [
        'Be an approachable expert',
        'Help me understand my actions and their consequences',
        'Be appropriately transparent',
        'Make change embraceable',
      ],
      outcome:
        'I have shifted from uncertainty and confusion, to confidence and clarity',
      title: 'Help me feel in control',
      value: 4,
      watch: [
        'Black box experiences that lack the transparency required for feeling in control',
      ],
    },
    {
      means: [
        'Turn up in the right way, at the right time',
        'Provide deep delight',
        'Help the user focus on meaningful and thoughtful details',
      ],
      outcome: 'I am a passionate Xero customer',
      title: 'Be memorable for the right reasons',
      value: 5,
      watch: [
        'Superficial decoration or delight that hinders the task at hand',
        'Injecting marketing assets and tone of voice into product',
        'Perfectionism over progress',
      ],
    },
  ]

  return (
    <Container>
      {principles.map(({ value, title, means, outcome, watch }) => (
        <Card key={value}>
          <Text display size="md" css={{ color: 'background' }}>
            {title}
          </Text>
          <Text size="sm" css={{ color: 'background' }}>
            Principle {value}
          </Text>
          <ul>
            {means.map((mean) => (
              <li key={mean}>{mean}</li>
            ))}
          </ul>
          <Text>{outcome}</Text>
          <ul>
            {watch.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      ))}
    </Container>
  )
}

export function Disciplines() {
  // const values = [{name: "Design", value: }]
  const Image = styled(NextImage, {
    base: {
      height: 'auto',
      width: '100%',
    },
  })

  return <Image src={disciplines} alt="" />
}

export function WorldMap() {
  const Grid = styled('div', {
    base: {
      alignItems: 'center',
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 1fr)',
      justifySelf: 'stretch',
      marginBlock: 'md',
    },
  })

  const Picture = styled('picture', {
    base: {
      // display: 'grid',
      // gridTemplateColumns: 'repeat(8, 1fr)',
      // marginBlock: 'md',
      gridColumn: '3/-1',
      gridRow: '1',
    },
  })

  const Image = styled(NextImage, {
    base: {
      height: 'auto',
      maxWidth: '100%',
    },
  })

  const Ul = styled('ul', {
    base: {
      gridColumn: '1/-1',
      gridRow: '1',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    },
  })

  return (
    <Grid>
      <Ul>
        <Text display size="md">
          8 workshops
        </Text>
        <Text display size="md">
          7 regions
        </Text>
        <Text display size="md">
          4 time zones
        </Text>
        <Text display size="md">
          68 participants
        </Text>
      </Ul>
      <Picture>
        <source
          srcSet={(worldMapDark as StaticImageData).src}
          media="(prefers-color-scheme: dark)"
        />
        <source
          srcSet={(worldMap as StaticImageData).src}
          media="(prefers-color-scheme: light)"
        />
        <Image
          src={worldMapDark as StaticImageData}
          alt="Map of world highlighting 7 locations"
        />
      </Picture>
    </Grid>
  )
}

const Grid = styled('div', {
  base: {
    display: 'grid',
    marginBlockEnd: 'lg',
    maxWidth: 1200,
    position: 'relative',
  },
})

export const Page: NextPage<MDXPageProps> = ({ source }) => {
  return (
    <MDXProvider>
      <Grid>
        <Text as="h1" display size="lg">
          {source.frontmatter?.title}
        </Text>
        <MDXRemote
          {...source}
          components={{ Disciplines, WorldMap }}
          // scope={{ images }}
        />
      </Grid>
    </MDXProvider>
  )
}

export default Page
