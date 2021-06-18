import Page from '@components/Page'
import { NextSeo } from 'next-seo'
import { ChangeEventHandler, useState } from 'react'

export default function Home() {
  const [state, setstate] = useState('#fff')

  const handleColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.currentTarget.value)
    setstate(e.currentTarget.value)
  }

  // #dabdc0
  return (
    <>
      <NextSeo
        description="A short description goes here."
        additionalMetaTags={[
          {
            property: 'theme-color',
            content: state,
          },
        ]}
      />
      <Page
        className="min-h-screen flex flex-col"
        style={{ backgroundColor: state }}
      >
        <div className="flex flex-col flex-grow justify-center text-center uppercase font-serif">
          <input type="color" value={state} onChange={handleColor} />
        </div>
      </Page>
    </>
  )
}
