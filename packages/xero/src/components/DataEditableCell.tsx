import * as Ariakit from '@ariakit/react'
import { CircleAlertIcon, TextCursorIcon } from 'lucide-react'
import { startTransition, useRef, useState } from 'react'
import { css } from '@/styled/css'
import { HStack, styled } from '@/styled/jsx'
import { Button } from './Button'
import { MenuStyles } from './Menu'

const ComboboxContainer = styled('div', {
  base: {
    _focusWithin: {
      borderRadius: 3,
      outlineColor: 'border.focus',
      outlineOffset: -1,
      outlineStyle: 'solid',
      outlineWidth: 2,
    },
    alignItems: 'center',
    backgroundColor: 'background.primary',
    display: 'flex',
    // borderColor: 'border.soft',
    // borderStyle: 'solid',
    // borderWidth: 1,
    flexGrow: 1,
    gap: 8,
    justifyContent: 'stretch',
    justifySelf: 'stretch',
    paddingInline: 8,
    width: '100%',
  },
  variants: {
    isInvalid: {
      true: {
        _focusWithin: {
          outlineColor: 'negative',
        },
        backgroundColor: '#FFF6F7',
        borderColor: 'color.negative',
      },
    },
  },
})

const Combobox = styled(Ariakit.Combobox, {
  base: {
    _focusVisible: {
      outline: 'none',
    },
    flexGrow: 1,
    flexShrink: 1,
    height: 36,
    minWidth: 0,
    width: '100%',
    // paddingInlineEnd: 32,
    // paddingInlineStart: 8,
  },
})

const ComboboxPopover = styled(Ariakit.ComboboxPopover, MenuStyles)

interface Props {
  defaultValue?: string
  validate?: (value: string) => boolean
}

export function DataEditableCell({ defaultValue = '', validate }: Props) {
  const [value, setValue] = useState(defaultValue)
  const [isLoading, setIsLoading] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)
  const cellRef = useRef<HTMLDivElement>(null)
  const isDirty = value !== defaultValue
  const combobox = Ariakit.useComboboxStore({
    defaultValue,
    focusLoop: false,
    focusShift: true,
    focusWrap: 'horizontal',

    setValue: (value) => {
      startTransition(() => {
        setValue(value)
      })
    },
    // value,
  })

  const onCancel = () => {
    setValue(defaultValue)
  }

  const onSave = () => {
    setIsLoading(true)
    setTimeout(() => {
      if (validate) {
        const valid = validate(value)
        setIsInvalid(!valid)
        if (!valid) {
          setIsLoading(false)
          return
        }
      }
      combobox.hide()
      setIsLoading(false)
    }, 10000)
  }

  return (
    <Ariakit.ComboboxProvider store={combobox}>
      <ComboboxContainer isInvalid={isInvalid} ref={cellRef}>
        {isInvalid && (
          <CircleAlertIcon className={css({ color: 'negative' })} />
        )}
        <Combobox
          autoSelect="always"
          onKeyDown={(event) => {
            if (event.defaultPrevented) return
            if (event.key !== 'Tab') return
            // const activeId = tab?.getState().selectedId
            // // Ensure the selected tab is recognized as the active (focused) tab
            // // before switching to the next or previous tab. This is because the
            // // actual focus might be on an option or another tab when using manual
            // // activation. It also disables the focus loop, allowing users to exit
            // // the tab list when they reach the end. Passing options to the `next`
            // // or `previous` functions only affects that specific call and doesn't
            // // change the tab state.
            // const options = { activeId, focusLoop: false }
            // const nextId = event.shiftKey
            //   ? tab?.previous(options)
            //   : tab?.next(options)
            // if (!nextId) return
            // event.preventDefault()
            // tab?.select(nextId)
          }}
        />
        <TextCursorIcon
          className={css({
            _hover: {
              // backgroundColor: 'background.tertiary',
            },
            borderRadius: 3,
            color: 'text.muted',
            cursor: 'pointer',
            flexShrink: 0,
            // padding: 4,
          })}
          size={16}
        />
        <ComboboxPopover
          getAnchorRect={() => cellRef.current?.getBoundingClientRect() ?? null}
          gutter={8}
          hideOnEscape={!isDirty}
          hideOnInteractOutside={!isDirty}
          unmountOnHide
        >
          <Ariakit.ComboboxRow
            render={
              <HStack gap={8} justifyContent="flex-end" paddingInline={8} />
            }
          >
            <Ariakit.ComboboxItem
              hideOnClick
              onClick={onCancel}
              render={<Button variant="secondary" />}
            >
              Cancel
            </Ariakit.ComboboxItem>

            <Ariakit.ComboboxItem
              disabled={!isDirty}
              onClick={onSave}
              render={<Button isLoading={isLoading} variant="primary" />}
            >
              Save
            </Ariakit.ComboboxItem>
          </Ariakit.ComboboxRow>
        </ComboboxPopover>
      </ComboboxContainer>
    </Ariakit.ComboboxProvider>
  )
}
