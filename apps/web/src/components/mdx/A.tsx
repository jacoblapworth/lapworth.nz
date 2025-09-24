import type { AnchorHTMLAttributes } from 'react'
import { Link } from '@/components/Link'

type AProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const a = ({ href, ...props }: AProps) => (
  <Link href={href ?? ''} {...props} />
)
