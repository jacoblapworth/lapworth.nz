import { NextPage } from 'next'

import { Button } from '@/components/Button'
import { Text } from '@/components/Typography'

import { GetStaticProps } from './_app'

export const FourZeroFour: NextPage = () => {
  return (
    <>
      <Text as="h1" display size="xlarge">
        404
      </Text>
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
