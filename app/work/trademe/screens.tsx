import { NextPage } from 'next'
import NextImage from 'next/image'

import { styled } from 'styled/jsx'

import { Text } from '@/components/Typography'
import Img1 from '@/public/static/work/trademe/1.png'
import Img2 from '@/public/static/work/trademe/2.png'
import Img3 from '@/public/static/work/trademe/3.gif'


const Grid = styled('div', {
  base: {
    display: 'grid',
    marginBlock: 'md',
  },
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
