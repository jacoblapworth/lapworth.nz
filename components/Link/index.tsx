import { FC } from 'react'

import { styled } from '@/styles'

interface Props {
  children?: React.ReactNode
  href?: string
  sameTab?: boolean
}

const A = styled('a', {})

const Link: FC<Props> = ({ children, href, sameTab, ...rest }) => {
  const target = sameTab ? '' : '_blank'
  return (
    <A target={target} rel="noopener noreferrer" href={href} {...rest}>
      {children}
    </A>
  )
}

export default Link
