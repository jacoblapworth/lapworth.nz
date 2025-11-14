import { useId } from 'react'
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
    isCurrent: true,
    location: 'Remote',
    title: 'Senior Product Designer',
    to: '2025',
    workplace: 'Xero',
  },
  {
    from: '2019',
    href: 'https://www.vendhq.com/nz/',
    location: 'Remote',
    title: 'Product Designer',
    to: '2020',
    workplace: 'Vend',
  },
  {
    from: '2018',
    href: 'https://www.gettimely.com/',
    location: 'Remote',
    title: 'UX Designer',
    to: '2019',
    workplace: 'Timely',
  },
  {
    from: '2016',
    href: 'https://www.trademe.co.nz/a/',
    location: 'Remote',
    title: 'Junior Designer',
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
  const id = useId()

  return (
    <Section aria-labelledby={id} rowGap="xl">
      <Text as="h2" display id={id} size="lg">
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
