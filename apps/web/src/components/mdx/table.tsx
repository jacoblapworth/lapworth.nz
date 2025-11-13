import { css, cx } from '@/styled/css'

/* -----------------------------------------------------------------------------
 * Table
 * -----------------------------------------------------------------------------*/

const tableStyles = css({
  display: 'block',
  mt: { _first: '0', base: '6' },
  overflowX: 'scroll',
  p: '0',
})

export const Table = ({
  className = '',
  ...props
}: React.ComponentProps<'table'>) => (
  <table
    className={cx('nextra-scrollbar', tableStyles, className)}
    {...props}
  />
)

/* -----------------------------------------------------------------------------
 * Table Head
 * -----------------------------------------------------------------------------*/

const thStyles = css({
  borderColor: { _dark: 'gray.600', base: 'gray.300' },
  borderWidth: '1',
  fontWeight: 'semibold',
  m: '0',
  px: '4',
  py: '2',
})

export const Th = ({
  className = '',
  ...props
}: React.ComponentProps<'th'>) => (
  <th className={cx(thStyles, className)} {...props} />
)

/* -----------------------------------------------------------------------------
 * Table Row
 * -----------------------------------------------------------------------------*/

const trStyles = css({
  _even: {
    bg: { _dark: 'gray.700', base: 'gray.100' },
  },
  borderColor: { _dark: 'gray.600', base: 'gray.300' },
  borderWidth: '1',
  m: '0',
  p: '0',
})

export const Tr = ({
  className = '',
  ...props
}: React.ComponentProps<'tr'>) => (
  <tr className={cx(trStyles, className)} {...props} />
)

/* -----------------------------------------------------------------------------
 * Table Cell
 * -----------------------------------------------------------------------------*/

const tdStyles = css({
  borderColor: { _dark: 'gray.600', base: 'gray.300' },
  borderWidth: '1',
  m: '0',
  px: '4',
  py: '2',
})

export const Td = ({
  className = '',
  ...props
}: React.ComponentProps<'td'>) => (
  <td className={cx(tdStyles, className)} {...props} />
)
