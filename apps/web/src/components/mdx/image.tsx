import * as Ariakit from '@ariakit/react'
import { XIcon } from 'lucide-react'
import NextImage from 'next/image'
import type { ComponentProps } from 'react'
import { cva } from '@/styled/css'
import { styled } from '@/styled/jsx'

const DialogDisclosure = styled(Ariakit.DialogDisclosure, {
  base: {
    _hover: {
      brightness: 0.95,
    },
    cursor: 'zoom-in',
    display: 'inline-block',
    filter: 'auto',
    maxWidth: '2xl',
    minWidth: 0,
    transitionDuration: 'sm',
    transitionProperty: 'filter',
    transitionTimingFunction: 'easeInOutCubic',
    width: '100%',
  },
})

const Backdrop = styled('div', {
  base: {
    _enter: {
      opacity: 1,
    },
    _exit: {
      opacity: 1,
      scale: 1,
    },
    backdropBlur: 'sm',
    backdropFilter: 'auto',
    backgroundColor: 'background/70',
    inset: 0,
    opacity: 0,
    position: 'fixed',
    transform: 'auto',
    transitionDuration: 'md',
    transitionProperty: 'opacity, backdrop-filter',
    transitionTimingFunction: 'easeInOutCubic',
    zIndex: 100,
  },
})

const Dialog = styled(
  Ariakit.Dialog,
  {
    base: {
      _enter: {
        opacity: 1,
        scale: 1,
      },
      '--inset': {
        base: 'token(spacing.md)',
        md: 'token(spacing.lg)',
      },
      alignItems: 'stretch',
      backgroundColor: 'background',
      boxShadow: 'dialog',
      display: 'flex',
      flexDirection: 'column',
      gap: '1',
      height: 'fit-content',
      inset: 'var(--inset)',
      justifyContent: 'stretch',
      margin: 'auto',
      maxHeight: 'calc(100dvh - var(--inset) * 2 - 36px)',
      maxWidth: '3xl',
      opacity: 0,
      position: 'fixed',
      scale: 0.9,
      transformOrigin: 'center',
      transitionDuration: 'sm',
      transitionProperty: 'all',
      transitionTimingFunction: 'easeInOutCubic',
      zIndex: 800,
    },
  },
  {
    defaultProps: {
      backdrop: <Backdrop />,
    },
  },
)

const Dismiss = styled(
  Ariakit.DialogDismiss,
  {
    base: {
      _active: {
        scale: 0.9,
      },
      _hover: {
        backgroundColor: 'primary',
        color: 'background',
      },
      border: 'primary',
      color: 'primary',
      cursor: 'pointer',
      position: 'absolute',
      top: '-lg',
    },
  },
  {
    defaultProps: {
      children: <XIcon aria-label="Close dialog" />,
    },
  },
)

const Figure = styled('figure', {
  base: {
    margin: 0,
  },
})

const Figcaption = styled('figcaption', {
  base: {
    color: 'secondary',
    fontSize: 'sm',
    margin: 0,
    textAlign: 'start',
  },
  variants: {
    dialog: {
      true: {
        paddingBlock: 'xs',
        paddingInline: 'sm',
      },
    },
  },
})

const ImageStyles = cva({
  base: {
    '& + img': {
      marginBlockStart: -1,
    },
    border: 'muted',
    height: 'auto',
    width: '100%',
  },
  variants: {
    dialog: {
      true: {
        maxWidth: '100%',
      },
    },
  },
})

export function Image({
  blurDataURL,
  src,
  ...props
}: ComponentProps<typeof NextImage>) {
  const placeholder =
    typeof src !== 'string' && 'blurDataURL' in src ? 'blur' : undefined

  return (
    <Ariakit.DialogProvider>
      <DialogDisclosure>
        <Figure>
          <NextImage
            className={ImageStyles()}
            placeholder={placeholder}
            quality={75}
            sizes="(max-width: 800px) 100vw, 800px"
            src={src}
            {...props}
          />
          {props.title && <Figcaption>{props.title}</Figcaption>}
        </Figure>
      </DialogDisclosure>
      <Dialog unmountOnHide>
        <Dismiss />
        <Figure>
          <NextImage
            className={ImageStyles()}
            placeholder={placeholder}
            quality={100}
            sizes="(max-width: 1000px) 100vw, 1000px"
            src={src}
            {...props}
          />
          {props.title && <Figcaption dialog>{props.title}</Figcaption>}
        </Figure>
      </Dialog>
    </Ariakit.DialogProvider>
  )
}
