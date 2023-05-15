import { NextPage } from 'next'
import NextImage from 'next/image'

import { Text } from '@/components/Typography'
import Img1 from '@/public/static/work/trademe/1.png'
import Img2 from '@/public/static/work/trademe/2.png'
import Img3 from '@/public/static/work/trademe/3.gif'
import { styled } from '@/styles'

const Grid = styled('div', {
  display: 'grid',
  marginBlock: '$md',
})

export const TradeMe: NextPage = () => {
  return (
    <>
      <Text display size="xlarge">
        Trade Me
      </Text>
      <p>Online marketplace</p>
      <Grid>
        <NextImage
          alt=""
          src={Img1}
          placeholder="blur"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <NextImage
          alt=""
          src={Img2}
          placeholder="blur"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <NextImage
          alt=""
          src={Img3}
          placeholder="blur"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </Grid>
    </>
  )
}

export default TradeMe
