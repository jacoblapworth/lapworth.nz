import React from 'react'

import { NextSeo } from 'next-seo'

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
  marginInline: 16,
  maxWidth: 'calc(100vw - 32px)',
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
    <Container>
      <NextSeo title={title} />

      <Header />
      {!hideNav && <Nav />}

      <Main {...rest}>{children}</Main>
      <Footer />
    </Container>
  )
}

export default Page
