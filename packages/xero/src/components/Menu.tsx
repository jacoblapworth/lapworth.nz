'use client'

import * as Ariakit from '@ariakit/react'
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { GripVerticalIcon } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { type ReactNode, useId } from 'react'
import { cva, cx } from '@/styled/css'
import { styled } from '@/styled/jsx'
import { Button, ButtonStyles } from './Button'
import { Check, CheckboxStyles } from './Checkbox'

gsap.registerPlugin(DrawSVGPlugin)

export const MenuProvider = Ariakit.MenuProvider

export const MenuStyles = cva({
  base: {
    _focusVisible: {
      outlineColor: 'focus.outline',
      outlineOffset: 2,
      outlineStyle: 'solid',
      outlineWidth: 3,
    },
    backgroundColor: 'background.primary',
    // borderColor: 'border.soft',
    borderRadius: 6,
    // borderStyle: 'solid',
    // borderWidth: 1,
    boxShadow: 'lift',
    // boxShadow: 'md',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 'var(--popover-anchor-width)',
    overflow: 'hidden',
    paddingBlock: 8,
    zIndex: 1000,
  },
  variants: {
    size: {
      lg: {
        maxWidth: '400px',
      },
      md: {
        maxWidth: '300px',
      },
      sm: {
        maxWidth: '240px',
      },
      xl: {
        maxWidth: '500px',
      },
    },
  },
})

export const Menu = styled(Ariakit.Menu, MenuStyles, {
  defaultProps: {
    gutter: 4,
  },
})

const _MenuButtonArrow = styled(Ariakit.MenuButtonArrow, {
  base: {},
})

export const MenuButton = styled(Ariakit.MenuButton, ButtonStyles)

export const MenuSeparator = styled(Ariakit.MenuSeparator, {
  base: {
    color: 'border.soft',
    height: 0,
    marginBlock: 8,
  },
})

export const MenuItemStyles = cva({
  base: {
    _activeItem: {
      backgroundColor: 'background.secondary',
    },

    _checked: {
      color: 'action',
    },

    _disabled: {
      color: 'text.faint',
      cursor: 'not-allowed',
    },

    _focusVisible: {
      _after: {
        borderRadius: 3,
        bottom: 0,
        content: '""',
        left: 0,
        outlineColor: 'focus.outline',
        outlineOffset: 2,
        outlineStyle: 'solid',
        outlineWidth: 3,
        position: 'absolute',
        right: 0,
        top: 0,
      },
      outline: 'none',
    },
    _hover: {
      backgroundColor: 'background.secondary',
    },
    alignItems: 'center',
    color: 'text.primary',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'stretch',
    lineHeight: '1.45',
    paddingBlock: 8,
    paddingInline: 16,
    position: 'relative',
    textStyle: 'body.medium.regular',
  },

  variants: {
    checked: {
      true: {
        _before: {
          backgroundColor: 'background.primary',
          borderRadius: '50%',
          content: '""',
          height: 6,
          position: 'absolute',
          width: 6,
        },
      },
    },

    disabled: {
      true: {
        color: 'text.tertiary',
        cursor: 'not-allowed',
      },
    },
    variant: {
      check: {
        _checked: {
          color: 'inherit',
        },
      },
      radio: {},
    },
  },
})

const MenuHighlightStyles = cva({
  base: {
    backgroundColor: 'action',
    borderRightRadius: 999,
    bottom: 0,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 4,
  },
})

const Highlight = motion.create(styled('span', MenuHighlightStyles))

const MenuItemLabel = styled('div', {
  base: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
    gap: 8,
  },
})

type MenuItemProps = Ariakit.MenuItemProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    description?: ReactNode
  }

export function MenuItem({
  ref,
  children,
  description,
  href,
  download,
  hrefLang,
  media,
  ping,
  target,
  type,
  referrerPolicy,
  ...props
}: MenuItemProps) {
  const id = useId()
  const labelId = `${id}-label`
  const descriptionId = `${id}-description`

  return (
    <Ariakit.MenuItem
      aria-describedby={description ? descriptionId : undefined}
      aria-labelledby={labelId}
      className={MenuItemStyles()}
      ref={ref}
      render={
        href ? (
          <Link
            {...{
              download,
              href,
              hrefLang,
              media,
              ping,
              referrerPolicy,
              target,
              type,
            }}
          />
        ) : undefined
      }
      {...props}
    >
      <MenuItemLabel id={labelId}>{children}</MenuItemLabel>
      {description && (
        <MenuItemDescription id={descriptionId}>
          {description}
        </MenuItemDescription>
      )}
    </Ariakit.MenuItem>
  )
}

export const MenuItemDescription = styled('div', {
  base: {
    color: 'text.tertiary',
  },
  defaultVariants: {
    alignment: 'end',
  },
  variants: {
    alignment: {
      end: {
        marginInlineStart: 'auto',
        textAlign: 'end',
      },
    },
  },
})

type MenuItemRadioProps = Ariakit.MenuItemRadioProps & {
  description?: ReactNode
}

export function MenuItemRadio({
  children,
  description,
  ref,
  ...props
}: MenuItemRadioProps) {
  const id = useId()
  const labelId = `${id}-label`
  const descriptionId = `${id}-description`

  return (
    <Ariakit.MenuItemRadio
      aria-describedby={description ? descriptionId : undefined}
      aria-labelledby={labelId}
      className={MenuItemStyles({ variant: 'radio' })}
      ref={ref}
      {...props}
    >
      <Ariakit.MenuItemCheck render={({ children }) => children}>
        <Highlight
          layoutId="highlight"
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />
      </Ariakit.MenuItemCheck>
      <MenuItemLabel id={labelId}>{children}</MenuItemLabel>
      {description && (
        <MenuItemDescription id={descriptionId}>
          {description}
        </MenuItemDescription>
      )}
    </Ariakit.MenuItemRadio>
  )
}

const MenuItemCheck = styled(Ariakit.MenuItemCheck, CheckboxStyles)

export function MenuItemCheckbox({
  className,
  children,
  ref,
  ...props
}: Ariakit.MenuItemCheckboxProps) {
  return (
    <Ariakit.MenuItemCheckbox
      className={cx(MenuItemStyles({ variant: 'check' }), 'group', className)}
      ref={ref}
      {...props}
    >
      <MenuItemCheck aria-disabled={props.disabled ? true : undefined}>
        <Check />
      </MenuItemCheck>
      {children}
      <Button justifySelf={'end'} size="sm" variant="tertiary">
        <GripVerticalIcon size={16} />
      </Button>
    </Ariakit.MenuItemCheckbox>
  )
}

export const MenuGroup = styled(Ariakit.MenuGroup, {})
export const MenuGroupLabel = styled(Ariakit.MenuGroupLabel, {
  base: {
    color: 'text.tertiary',
    fontSize: 'xsmall',
    paddingBlock: 'xsmall',
    paddingInline: 'large',
    textStyle: 'body.small.regular',
  },
})

export const MenuDescription = styled(Ariakit.MenuDescription, {
  base: {
    color: 'text.tertiary',
    fontSize: 'xsmall',
    paddingBlock: 'xsmall',
    paddingInline: 'large',
    textStyle: 'body.small.regular',
    textWrap: 'wrap',
  },
})
