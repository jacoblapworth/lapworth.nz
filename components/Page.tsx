import React from 'react'

import { NextSeo } from 'next-seo'
import Link from 'next/link'

import Header from '@/components/Header'
import { styled, theme } from '@/styles'

import Footer from './Footer'
import Nav from './Nav'

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
  margin: '$md',
  maxWidth: 'calc(100vw - $md * 2)',
})

const Skiplink = styled('a', {
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

interface Props {
  hideNav?: boolean
  children?: React.ReactNode
}

const Page = ({
  hideNav,
  className,
  title,
  children,
  ...rest
}: Props & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <>
      <Link href="#main" passHref>
        <Skiplink tabIndex={0}>Skip to main content</Skiplink>
      </Link>
      <Container>
        <NextSeo title={title} />
        <Header />
        {!hideNav && <Nav />}

        <Main id="main" data-testid="main" {...rest}>
          {children}
        </Main>
        <Footer />
      </Container>
    </>
  )
}

export default Page
