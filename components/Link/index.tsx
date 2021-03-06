interface Props {
  children?: React.ReactNode
  href?: string
  sameTab?: boolean
}

const Link: React.FC<Props> = ({ children, href, sameTab, ...rest }) => {
  const target = sameTab ? '' : '_blank'
  return (
    <a target={target} rel="noopener noreferrer" href={href} {...rest}>
      {children}
    </a>
  )
}

export default Link
