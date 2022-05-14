import { NextPage } from 'next'

import Button from '@/components/Button'

import { GetStaticProps } from './_app'

export const FourZeroFour: NextPage = () => {
  return (
    <>
      <h1>404</h1>
      <p>
        This page doesn’t exist. Try heading back home to start from the
        beginning.
      </p>
      <Button href={'/'}>← Back to home.</Button>
    </>
  )
}

export default FourZeroFour

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: '404',
    },
  }
}
