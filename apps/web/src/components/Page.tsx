'use client'

import { ThemeProvider } from 'next-themes'
import { useId } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Nav/Nav'
import { styled } from '@/styled/jsx'
import { Skiplink } from './Skiplink'
import { themeConfig } from './Theme'

const Container = styled('div', {
  base: {
    display: 'grid',
    gridTemplateAreas: '"header" "nav" "content" "footer"',
    gridTemplateColumns: 'auto',
    gridTemplateRows: 'auto auto 1fr auto',
    // minHeight: '-webkit-fill-available',
    marginLeft: 'env(safe-area-inset-left)',
    marginRight: 'env(safe-area-inset-right)',
    maxWidth: '100%',
    minHeight: 'calc(100vh - env(safe-area-inset-bottom))',
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
  const id = useId()
  return (
    <ThemeProvider {...themeConfig}>
      <Skiplink href={`#${id}`} tabIndex={0}>
        Skip to main content
      </Skiplink>

      <Container>
        <Header />
        {!hideNav && <Navigation />}
        <Main id={id} tabIndex={0} {...rest}>
          {children}
        </Main>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}
