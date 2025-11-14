import { Link } from '@/components/link'
import { Section } from '@/components/section'
import { Text } from '@/components/text'
import { Grid, VStack } from '@/styled/jsx'

interface ExperienceRowProps {
  title?: string
  workplace: string
  href: string
  location?: string
  from: string
  to: string
  isCurrent?: boolean
}

const experience: ExperienceRowProps[] = [
  {
    from: '2020',
    href: 'https://www.xero.com/nz/',
    to: '2025',
    workplace: 'Xero',
  },
  {
    from: '2019',
    href: 'https://www.vendhq.com/nz/',
    to: '2020',
    workplace: 'Vend',
  },
  {
    from: '2018',
    href: 'https://www.gettimely.com/',
    to: '2019',
    workplace: 'Timely',
  },
  {
    from: '2016',
    href: 'https://www.trademe.co.nz/a/',
    to: '2018',
    workplace: 'Trade Me',
  },
]

function ExperienceRow({ workplace, from, to, href }: ExperienceRowProps) {
  return (
    <Grid gap="md" gridColumn="1/-1" gridTemplateColumns="subgrid">
      <Link href={href}>{workplace}</Link>
      <VStack alignItems="start" gap={0}>
        <div>{from}</div>
        <div>— {to}</div>
      </VStack>
    </Grid>
  )
}

export function Experience() {
  return (
    <Section rowGap="xl">
      <Text as="h2" display size="lg">
        Experience
      </Text>
      <Grid
        alignItems="start"
        gap="md"
        gridTemplateColumns="1fr 1fr"
        justifyContent="space-between"
        maxWidth="12rem"
      >
        {experience.map((exp) => (
          <ExperienceRow key={exp.workplace} {...exp} />
        ))}
      </Grid>
    </Section>
  )
}
