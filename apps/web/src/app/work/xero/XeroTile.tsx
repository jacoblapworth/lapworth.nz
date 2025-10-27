'use client'

import NextImage, { type StaticImageData } from 'next/image'
import { LinkButton } from '@/components/Button'
import { SkewTile } from '@/components/Tile'
import { Text } from '@/components/text'
import { css } from '@/styled/css'
import { styled } from '@/styled/jsx'
import { Highlight } from './Highlight'
import logo from './logo.svg'

const Layout = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '75ch',
    paddingBlock: 'lg',
    paddingInline: 'md',
  },
})

const Footer = styled('div', {
  base: {
    alignItems: 'end',
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'md',
  },
})

export const XeroTile = () => {
  return (
    <SkewTile
      className={css({
        _dark: {
          backgroundColor: '#111e2b',
        },

        backgroundColor: '#fff',
        borderColor: '#d8eeee',
        gridColumn: '1/-1',

        lg: {
          gridColumn: '1/5',
        },
        sm: {
          gridColumn: '1/7',
        },
      })}
      shineClassName={css({
        _dark: {
          mixBlendMode: 'soft-light',
        },
        backgroundColor: '#BBF3FD',
        mixBlendMode: 'multiply',
      })}
    >
      <NextImage
        alt="Xero logo"
        height={48}
        src={logo as StaticImageData}
        style={{
          height: 'auto',
          maxWidth: '100%',
        }}
        width={48}
      />
      <Layout>
        <Text display size="lg">
          <Highlight>Scaling</Highlight> the design system
          <wbr /> at&nbsp;Xero
        </Text>
        <Text size="md">
          Understanding teams’ needs and building tools and processes to support
          them.
        </Text>
      </Layout>
      <Footer>
        <LinkButton href="/work/xero">View</LinkButton>
      </Footer>
    </SkewTile>
  )
}
