import {
  Row,
  Hr,
  Section,
  Img,
  Heading,
  Text,
  Link,
} from '@react-email/components'

interface HelloEmailProps {
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
}: HelloEmailProps) {
  return (
    <Row>
      <Hr
        style={{
          borderColor: 'rgb(209,213,219) !important',
          marginTop: '16px',
          marginBottom: '16px',
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
          alt="Steve Jobs"
          height={48}
          src="https://react.email/static/steve-jobs.jpg"
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
          Steve Jobs
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
          Co-Founder & CEO
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
