import NextImage, { StaticImageData } from 'next/image'

import logo from '@/public/static/work/xero/logo.svg'
import { PillLink } from '@/src/components/Button'
import { SkewTile } from '@/src/components/Tile'
import { Text } from '@/src/components/Typography'
import { css } from 'styled/css'
import { styled } from 'styled/jsx'

import { Highlight } from './Highlight'

const Layout = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBlock: 'lg',
    paddingInline: 'md',
    maxWidth: '75ch',
  },
})

const Footer = styled('div', {
  base: {
    margin: 'md',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
  },
})

export const XeroTile = () => {
  return (
    <SkewTile
      className={css({
        gridColumn: '1/-1',
        sm: {
          gridColumn: '1/7',
        },

        lg: {
          gridColumn: '1/5',
        },

        backgroundColor: '#fff',
        borderColor: '#d8eeee',
        _dark: {
          backgroundColor: '#111e2b',
        },
      })}
      shineClassName={css({
        mixBlendMode: 'multiply',
        backgroundColor: '#BBF3FD',
        _dark: {
          mixBlendMode: 'soft-light',
        },
      })}
    >
      <NextImage
        alt="Xero logo"
        height={48}
        width={48}
        src={logo as StaticImageData}
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
