import React from 'react'

import { NextSeo } from 'next-seo'

import Header from '@/components/Header'
import { styled, theme } from '@/styles'

import Footer from './Footer'
import Nav from './Nav'

const Container = styled('div', {
  display: 'grid',
  gridTemplateRows: 'auto auto 1fr auto',
  gridTemplateColumns: 'auto',

  minHeight: '100vh',
  // maxWidth: '100vw',
})

const Main = styled('main', {
  marginBottom: 'env(safe-area-inset-bottom)',
  marginInline: 16,
  overflowX: 'auto',
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
