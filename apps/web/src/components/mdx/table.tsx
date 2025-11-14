import { css, cx } from '@/styled/css'

/* -----------------------------------------------------------------------------
 * Table
 * -----------------------------------------------------------------------------*/

const tableStyles = css({
  display: 'block',
  marginBlockStart: {
    _first: '0',
    base: '6',
  },
  overflowX: 'scroll',
  padding: 0,
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
  margin: 0,
  paddingBlock: '2',
  paddingInline: '4',
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
    backgroundColor: { _dark: 'gray.700', base: 'gray.100' },
  },
  borderColor: { _dark: 'gray.600', base: 'gray.300' },
  borderWidth: '1',
  margin: 0,
  padding: 0,
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
  margin: 0,
  paddingBlock: '2',
  paddingInline: '4',
})

export const Td = ({
  className = '',
  ...props
}: React.ComponentProps<'td'>) => (
  <td className={cx(tdStyles, className)} {...props} />
)
