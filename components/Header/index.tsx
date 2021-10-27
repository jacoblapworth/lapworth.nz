import Link from 'next/link'

import { styled } from '@/styles'

import ThemeToggle from '../ThemeToggle'

const Heading = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: 'env(safe-area-inset-left)',
  padding: '$md',
})

const Text = styled('div', {
  fontWeight: 500,
})

const Header = () => {
  return (
    <Heading>
      <Link href="/">
        <a>
          <Text>
            Lapworth,
            <em> Jacob</em>
          </Text>
        </a>
      </Link>

      <ThemeToggle />
    </Heading>
  )
}

export default Header
