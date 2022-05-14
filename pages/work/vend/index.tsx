import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import NextImage from 'next/image'

import Text from '@/components/Text'
import { GetStaticProps } from '@/pages/_app'
import Img1 from '@/public/static/work/vend/1.png'
import Img2 from '@/public/static/work/vend/2.png'
import Img3 from '@/public/static/work/vend/3.png'
import { styled } from '@/styles'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Vend',
    },
  }
}

const Grid = styled('div', {
  display: 'grid',
  marginBlock: '$md',
})

export const Vend: NextPage = () => {
  return (
    <>
      <NextSeo noindex={true} />
      <Text display size="xlarge">
        Vend
      </Text>
      <p>Point of sale</p>
      <Grid>
        <NextImage src={Img1} placeholder="blur" />
        <NextImage src={Img2} placeholder="blur" />
        <NextImage src={Img3} placeholder="blur" />
      </Grid>
    </>
  )
}

export default Vend
