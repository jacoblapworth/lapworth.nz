'use client'

import NextImage from 'next/image'

import { Text } from '@/components/Typography'
import Img1 from '@/public/work/vend/1.png'
import Img2 from '@/public/work/vend/2.png'
import Img3 from '@/public/work/vend/3.png'
import { styled } from '@/styled/jsx'

const Grid = styled('div', {
  base: {
    display: 'grid',
    marginBlock: 'md',
  },
})

export default function Page() {
  return (
    <>
      <Text display size="xl">
        Vend
      </Text>
      <p>Point of sale</p>
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
