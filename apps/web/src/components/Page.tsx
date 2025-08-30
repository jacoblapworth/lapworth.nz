'use client'

import { ThemeProvider } from 'next-themes'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Nav'
import { styled } from '@/styled/jsx'

import { Skiplink } from './Skiplink'
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

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  hideNav?: boolean
  children?: React.ReactNode
}

/**
 * Page layout with nav and footer
 * @deprecated this is now implemented directly in the app layout
 */
export function Page({ hideNav, children, ...rest }: Props) {
  return (
    <ThemeProvider {...themeConfig}>
      <Skiplink href="#main" tabIndex={0} data-testid="skip-link">
        Skip to main content
      </Skiplink>

      <Container>
        <Header />
        {!hideNav && <Navigation />}
        <Main id="main" {...rest}>
          {children}
        </Main>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}
