import { Link } from '@/components/link'
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

function ExperienceRow({ workplace, from, to, href }: ExperienceRowProps) {
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
  return (
    <div>
      <Text as="h2" display size="lg">
        Experience
      </Text>
      <Stack>
        <ExperienceRow
          from="2020"
          href="https://www.xero.com/nz/"
          to="2025"
          workplace="Xero"
        />
        <ExperienceRow
          from="2019"
          href="https://www.vendhq.com/nz/"
          to="2020"
          workplace="Vend"
        />
        <ExperienceRow
          from="2018"
          href="https://www.gettimely.com/"
          to="2019"
          workplace="Timely"
        />
        <ExperienceRow
          from="2016"
          href="https://www.trademe.co.nz/a/"
          to="2018"
          workplace="Trade Me"
        />
      </Stack>
    </div>
  )
}
