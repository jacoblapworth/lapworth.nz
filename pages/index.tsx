import Link from '@components/Link'
import Page from '@components/Page'
import Text from '@components/Text'

export default function Home() {
  return (
    <Page className="min-h-screen flex flex-col">
      <div className="flex flex-col flex-grow justify-center text-center uppercase font-serif">
        <Text variant="large">Jacob Lapworth</Text>
        <Text variant="small">
          <div>
            <Link href="https://instagram.com/jacoblapworth">
              @jacoblapworth
            </Link>
          </div>
          <div>
            <Link sameTab href="mailto:jacob@lapworth.nz">
              jacob@lapworth.nz
            </Link>
          </div>
          <div>
            <Link sameTab href="tel:+64277271661">
              0277271661
            </Link>
          </div>
        </Text>
        <Text variant="large">
          Auckland, <br />
          New Zealand
        </Text>
        <Text variant="small">-36.862600º, 174.741270º</Text>
        <Text variant="large">
          Product <br />
          Designer
        </Text>
        <Text variant="small">
          <div>Design Systems</div>
          <div>
            <Link href="https://xero.com">@Xero</Link>
          </div>
        </Text>
      </div>
    </Page>
  )
}
