import * as Ariakit from '@ariakit/react'
import { XIcon } from 'lucide-react'
import NextImage from 'next/image'
import { cva } from '@/styled/css'
import { styled } from '@/styled/jsx'

const DialogDisclosure = styled(Ariakit.DialogDisclosure, {
  base: {
    '&:hover': {
      filter: 'brightness(0.9)',
    },
    cursor: 'zoom-in',
    display: 'inline-block',
    width: 'fit-content',
  },
})

const Backdrop = styled('div', {
  base: {
    _enter: {
      backdropBlur: 'sm',
      opacity: 1,
    },

    _exit: {
      opacity: 1,
      transform: 'scale(1)',
    },
    backdropFilter: 'auto',
    backgroundColor: 'background/70',
    filter: 'auto',
    inset: '0',
    opacity: 0,
    position: 'fixed',
    transitionDuration: '150ms',
    transitionProperty: 'opacity, backdrop-filter',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 100,
  },
})

const Dialog = styled(
  Ariakit.Dialog,
  {
    base: {
      _enter: {
        opacity: 1,
        transform: 'scale(1)',
      },
      '--inset': '16px',

      alignItems: 'stretch',
      backgroundColor: 'background',
      boxShadow: `
      inset 0 0 0 1px token(colors.divider),
      0 25px 30px -10px rgb(0 0 0 / 0.15);
    `,
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      height: 'fit-content',
      inset: 'var(--inset)',
      justifyContent: 'stretch',
      margin: 'auto',
      maxHeight: 'calc(100dvh - var(--inset) * 2)',
      maxWidth: '100vw',
      md: {
        '--inset': '2rem',
        maxWidth: '90vw',
      },
      opacity: 0,
      position: 'fixed',
      transform: 'scale(0.95)',
      transformOrigin: 'center',
      transitionDuration: '100ms',
      transitionProperty: 'all',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
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
      _hover: {
        backgroundColor: 'primary',
        color: 'background',
      },
      border: 'primary',
      color: 'primary',
      cursor: 'pointer',
      position: 'absolute',
      top: '-2rem',
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
})

const styles = cva({
  base: {
    '& + img': {
      marginBlockStart: -1,
    },
    border: 'muted',
    height: 'auto',
    maxWidth: '100%',
  },
})

export function Image(props: React.ComponentProps<typeof NextImage>) {
  return (
    <Ariakit.DialogProvider>
      <DialogDisclosure>
        <Figure>
          <NextImage
            className={styles()}
            height={400}
            placeholder={props.blurDataURL ? 'blur' : undefined}
            width={800}
            {...props}
          />
          {props.title && <Figcaption>{props.title}</Figcaption>}
        </Figure>
      </DialogDisclosure>
      <Dialog unmountOnHide>
        <Dismiss />
        <Figure>
          <NextImage
            alt={props.alt}
            height={800}
            placeholder={props.blurDataURL ? 'blur' : undefined}
            src={props.src}
            width={1600}
          />
          {props.title && <Figcaption>{props.title}</Figcaption>}
        </Figure>
      </Dialog>
    </Ariakit.DialogProvider>
  )
}
