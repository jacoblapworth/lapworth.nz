import * as Ariakit from '@ariakit/react'
import { ViewsTabList } from './ViewsTabList'
import { BorderHighlight, ViewTab } from './ViewTab'

export interface View {
  id: string
  label: string
}

interface Props {
  views: View[]
}

export function Views({ views }: Props) {
  return (
    <Ariakit.TabProvider defaultSelectedId={views[0]?.id}>
      <ViewsTabList>
        {views.map(({ id, label }) => (
          <ViewTab id={id} key={id} value={id}>
            {/* <BorderHighlight layoutId="highlight" /> */}
            {label}
          </ViewTab>
        ))}
      </ViewsTabList>
    </Ariakit.TabProvider>
  )
}
