import { CSSProperties, FC } from 'react'

import NextImage from 'next/image'

import { css, styled } from '../../styles'
import style from './Glass.module.css'

const Container = styled('div', {
  width: 298,
  height: 602,
  // display: 'grid',
  position: 'relative',
})

const Screen = styled('div', {
  zIndex: 2,
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  // margin: 10,
  // gridArea: '1 / 1',
  marginTop: 10,
  marginLeft: 10,
  width: 278,
  height: 582,
  borderRadius: 30,
  backgroundClip: 'border-box',
  clip: 'auto',
  overflow: 'hidden',
})

const Device = styled('div', {
  zIndex: 3,
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  width: 298,
  height: 602,
})

const Shadow = styled('div', {
  zIndex: 1,
  display: 'block',
  position: 'absolute',
  left: -199,
  top: -27,
  height: 776,
  width: 696,
})

interface GlassProps {}

const Glass: FC<GlassProps> = ({}) => {
  return (
    <Container>
      <Screen>
        <NextImage
          layout="fill"
          alt=""
          width="298px"
          height="602"
          src="/static/glass/share_screen__esashqzqkwa6_medium_2x.jpg"
        />
      </Screen>
      <Device>
        <NextImage
          layout="fill"
          alt=""
          width="298"
          height="602"
          src="/static/glass/iphone_hardware_zoomed__flki3nqhzhqq_medium_2x.png"
        />
      </Device>
      <Shadow>
        <NextImage
          layout="fill"
          alt=""
          width="696"
          height="776"
          src="/static/glass/iphone_shadow_zoomed__cb8yk1kh8qly_medium_2x.png"
        />
      </Shadow>
    </Container>
  )
}

export default Glass
