import { NextPage } from 'next'

import { SkewTile } from '@/components/Tile'
import { Text } from '@/components/Typography'
import { XeroTile1 } from '@/components/Work/Xero/XeroTile'

export const Page: NextPage = () => {
  return (
    <>
      <SkewTile>
        <Text display size="large">
          Test
        </Text>
      </SkewTile>

      <XeroTile1 />
    </>
  )
}

export default Page
