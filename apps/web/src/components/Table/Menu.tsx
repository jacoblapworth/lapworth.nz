import * as Ariakit from '@ariakit/react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { CheckIcon, GripVerticalIcon } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { type ReactNode, useId, useRef } from 'react'
import { cva, cx } from '@/styled/css'
import { styled } from '@/styled/jsx'
import { Button, ButtonStyles } from './Button'
import { Check, CheckboxStyles } from './Checkbox'

gsap.registerPlugin(DrawSVGPlugin)

export const MenuProvider = Ariakit.MenuProvider

export const menuStyles = cva({
  base: {
    _focusVisible: {
      outlineColor: 'focus.outline',
      outlineOffset: 2,
      outlineStyle: 'solid',
      outlineWidth: 3,
    },
    backgroundColor: 'background',
    borderRadius: 6,
    boxShadow: 'lift',
    display: 'flex',
    flexDirection: 'column',
    paddingBlock: 'xsmall',
    zIndex: '1000',
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

export const Menu = styled(
  Ariakit.Menu,
  {
    base: {
      backgroundColor: 'xero.background.primary',
      borderColor: 'xero.border.soft',
      borderRadius: 6,
      borderStyle: 'solid',
      borderWidth: 1,
      boxShadow: 'md',
      minWidth: 200,
      overflow: 'hidden',
      paddingBlock: 8,
      zIndex: 1000,
    },
  },
  {
    defaultProps: {
      gutter: 4,
    },
  },
)

const MenuButtonArrow = styled(Ariakit.MenuButtonArrow, {
  base: {},
})

export const MenuButton = styled(Ariakit.MenuButton, ButtonStyles)

export const MenuSeparator = styled(Ariakit.MenuSeparator, {
  base: {
    color: 'xero.border.soft',
    height: 0,
    marginBlock: 8,
  },
})

export const menuItemStyles = cva({
  base: {
    _activeItem: {
      backgroundColor: 'xero.background.secondary',
    },

    _checked: {
      color: 'xero.action',
    },

    _disabled: {
      color: 'xero.text.faint',
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
      backgroundColor: 'xero.background.secondary',
    },
    alignItems: 'center',
    color: 'xero.text.primary',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    fontSize: 15,
    gap: 8,
    justifyContent: 'stretch',
    lineHeight: '1.45',
    paddingBlock: 8,
    paddingInline: 16,
    position: 'relative',
    textStyle: 'xero.body.small.regular',
  },

  variants: {
    checked: {
      true: {
        _before: {
          backgroundColor: 'xero.background.primary',
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
        color: 'xero.text.tertiary',
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

const highlightStyles = cva({
  base: {
    backgroundColor: 'xero.action',
    borderRightRadius: 999,
    bottom: 0,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 4,
  },
})

const Highlight = motion.create(styled('span', highlightStyles))

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
      className={menuItemStyles()}
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
      className={menuItemStyles({ variant: 'radio' })}
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
      className={cx(menuItemStyles({ variant: 'check' }), className)}
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
    color: 'xero.text.tertiary',
    fontSize: 'xsmall',
    paddingBlock: 'xsmall',
    paddingInline: 'large',
    textStyle: 'xero.body.small.regular',
  },
})

export const MenuDescription = styled(Ariakit.MenuDescription, {
  base: {
    color: 'xero.text.tertiary',
    fontSize: 'xsmall',
    paddingBlock: 'xsmall',
    paddingInline: 'large',
    textStyle: 'xero.body.small.regular',
    textWrap: 'wrap',
  },
})
