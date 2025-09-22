'use client'

import { Link } from '@/components/Link'
import { Text } from '@/components/Typography'
import { styled } from '@/styled/jsx'

const Container = styled('div', {
  base: {
    maxWidth: '100vw',
    sm: {
      maxWidth: '75vw',
    },
  },
})

const HiddenLink = styled(Link, {
  base: {
    display: 'none',
  },
})

export default function Page() {
  return (
    <Container>
      <Text size="xl" display>
        Kia ora 👋 Ko Jacob tōku ingoa
      </Text>
      <Text>
        <Link
          href="https://instagram.com/jacoblapworth"
          aria-label="Instagram @jacoblapworth"
        >
          @jacoblapworth
        </Link>
        <br />
        <Link
          sameTab
          href="mailto:jacob@lapworth.nz"
          aria-label="Email jacob@lapworth.nz"
        >
          jacob@lapworth.nz
        </Link>
      </Text>
      <Text size="xl" display>
        Looking for work in London
      </Text>
      <Text aria-label="GPS coordinates">-36.862600º, 174.741270º</Text>
      <Text size="xl" display serif>
        Scaling design systems at <Link href="https://xero.com">Xero</Link>
      </Text>
      <HiddenLink rel="me" href="https://mastodon.social/@jacoblapworth">
        Mastodon
      </HiddenLink>
    </Container>
  )
}
