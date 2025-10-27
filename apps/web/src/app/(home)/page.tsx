'use client'

import { Link } from '@/components/Link'
import { Text } from '@/components/text'
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
      <Text display size="xl">
        Kia ora 👋 Ko Jacob tōku ingoa
      </Text>
      <Text>
        <Link
          aria-label="Instagram @jacoblapworth"
          href="https://instagram.com/jacoblapworth"
        >
          @jacoblapworth
        </Link>
        <br />
        <Link
          aria-label="Email jacob@lapworth.nz"
          href="mailto:jacob@lapworth.nz"
          sameTab
        >
          jacob@lapworth.nz
        </Link>
      </Text>
      <Text display size="xl">
        Looking for work in London
      </Text>
      <Text aria-label="GPS coordinates">-36.862600º, 174.741270º</Text>
      <Text display serif size="xl">
        Scaling design systems at <Link href="https://xero.com">Xero</Link>
      </Text>
      <HiddenLink href="https://mastodon.social/@jacoblapworth" rel="me">
        Mastodon
      </HiddenLink>
    </Container>
  )
}
