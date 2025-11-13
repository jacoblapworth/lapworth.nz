import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
} from '@shikijs/transformers'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import type { JSX } from 'react'
import { Fragment } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { codeToHast } from 'shiki'
import { cva, cx } from '@/styled/css'
import { styled } from '@/styled/jsx'

export const Pre = styled('pre', {
  base: {
    // backgroundColor: 'surface',
    // borderRadius: 'md',
    border: 'muted',
    overflowX: 'scroll',
    paddingBlock: 'md',
  },
})

const styles = cva({
  base: {
    '& > [data-line].highlighted': {
      _light: {
        backgroundColor: 'colors.codeHighlight',
      },
      backgroundColor: 'colors.codeHighlight',
    },
    display: 'grid',
    fontFamily: 'mono',
    fontSize: 'sm',
  },

  variants: {
    hasLineNumbers: {
      true: {
        '& > [data-line]::before': {
          color: 'quaternary',
          content: ' counter(line)',
          counterIncrement: 'line',
          display: 'inline-block',
          marginInline: 'md',
          textAlign: 'right',
          verticalAlign: 'bottom',
        },
        counterReset: 'line',
      },
    },
  },
})

export async function Code(props: React.ComponentProps<'code'>) {
  const { className = '', ...rest } = props
  const hasLineNumbers = 'data-line-numbers' in props

  if (typeof props.children !== 'string') {
    return (
      <code className={cx(styles({ hasLineNumbers }), className)} {...rest} />
    )
  }

  const out = await codeToHast(props.children, {
    defaultColor: 'light-dark()',
    lang: 'tsx',
    themes: {
      dark: 'github-dark-dimmed',
      light: 'github-light',
    },
    transformers: [
      transformerNotationDiff({ matchAlgorithm: 'v3' }),
      transformerNotationHighlight({ matchAlgorithm: 'v3' }),
      transformerNotationFocus({ matchAlgorithm: 'v3' }),
      transformerNotationErrorLevel({ matchAlgorithm: 'v3' }),
      {
        span(_hast, line, _col, lineElement, _token) {
          lineElement.properties['data-line'] = line
        },
      },
    ],
  })

  return toJsxRuntime(out, {
    components: {
      code: (props) => (
        <code
          className={cx(styles({ hasLineNumbers: true }), className)}
          dir="ltr"
          {...props}
        />
      ),
      pre: Pre,
    },
    Fragment,
    jsx,
    jsxs,
  }) as JSX.Element
}
