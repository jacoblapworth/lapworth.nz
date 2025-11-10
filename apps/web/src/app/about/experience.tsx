import { useId } from 'react'
import { Link } from '@/components/link'
import { Section } from '@/components/section'
import { Text } from '@/components/text'
import { styled } from '@/styled/jsx'

interface ExperienceRowProps {
  title?: string
  workplace: string
  href: string
  location?: string
  from: string
  to: string
  isCurrent?: boolean
}

const experience = [
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

const Column = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
})

const Row = styled('div', {
  base: {
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: '1fr 1fr',
    placeItems: 'start',
  },
})

const ExperienceRow = ({ workplace, from, to, href }: ExperienceRowProps) => {
  return (
    <Row>
      <Link href={href}>{workplace}</Link>
      <Column>
        <div>{from}</div>
        <div>— {to}</div>
      </Column>
    </Row>
  )
}

const Stack = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'md',
    gridColumn: '1 / -1',
    justifyContent: 'space-between',
    maxWidth: '12rem',
  },
})

export function Experience() {
  const id = useId()

  return (
    <Section aria-labelledby={id}>
      <Text as="h2" display id={id} size="lg">
        Experience
      </Text>
      <Stack>
        {experience.map((item) => (
          <ExperienceRow
            from={item.from}
            href={item.href}
            key={item.workplace}
            to={item.to}
            workplace={item.workplace}
          />
        ))}
      </Stack>
    </Section>
  )
}
