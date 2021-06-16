import cn from 'classnames'
import Button from '@components/Button'
import Page from '@components/Page'

export default function Home() {
  return (
    <Page className={cn('p-4')}>
      <h1>404</h1>
      <p className={cn('pb-4')}>
        This page doesn’t exist. Try heading back home to start from the
        beginning.
      </p>
      <Button className={cn('underlines')} href={'/'}>← Back to home.</Button>
    </Page>
  )
}
