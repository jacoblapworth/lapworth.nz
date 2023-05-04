import NextImage from 'next/image'

import { PillLink } from '@/components/Button'
import { SkewTile } from '@/components/Tile'
import { Text } from '@/components/Typography'
import logo from '@/public/static/work/xero/logo.svg'
import { styled, darkTheme } from '@/styles'

import { Highlight } from './Highlight'

const Layout = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingBlock: '$lg',
  paddingInline: '$md',
  maxWidth: '75ch',
})

const Footer = styled('div', {
  margin: '$md',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
})

export const XeroTile = () => {
  return (
    <SkewTile
      css={{
        gridColumn: '1/-1',
        '@sm': {
          gridColumn: '1/7',
        },

        '@lg': {
          gridColumn: '1/5',
        },

        backgroundColor: '#fff',
        // borderColor: '#d8eeee',
        [`.${darkTheme} &`]: {
          backgroundColor: '#111e2b',
        },
      }}
      shineCss={{
        mixBlendMode: 'multiply',
        backgroundColor: '#BBF3FD',
        [`.${darkTheme} &`]: {
          mixBlendMode: 'soft-light',
        },
      }}
    >
      <NextImage
        alt="Xero logo"
        height={48}
        width={48}
        src={logo}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
      <Layout>
        <Text display size="large" role="text">
          <Highlight>Scaling</Highlight> the design system
          <wbr /> at&nbsp;Xero
        </Text>
        <Text size="medium">
          Understanding teams’ needs and building tools and processes to support
          them.
        </Text>
      </Layout>
      <Footer>
        <PillLink href="/work/xero">View</PillLink>
      </Footer>
    </SkewTile>
  )
}
