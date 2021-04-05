import Button from 'components/Button'
import Page from 'components/Page'

export default function Home() {
  return (
    <Page>
      <h1>404</h1>
      <p>
        This page doesn’t exist. Try heading back home to start from the
        beginning.
      </p>
      <Button href={'/'}>Back to home.</Button>
    </Page>
  )
}
