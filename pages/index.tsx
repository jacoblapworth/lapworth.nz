import Button from 'components/Button'
import Page from 'components/Page'

export default function Home() {
  return (
    <Page>
      <div className="h-screen">
        <div className="flex flex-col justify-between h-3/6 p-6">
          <div>
            <div>Product designer</div>
            <div>Akl, NZ</div>
          </div>

          <div className="font-serif font-thin text-8xl md:text-9xl flex flex-wrap justify-between">
            <div>Jacob</div>
            <div>Lapworth</div>
          </div>
        </div>
        <div className="bg-pink-50 h-1/2 -mt-8"></div>
      </div>
    </Page>
  )
}
