import type { AnchorHTMLAttributes } from 'react'
import { Link } from '@/components/Link'

const EXTERNAL_HREF_REGEX = /https?:\/\//

type AProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const Anchor = ({ href, ...props }: AProps) => (
  <Link
    href={href ?? ''}
    sameTab={!EXTERNAL_HREF_REGEX.test(href ?? '')}
    {...props}
  />
)
