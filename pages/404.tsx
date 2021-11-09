import cn from 'classnames'

import Button from '@/components/Button'

import { GetStaticProps } from './_app'

export default function Home() {
  return (
    <>
      <h1>404</h1>
      <p className={cn('pb-4')}>
        This page doesn’t exist. Try heading back home to start from the
        beginning.
      </p>
      <Button className={cn('underlines')} href={'/'}>
        ← Back to home.
      </Button>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: '404',
    },
  }
}
