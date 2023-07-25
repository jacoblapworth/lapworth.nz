'use client'

import { Link } from '@/components/Link'
import { styled } from '@/styled-system/jsx'

import { Text } from '../../components/Typography'

interface ExperienceRowProps {
  title?: string
  workplace: string
  href: string
  location?: string
  from: string
  to: string
  isCurrent?: boolean
}

const Column = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
})

const Row = styled('div', {
  base: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
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

export const Experience = () => {
  return (
    <div>
      <Text as="h2" size="large" display>
        Experience
      </Text>
      <Stack>
        <ExperienceRow
          workplace="Xero"
          href="https://www.xero.com/nz/"
          from="2020"
          to="Present"
        />
        <ExperienceRow
          workplace="Vend"
          href="https://www.vendhq.com/nz/"
          from="2019"
          to="2020"
        />
        <ExperienceRow
          workplace="Timely"
          href="https://www.gettimely.com/"
          from="2018"
          to="2019"
        />
        <ExperienceRow
          workplace="Trade Me"
          href="https://www.trademe.co.nz/a/"
          from="2016"
          to="2018"
        />
      </Stack>
    </div>
  )
}
