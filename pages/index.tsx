import { styled } from '@/styles'
import { GetStaticProps } from 'next'

const Container = styled('div', {})

const Text = styled('div', {
  fontSize: 500,
  fontFamily: '$display',
  overflowX: 'scroll',
  whiteSpace: 'nowrap',
})

export default function Home() {
  return (
    <Container>
      <Text>Jacob</Text>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  }
}
