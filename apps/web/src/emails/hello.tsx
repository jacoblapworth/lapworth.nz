import {
  Heading,
  Hr,
  Img,
  Link,
  Row,
  Section,
  Text,
} from '@react-email/components'

interface Props {
  username?: string
  userImage?: string
  invitedByUsername?: string
  invitedByEmail?: string
  teamName?: string
  teamImage?: string
  inviteLink?: string
  inviteFromIp?: string
  inviteFromLocation?: string
}

export function HelloEmail({
  username = 'alanturing',
  userImage = 'https://demo.react.email/static/vercel-user.png',
  invitedByUsername = 'Alan',
  invitedByEmail = 'alan.turing@example.com',
  teamName = 'Enigma',
  teamImage = 'https://demo.react.email/static/vercel-team.png',
  inviteLink = 'https://vercel.com/teams/invite/foo',
  inviteFromIp = '204.13.186.218',
  inviteFromLocation = 'São Paulo, Brazil',
}: Props) {
  return (
    <Row>
      <Hr
        style={{
          borderColor: 'rgb(209,213,219) !important',
          marginBottom: '16px',
          marginTop: '16px',
        }}
      />
      <Section
        style={{
          display: 'inline-block',
          marginTop: '5px',
          maxHeight: '48px',
          maxWidth: '48px',
          textAlign: 'left',
        }}
      >
        <Img
          alt="Jacob Lapworth"
          height={48}
          src="https://lapworth.nz/static/j-photo-mono.png"
          style={{
            borderRadius: '9999px',
            display: 'block',
            height: '48px',
            objectFit: 'cover',
            objectPosition: 'center',
            width: '48px',
          }}
          width={48}
        />
      </Section>
      <Section
        style={{
          display: 'inline-block',
          marginLeft: '18px',
          maxWidth: '120px',
          textAlign: 'left',
          verticalAlign: 'top',
        }}
      >
        <Heading
          as="h3"
          style={{
            color: 'rgb(31,41,55)',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '20px',
            margin: '0px',
          }}
        >
          Jacob Lapworth
        </Heading>
        <Text
          style={{
            color: 'rgb(107,114,128)',
            fontSize: '12px',
            fontWeight: 500,
            lineHeight: '14px',
            margin: '0px',
          }}
        >
          Design engineer
        </Text>
        <Section
          style={{
            marginTop: '4px',
          }}
        >
          <Link
            href="#"
            style={{
              display: 'inline-flex',
              height: '12px',
              width: '12px',
            }}
          >
            <Img
              alt="X"
              src="https://react.email/static/x-icon.png"
              style={{ height: '12px', width: '12px' }}
            />
          </Link>
          <Link
            href="#"
            style={{
              display: 'inline-flex',
              height: '12px',
              marginLeft: '8px',
              width: '12px',
            }}
          >
            <Img
              alt="LinkedIn"
              src="https://react.email/static/in-icon.png"
              style={{ height: '12px', width: '12px' }}
            />
          </Link>
        </Section>
      </Section>
    </Row>
  )
}
