import { Link } from '@/components/Link'
import { styled } from '@/styles'

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
  display: 'flex',
  flexDirection: 'column',
})

const Row = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem',
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
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  gridColumn: '1 / -1',
  justifyContent: 'space-between',
  maxWidth: '12rem',
})

export const Experience = () => {
  return (
    <Stack>
      <h2>Experience</h2>
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
  )
}
