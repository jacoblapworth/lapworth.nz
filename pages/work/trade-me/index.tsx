import { NextSeo } from 'next-seo'
import NextImage from 'next/image'

import Text from '@/components/Text'
import { GetStaticProps } from '@/pages/_app'
import Img1 from '@/public/static/work/trade-me/1.png'
import Img2 from '@/public/static/work/trade-me/2.png'
import Img3 from '@/public/static/work/trade-me/3.gif'
import { styled } from '@/styles'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Trade Me',
    },
  }
}

const Grid = styled('div', {
  display: 'grid',
  marginBlock: '$md',
})

export default function TradeMe() {
  return (
    <>
      <NextSeo noindex={true} />
      <Text display size="xlarge">
        Trade Me
      </Text>
      <p>Online marketplace</p>
      <Grid>
        <NextImage src={Img1} />
        <NextImage src={Img2} />
        <NextImage src={Img3} />
      </Grid>
    </>
  )
}
