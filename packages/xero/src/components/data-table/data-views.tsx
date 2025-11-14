import * as Ariakit from '@ariakit/react'
import type { AppliedFilter } from './filters'
import { ViewTab } from './view-tab'
import { ViewsTabList } from './views-tab-list'

export interface View {
  id: string
  label: string
  filters?: AppliedFilter[]
}

interface Props {
  selectedId?: string | null
  views: View[]
  onChange: (viewId: string | null | undefined) => void
}

export function Views({ views, onChange, selectedId }: Props) {
  return (
    <Ariakit.TabProvider selectedId={selectedId} setSelectedId={onChange}>
      <ViewsTabList>
        {views.map(({ id, label }) => (
          <ViewTab id={id} key={id}>
            {/* <BorderHighlight layoutId="highlight" /> */}
            {label}
          </ViewTab>
        ))}
      </ViewsTabList>
    </Ariakit.TabProvider>
  )
}
