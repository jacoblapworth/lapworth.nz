import { styled } from '@/styles'

interface Props {
  children?: React.ReactNode
  href?: string
  sameTab?: boolean
}

const A = styled('a', {
  textDecoration: 'underline',
  textDecorationColor: '$quaternary',
  '&:hover': {
    textDecoration: 'underline',
    textDecorationColor: '$interactive',
  },
})

export const Link = ({ children, href, sameTab, ...rest }: Props) => {
  const target = sameTab ? '' : '_blank'
  return (
    <A target={target} rel="noopener noreferrer" href={href} {...rest}>
      {children}
    </A>
  )
}
