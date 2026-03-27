'use cache'

import { cacheLife } from 'next/cache'
import { Link } from '@/components/link'
import { Text } from '@/components/text'
import { styled } from '@/styled/jsx'

const Container = styled('div', {
  base: {
    alignItems: 'start',
    display: 'flex',
    flexDirection: 'column',
    gap: '2xl',
    maxWidth: '100vw',
    paddingBlock: '2xl',
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

export default async function Page() {
  cacheLife('max')
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
        Available for work in London
      </Text>
      <Text aria-label="GPS coordinates">
        <Link href="https://www.google.com/maps?q=51.548161,-0.075587">51.548161º, -0.075587º</Link>
      </Text>
      <Text display serif size="xl">
        Crafting private banking experiences at <Link href="https://www.coutts.com">Coutts</Link>
      </Text>
      <HiddenLink href="https://mastodon.social/@jacoblapworth" rel="me">
        Mastodon
      </HiddenLink>
    </Container>
  )
}
