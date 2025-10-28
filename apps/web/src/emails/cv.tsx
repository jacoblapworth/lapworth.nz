import { Html, Link, Row, Section, Text } from '@react-email/components'

export function CvRequestEmail() {
  return (
    <Html dir="ltr" lang="en">
      <Section>
        <Text>Thanks for checking me out, attached is my CV.</Text>
        <Link href="https://lapworth.nz/cv">View online</Link>
      </Section>
      <Section>
        <Row>
          <Link href="tel:+447949536308">(+44) 7949 536308</Link>
        </Row>
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
