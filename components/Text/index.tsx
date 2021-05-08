import CN from 'classnames'

type TextVariant = 'small' | 'large'

interface Props {
  children?: React.ReactNode
  variant: TextVariant
}

const Text = ({ children, variant, ...rest }: Props) => {
  return (
    <div
      className={CN('font-bold', 'text-gray-800', 'm-8', {
        '': variant == 'small',
        'text-5xl md:text-6xl lg:text-7xl': variant == 'large',
      })}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Text
