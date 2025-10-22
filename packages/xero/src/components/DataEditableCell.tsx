import * as Ariakit from '@ariakit/react'
import { startTransition, useState } from 'react'

export function DataEditableCell() {
  const [value, setValue] = useState('')

  return (
    <div>
      <Ariakit.ComboboxProvider
        focusLoop={false}
        focusShift
        focusWrap="horizontal"
        resetValueOnHide
        setValue={(value) => {
          startTransition(() => {
            setValue(value)
          })
        }}
      >
        DataEditableCell
        <Ariakit.Combobox
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
      </Ariakit.ComboboxProvider>
    </div>
  )
}
