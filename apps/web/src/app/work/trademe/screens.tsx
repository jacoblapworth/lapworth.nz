import type { NextPage } from 'next'
import NextImage from 'next/image'

import { Text } from '@/components/Typography'
import Img1 from '@/public/work/trademe/1.png'
import Img2 from '@/public/work/trademe/2.png'
import Img3 from '@/public/work/trademe/3.gif'
import { styled } from '@/styled/jsx'

const Grid = styled('div', {
  base: {
    display: 'grid',
    marginBlock: 'md',
  },
})

export const TradeMe: NextPage = () => {
  return (
    <>
      <Text display size="xl">
        Trade Me
      </Text>
      <p>Online marketplace</p>
      <Grid>
        <NextImage
          alt=""
          placeholder="blur"
          src={Img1}
          style={{
            height: 'auto',
            maxWidth: '100%',
          }}
        />
        <NextImage
          alt=""
          placeholder="blur"
          src={Img2}
          style={{
            height: 'auto',
            maxWidth: '100%',
          }}
        />
        <NextImage
          alt=""
          placeholder="blur"
          src={Img3}
          style={{
            height: 'auto',
            maxWidth: '100%',
          }}
        />
      </Grid>
    </>
  )
}

export default TradeMe
