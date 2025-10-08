import { Html, Link, Row, Section, Text } from '@react-email/components'

export function CvRequestEmail() {
  return (
    <Html dir="ltr" lang="en">
      <Text>Thanks for checking me out, attached is my CV.</Text>
      <Section>
        <Row>
          <Link href="https://lapworth.nz">Lapworth.nz</Link>
        </Row>
        <Row>
          <Link href="https://www.linkedin.com/in/jacoblapworth/">
            LinkedIn
          </Link>
        </Row>
      </Section>
    </Html>
  )
}

export default CvRequestEmail
