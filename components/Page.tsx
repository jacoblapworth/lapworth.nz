'use client'

import NextLink from 'next/link'
import { ThemeProvider } from 'next-themes'

import { styled } from 'styled/jsx'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Nav'


import { themeConfig } from './Theme'

const Container = styled('div', {
  base: {
    display: 'grid',
    gridTemplateAreas: '"header" "nav" "content" "footer"',
    gridTemplateRows: 'auto auto 1fr auto',
    gridTemplateColumns: 'auto',
    minHeight: 'calc(100vh - env(safe-area-inset-bottom))',
    // minHeight: '-webkit-fill-available',
    marginLeft: 'env(safe-area-inset-left)',
    marginRight: 'env(safe-area-inset-right)',
    maxWidth: '100%',
    overflowX: 'hidden',
  },
})

const Main = styled('main', {
  base: {
    gridArea: 'content',
    margin: 'md',
    maxWidth: 'calc(100vw - token(spacing.md) * 2)',
  },
})

const Skiplink = styled(NextLink, {
  base: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 'md',
    padding: 'md',
    transform: 'translateY(calc(-100% - 32px))',
    zIndex: '4',
    borderRadius: 'md',
    color: 'surface',
    backgroundColor: 'interactive',
    boxShadow: 'md',
    transition: 'md',

    _focus: {
      transform: 'translateY(16px)',
    },
  },
})

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  hideNav?: boolean
  children?: React.ReactNode
}

export const Page = ({ hideNav, children, ...rest }: Props) => {
  return (
    <ThemeProvider {...themeConfig}>
      <Skiplink href="#main" tabIndex={0} data-testid="skip-link">
        Skip to main content
      </Skiplink>

      <Container>
        <Header />
        {!hideNav && <Navigation />}

        <Main id="main" data-testid="main" {...rest}>
          {children}
        </Main>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}
