import { Metadata } from 'next'

import { Link } from '@/src/components/Link'
import { Text } from '@/src/components/Typography'
import { css } from '@/styled/css'
import { styled } from '@/styled/jsx'

export const metadata: Metadata = {
  title: 'Curriculum Vitae',
  description: 'Jacob Lapworth - Senior Product Designer & Software Engineer CV',
}

const Section = styled('section', {
  base: {
    marginBlockEnd: 'xl',
  },
})

const Grid = styled('div', {
  base: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 'md',
    marginBlockStart: 'md',
  },
})

const ExperienceItem = styled('div', {
  base: {
    marginBlockEnd: 'lg',
  },
})

const Row = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'xs',
    marginBlockEnd: 'sm',
    sm: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
  },
})

const Column = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
})

const SkillsGrid = styled('div', {
  base: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 'lg',
    marginBlockStart: 'md',
    sm: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    },
  },
})

const SkillCategory = styled('div', {
  base: {
    marginBlockEnd: 'md',
  },
})

const SkillList = styled('ul', {
  base: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    '& li': {
      marginBlockEnd: '0.25rem',
      fontSize: '0.9rem',
    },
  },
})

interface ExperienceRowProps {
  title: string
  company: string
  href: string
  location: string
  from: string
  to: string
  description?: string[]
}

