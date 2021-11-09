import NextImage from 'next/image'

import { css } from '@/styles'

import { GetStaticProps } from './_app'

const Profile = css('div', {
  borderRadius: '60px',
})

export default function Home() {
  return (
    <>
      <NextImage
        src="/static/j-photo-mono.png"
        height={128}
        width={128}
        className={Profile()}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      title: 'About',
    },
  }
}
