import Image from 'next/image'
import { Grid } from '@/styled/jsx'
import columns from './highlight-columns.png'
import filtering from './highlight-filtering.png'
import search from './highlight-search.png'
import views from './highlight-views.png'

export function Highlights() {
  return (
    <Grid columns={3}>
      <Image alt="Highlight: Search" src={search} />
      <Image alt="Highlight: Filtering" src={filtering} />
      <Image alt={'Highlight: Views'} src={views} />
      <Image alt="Highlight: Custom Columns" src={columns} />
    </Grid>
  )
}
