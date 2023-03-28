import { NextPage } from 'next'
import NextImage from "next/image"
import { NextSeo } from 'next-seo'

import { Text } from '@/components/Typography'
import { GetStaticProps } from '@/pages/_app'
import Img1 from '@/public/static/work/timely/1.png'
import Img2 from '@/public/static/work/timely/2.png'
import Img3 from '@/public/static/work/timely/3.png'
import Img4 from '@/public/static/work/timely/4.png'
import { styled } from '@/styles'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Timely',
    },
  }
}

const Grid = styled('div', {
  display: 'grid',
  marginBlock: '$md',
})

export const Timely: NextPage = () => {
  return <>
    <NextSeo noindex={true} />
    <Text display size="xlarge">
      Timely
    </Text>
    <p>Consultations</p>
    <Grid>
      <NextImage
        alt=""
        src={Img1}
        placeholder="blur"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <NextImage
        alt=""
        src={Img2}
        placeholder="blur"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <NextImage
        alt=""
        src={Img3}
        placeholder="blur"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <NextImage
        alt=""
        src={Img4}
        placeholder="blur"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
    </Grid>
  </>;
}

export default Timely
