import NextImage from 'next/image'

import { styled, css } from '../../styles'

const Container = styled('div', {
  // width: '298',
  // height: '100%',
  maxWidth: 298,
  height: 602,
  position: 'relative',
  display: 'grid',
  gridTemplate: '1/1',
  placeItems: 'center',
  placeContent: 'center',
  justifyItems: 'stretch',
  overflow: 'hidden',
  // maxHeight: 'clamp(450px, 50vh, 600px)',
})

const Screen = styled('div', {
  zIndex: 2,
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
  borderRadius: '8vmin',
  backgroundClip: 'border-box',
  clip: 'auto',
  overflow: 'hidden',
})

const Device = styled('div', {
  zIndex: 3,
  gridArea: 'container',
  // width: '100%',
  // height: 'auto',
  // display: 'block',
  // position: 'absolute',
  // top: 0,
  // left: 0,
  // width: 298,
  // height: 602,
})

const Shadow = styled('div', {
  zIndex: 1,
  gridArea: 'container',
  // display: 'block',
  // position: 'absolute',
  // left: -199,
  // top: -27,
  // height: 776,
  // width: 696,
})

const styles = css({
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
          className={styles()}
          style={{
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </Screen>
      <Device>
        <NextImage
          src="/static/glass/iphone_hardware_zoomed__flki3nqhzhqq_medium_2x.png"
          alt=""
          width="298"
          height="602"
          className={styles()}
          style={{
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </Device>
      <Shadow>
        <NextImage
          src="/static/glass/iphone_shadow_zoomed__cb8yk1kh8qly_medium_2x.png"
          alt=""
          width="696"
          height="776"
          className={styles()}
          style={{
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </Shadow>
    </Container>
  )
}

export default Glass
