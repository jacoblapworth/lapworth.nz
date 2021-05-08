import Button from 'components/Button'
import Page from 'components/Page'

export default function Home() {
  return (
    <Page>
      <div className="h-screen">
        <div>Jacob Lapworth</div>
        <div>
          <div>@jacoblapworth</div>
          <div>jacob@lapworth.nz</div>
          <div>0277271661</div>
        </div>
        <div>
          <span>Auckland,</span>
          <span>New Zealand</span>
        </div>
        <div>-36.862600º, 174.741270º</div>
        <div>
          <span>Product</span>
          <span>Designer</span>
        </div>
        <div>
          <div>Design Systems</div>
          <div>
            <a href="">@Xero</a>{' '}
          </div>
        </div>
      </div>
    </Page>
  )
}
