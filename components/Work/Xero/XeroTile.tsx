import { FC } from 'react'

import NextImage from "next/image"
import NextLink from 'next/link'

import { ArrowIcon } from '@/components/Icons'
import { SkewTile } from '@/components/Tile'
import { Text } from '@/components/Typography'
import logo from '@/public/static/work/xero/logo.svg'
import { styled, darkTheme, lightTheme } from '@/styles'

import { Highlight } from './Highlight'

interface XeroTileProps {}

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

const IconButton = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 24px',
  gap: '4px',
  alignItems: 'center',
  color: '$tertiary',
  paddingBlock: 4,
  paddingInline: 8,
  borderRadius: '$max',

  '&:hover': {
    backgroundColor: '$surface',
  },
})

const Link = styled(NextLink, {
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '$lg',
  gridColumn: '1/ -1',
  [`.${lightTheme} &`]: {
    backgroundColor: '#BBF3FD',
  },
  [`.${darkTheme} &`]: {
    backgroundColor: '#213B55',
  },
  position: 'relative',
  border: '3px solid transparent',

  '&:hover': {
    borderColor: '#13B5EA',
    textDecoration: 'none',
  },
})

export const XeroTile: FC<XeroTileProps> = ({}) => {
  return (
    <Link href="/work/xero">
      <Layout>
        <Text display size="xlarge">
          <Highlight>Scaling</Highlight> the design system at Xero
        </Text>
      </Layout>
      <Footer>
        <NextImage
          alt="Xero logo"
          height={48}
          width={48}
          src={logo}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
        <IconButton>
          View
          <ArrowIcon />
        </IconButton>
      </Footer>
    </Link>
  );
}

const PillLink = styled(NextLink, {
  display: 'grid',
  gridTemplateColumns: '1fr 24px',
  gap: '4px',
  alignItems: 'center',
  color: '$tertiary',
  paddingBlock: 4,
  paddingInline: 8,
  borderRadius: '$max',

  '&:hover': {
    backgroundColor: '$surface',
  },
})

export const XeroTile1 = () => {
  return (
    <SkewTile
      css={{
        gridColumn: '1/-1',
        '@sm': {
          gridColumn: '1/7',
        },

        backgroundColor: '#fff',
        borderColor: '#d8eeee',
        [`.${darkTheme} &`]: {
          backgroundColor: '#111e2b',
          borderColor: '#414a66',
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
      <Layout>
        <Text display size="large">
          <Highlight>Scaling</Highlight> the design system at Xero
        </Text>
      </Layout>
      <Footer>
        <NextImage
          alt="Xero logo"
          height={48}
          width={48}
          src={logo}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
        <PillLink href="/work/xero">
          View
          <ArrowIcon />
        </PillLink>
      </Footer>
    </SkewTile>
  );
}
