import NextImage from 'next/image'

import { css } from '@/styled/css'
import { styled } from '@/styled/jsx'

const Container = styled('div', {
  base: {
    display: 'grid',
    gridTemplate: '1/1',
    height: 602,
    justifyItems: 'stretch',
    // width: '298',
    // height: '100%',
    maxWidth: 298,
    overflow: 'hidden',
    placeContent: 'center',
    placeItems: 'center',
    position: 'relative',
    // maxHeight: 'clamp(450px, 50vh, 600px)',
  },
})

const Screen = styled('div', {
  base: {
    backgroundClip: 'border-box',
    borderRadius: '8vmin',
    clip: 'auto',
    gridArea: 'container',
    // gridTemplate: 'container',
    // width: '100%',
    // height: '100%',
    // display: 'block',
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // marginTop: 10,
    // marginLeft: 10,
    // padding: 10,
    // width: '100%',
    // height: '100%',
    // width: 278,
    // height: 582,
    // padding: 10,
    margin: 5,
    overflow: 'hidden',
    zIndex: 2,
  },
})

const Device = styled('div', {
  base: {
    gridArea: 'container',
    zIndex: 3,
    // width: '100%',
    // height: 'auto',
    // display: 'block',
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // width: 298,
    // height: 602,
  },
})

const Shadow = styled('div', {
  base: {
    gridArea: 'container',
    zIndex: 1,
    // display: 'block',
    // position: 'absolute',
    // left: -199,
    // top: -27,
    // height: 776,
    // width: 696,
  },
})

const styles = css({
  height: 'auto',
  maxWidth: '100%',
  objectFit: 'contain',
  // gridArea: '1/1',
  // width: '100%',
  // height: 'auto',
  // objectFit: 'contain',
  // width: '100% !important',
  // position: 'relative !important',
  // height: 'unset !important',
})

const Glass = () => {
  return (
    <Container>
      <Screen>
        <NextImage
          src="/static/glass/share_screen__esashqzqkwa6_medium_2x.jpg"
          alt="Screenshot"
          width="298"
          height="602"
          className={styles}
        />
      </Screen>
      <Device>
        <NextImage
          src="/static/glass/iphone_hardware_zoomed__flki3nqhzhqq_medium_2x.png"
          alt=""
          width="298"
          height="602"
          className={styles}
        />
      </Device>
      <Shadow>
        <NextImage
          src="/static/glass/iphone_shadow_zoomed__cb8yk1kh8qly_medium_2x.png"
          alt=""
          width="696"
          height="776"
          className={styles}
        />
      </Shadow>
    </Container>
  )
}

export default Glass