const ExperienceRow = ({ 
  title, 
  company, 
  href, 
  location, 
  from, 
  to, 
  description 
}: ExperienceRowProps) => {
  return (
    <ExperienceItem>
      <Row>
        <Column>
          <Text as="h3" size="medium" className={css({ fontWeight: 'bold', marginBlockEnd: 'xs' })}>
            {title}
          </Text>
          <Link href={href} sameTab>{company}</Link>
          <Text size="small" className={css({ color: 'tertiary' })}>{location}</Text>
        </Column>
        <Column className={css({ 
          textAlign: 'left',
          flexShrink: 0,
          sm: {
            textAlign: 'right',
          }
        })}>
          <Text size="small" className={css({ fontWeight: 'bold' })}>{from}</Text>
          <Text size="small">— {to}</Text>
        </Column>
      </Row>
      {description && (
        <ul className={css({ 
          marginBlockStart: 'sm', 
          paddingInlineStart: 'md',
          fontSize: '0.9rem',
          lineHeight: '1.4',
          '& li': {
            marginBlockEnd: 'xs',
          }
        })}>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </ExperienceItem>
  )
}

export default function CVPage() {
  return (
    <div className={css({ 
      maxWidth: '900px', 
      margin: '0 auto',
      paddingInline: 'md',
      sm: {
        paddingInline: 'lg',
      }
    })}>
      <Text as="h1" size="xlarge" display>
        Curriculum Vitae
      </Text>

      <Section>
        <Text as="h2" size="large" display>
          Professional Summary
        </Text>
        <Text size="medium">
          Senior product designer and software engineer with 8+ years of experience building 
          design systems and user experiences. Focused on community-driven design systems, 
          accessibility, and bridging the gap between design and engineering. Currently 
          scaling the design system at Xero, serving 200+ designers and 800+ engineers.
        </Text>
      </Section>

      <Section>
        <Text as="h2" size="large" display>
          Professional Experience
        </Text>
        
        <ExperienceRow
          title="Senior Product Designer (Design Systems)"
          company="Xero"
          href="https://www.xero.com/nz/"
          location="Auckland, New Zealand"
          from="2020"
          to="Present"
          description={[
            "Lead design system strategy for 3.5M+ users across global markets",
            "Built and maintained XUI (Xero User Interface) design system serving 200+ designers and 800+ engineers",
            "Developed Figma plugins and tools to improve designer workflow and consistency",
            "Created experience design principles through cross-disciplinary workshops",
            "Championed accessible and inclusive design practices across product teams"
          ]}
        />

        <ExperienceRow
          title="Product Designer"
          company="Vend (now Lightspeed)"
          href="https://www.vendhq.com/nz/"
          location="Auckland, New Zealand"
          from="2019"
          to="2020"
          description={[
            "Designed point-of-sale interfaces for retail businesses",
            "Improved onboarding experience and user conversion rates",
            "Collaborated with engineering teams to implement responsive design patterns",
            "Conducted user research and usability testing"
          ]}
        />

        <ExperienceRow
          title="UX/UI Designer"
          company="Timely"
          href="https://www.gettimely.com/"
          location="Auckland, New Zealand"
          from="2018"
          to="2019"
          description={[
            "Designed booking and appointment management interfaces",
            "Created design system components for consistent user experience",
            "Worked on mobile-first responsive design approaches",
            "Collaborated with product managers on feature prioritization"
          ]}
        />

        <ExperienceRow
          title="Frontend Developer & Designer"
          company="Trade Me"
          href="https://www.trademe.co.nz/a/"
          location="Auckland, New Zealand"
          from="2016"
          to="2018"
          description={[
            "Developed and designed features for New Zealand's largest marketplace",
            "Built responsive web components using modern JavaScript frameworks",
            "Improved site performance and accessibility standards",
            "Collaborated on design system development and implementation"
          ]}
        />
      </Section>

      <Section>
        <Text as="h2" size="large" display>
          Skills & Technologies
        </Text>
        
        <SkillsGrid>
          <SkillCategory>
            <Text as="h3" size="medium" className={css({ fontWeight: 'bold', marginBlockEnd: 'sm' })}>
              Design
            </Text>
            <SkillList>
              <li>Design Systems</li>
              <li>User Experience (UX)</li>
              <li>User Interface (UI)</li>
              <li>Figma / Sketch</li>
              <li>Prototyping</li>
              <li>User Research</li>
              <li>Accessibility (WCAG)</li>
              <li>Design Tokens</li>
            </SkillList>
          </SkillCategory>

          <SkillCategory>
            <Text as="h3" size="medium" className={css({ fontWeight: 'bold', marginBlockEnd: 'sm' })}>
              Frontend Development
            </Text>
            <SkillList>
              <li>React / Next.js</li>
              <li>TypeScript / JavaScript</li>
              <li>HTML5 / CSS3</li>
              <li>Styled Components</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
              <li>Responsive Design</li>
              <li>Performance Optimization</li>
            </SkillList>
          </SkillCategory>

          <SkillCategory>
            <Text as="h3" size="medium" className={css({ fontWeight: 'bold', marginBlockEnd: 'sm' })}>
              Tools & Platforms
            </Text>
            <SkillList>
              <li>Git / GitHub</li>
              <li>Node.js</li>
              <li>Webpack / Vite</li>
              <li>Storybook</li>
              <li>Jest / Testing Library</li>
              <li>Vercel / Netlify</li>
              <li>Adobe Creative Suite</li>
              <li>Design System Documentation</li>
            </SkillList>
          </SkillCategory>

          <SkillCategory>
            <Text as="h3" size="medium" className={css({ fontWeight: 'bold', marginBlockEnd: 'sm' })}>
              Methodologies
            </Text>
            <SkillList>
              <li>Design Thinking</li>
              <li>Agile / Scrum</li>
              <li>User-Centered Design</li>
              <li>Atomic Design</li>
              <li>Design Systems Governance</li>
              <li>Cross-functional Collaboration</li>
              <li>Mentoring & Leadership</li>
              <li>Workshop Facilitation</li>
            </SkillList>
          </SkillCategory>
        </SkillsGrid>
      </Section>

      <Section>
        <Text as="h2" size="large" display>
          Education & Certifications
        </Text>
        
        <ExperienceItem>
          <Row>
            <Column>
              <Text as="h3" size="medium" className={css({ fontWeight: 'bold', marginBlockEnd: 'xs' })}>
                Bachelor of Design
              </Text>
              <Text size="small">Massey University</Text>
              <Text size="small" className={css({ color: 'tertiary' })}>Auckland, New Zealand</Text>
            </Column>
            <Column className={css({ 
              textAlign: 'left',
              flexShrink: 0,
              sm: {
                textAlign: 'right',
              }
            })}>
              <Text size="small" className={css({ fontWeight: 'bold' })}>2013</Text>
              <Text size="small">— 2016</Text>
            </Column>
          </Row>
        </ExperienceItem>
      </Section>

      <Section>
        <Text as="h2" size="large" display>
          Notable Projects
        </Text>
        
        <ExperienceItem>
          <Text as="h3" size="medium" className={css({ fontWeight: 'bold', marginBlockEnd: 'sm' })}>
            XUI Design System
          </Text>
          <Text size="small" className={css({ marginBlockEnd: 'sm' })}>
            Comprehensive design system serving 200+ designers and 800+ engineers at Xero
          </Text>
          <ul className={css({ 
            marginBlockStart: 'sm', 
            paddingInlineStart: 'md',
            fontSize: '0.9rem',
            lineHeight: '1.4',
            '& li': {
              marginBlockEnd: 'xs',
            }
          })}>
            <li>Built design tokens architecture for consistent theming</li>
            <li>Created Figma plugin for automated documentation</li>
            <li>Established governance model for system evolution</li>
            <li>Improved accessibility compliance across all components</li>
          </ul>
        </ExperienceItem>

        <ExperienceItem>
          <Text as="h3" size="medium" className={css({ fontWeight: 'bold', marginBlockEnd: 'sm' })}>
            Experience Design Principles
          </Text>
          <Text size="small" className={css({ marginBlockEnd: 'sm' })}>
            Co-created design principles through global workshops at Xero
          </Text>
          <ul className={css({ 
            marginBlockStart: 'sm', 
            paddingInlineStart: 'md',
            fontSize: '0.9rem',
            lineHeight: '1.4',
            '& li': {
              marginBlockEnd: 'xs',
            }
          })}>
            <li>Facilitated workshops across multiple time zones and disciplines</li>
            <li>Synthesized feedback from 100+ participants into actionable principles</li>
            <li>Created documentation and training materials for implementation</li>
          </ul>
        </ExperienceItem>
      </Section>

      <Section>
        <Text as="h2" size="large" display>
          Contact
        </Text>
        <Text size="medium">
          Based in Tāmaki Makaurau, Auckland, New Zealand
        </Text>
        <Text size="medium">
          <Link href="https://lapworth.nz" sameTab>lapworth.nz</Link> • <Link href="mailto:hello@lapworth.nz">hello@lapworth.nz</Link>
        </Text>
      </Section>
    </div>
  )
}