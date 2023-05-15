'use client'

import NextImage from 'next/image'

import { Text } from '@/components/Typography'
import Img1 from '@/public/static/work/vend/1.png'
import Img2 from '@/public/static/work/vend/2.png'
import Img3 from '@/public/static/work/vend/3.png'
import { styled } from '@/styles'

const Grid = styled('div', {
  display: 'grid',
  marginBlock: '$md',
})

export default function Page() {
  return (
    <>
      <Text display size="xlarge">
        Vend
      </Text>
      <p>Point of sale</p>
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
