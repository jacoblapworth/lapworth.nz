import { FormExample } from '@lapworth/xero/FormExample'
import { Suspense } from 'react'
import { Code } from '@/components/mdx/code'

export default function Page() {
  return (
    <div>
      <h1>Demo Page</h1>
      <Suspense>
        <FormExample />
        <Code>
          {`export function FormExampleIdentifyOptional() {
  return (
    <XUIForm identifyFieldsWith="optional" optionalLabel="(Optional)">
      // [!code highlight:1]
      <XUITextInput label="Name" isRequired />
      <XUITextInput label="Gender" />
    </XUIForm>
  )
}`}
        </Code>
      </Suspense>
    </div>
  )
}
