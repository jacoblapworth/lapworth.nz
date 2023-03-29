import NextImage from 'next/image'

import { Text } from '@/components/Typography'
import disciplines from '@/public/static/work/xero/principles-disciplines.webp'
import worldMapDark from '@/public/static/work/xero/principles-world-map-dark.svg'
import worldMap from '@/public/static/work/xero/principles-world-map.svg'
import { styled } from '@/styles'

export function Principles() {
  const Container = styled('div', {
    display: 'grid',
    gridAutoFlow: 'column',
    gridAutoColumns: '1fr',
    gap: '$lg',
    justifyItems: 'stretch',

    '::selection': {
      backgroundColor: '$background',
      color: '$primary',
    },
  })

  const Card = styled('div', {
    display: 'grid',
    gridTemplateRows: '1fr min-content',
    color: '#fff',
    borderRadius: '$lg',
    backgroundColor: '#002A46',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '20rem',
    textAlign: 'center',
    padding: '$lg',
  })

  const principles = [
    {
      value: 1,
      title: 'Meet me where I am at',
      means: [
        'Think about my context (place, time, device, business type, accessibility needs)',
        'Think about my experience level(with Xero, accounting, running a small business) ',
        'Understand the problems I care about right now',
      ],
      outcome: 'Always feeling like ‘Xero is for me’',
      watch: [
        'Over-indexing on flexibility that results in paradox of choice and unnecessary complexity',
        'Biases and assumptions',
      ],
    },
    {
      value: 2,
      title: 'Remove friction',
      means: [
        'Be familiar, predictable and reliable',
        'Connect my data and my tools seamlessly',
        'Reduce manual work',
      ],
      outcome: 'I feel efficient’',
      watch: [
        'Efficiency at the cost of accuracy or not providing key information',
        'Consistency at the cost of utility and usability',
      ],
    },
    {
      value: 3,
      title: 'Honour my attention',
      means: [
        'Reveal what I need, when I need it',
        'Do not overwhelm me with complexity',
        'Don’t distract me with irrelevant noise',
      ],
      outcome: 'My time feels valued',
      watch: ['Omitting useful content for simplicity sake'],
    },
    {
      value: 4,
      title: 'Help me feel in control',
      means: [
        'Be an approachable expert',
        'Help me understand my actions and their consequences',
        'Be appropriately transparent',
        'Make change embraceable',
      ],
      outcome:
        'I have shifted from uncertainty and confusion, to confidence and clarity',
      watch: [
        'Black box experiences that lack the transparency required for feeling in control',
      ],
    },
    {
      value: 5,
      title: 'Be memorable for the right reasons',
      means: [
        'Turn up in the right way, at the right time',
        'Provide deep delight',
        'Help the user focus on meaningful and thoughtful details',
      ],
      outcome: 'I am a passionate Xero customer',
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
          <Text display size="medium" css={{ color: '$background' }}>
            {title}
          </Text>
          <Text size="small" css={{ color: '$background' }}>
            Principle {value}
          </Text>
        </Card>
      ))}
    </Container>
  )
}

export function Disciplines() {
  // const values = [{name: "Design", value: }]
  const Image = styled(NextImage, {
    width: '100%',
    height: 'auto',
  })
  return <Image src={disciplines} alt="" />
}

export function WorldMap() {
  const Grid = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    marginBlock: '$md',
    alignItems: 'center',
    justifySelf: 'stretch',
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
