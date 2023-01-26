import NextLink from 'next/link'
import { NextSeo } from 'next-seo'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Nav'
import { styled } from '@/styles'

const Container = styled('div', {
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
})

const Main = styled('main', {
  gridArea: 'content',
  margin: 16,
  maxWidth: 'calc(100vw - 32px)',
})

const Skiplink = styled(NextLink, {
  position: 'absolute',
  top: 0,
  left: 0,
  margin: '$md',
  padding: '$md',
  transform: 'translateY(calc(-100% - 32px))',
  zIndex: '$4',
  borderRadius: '$md',
  color: '$surface',
  backgroundColor: '$interactive',
  boxShadow: '$md',
  transition: '$md',

  '&:focus': {
    transform: 'translateY(16px)',
  },
})

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  hideNav?: boolean
  children?: React.ReactNode
}

export const Page = ({ hideNav, title, children, ...rest }: Props) => {
  return (
    <>
      <Skiplink href="#main" tabIndex={0}>
        Skip to main content
      </Skiplink>

      <Container>
        <NextSeo title={title} />
        <Header />
        {!hideNav && <Navigation />}

        <Main id="main" data-testid="main" {...rest}>
          {children}
        </Main>
        <Footer />
      </Container>
    </>
  )
}
