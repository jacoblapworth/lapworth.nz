import {
  Document,
  Font,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'
import type { ExperienceItem } from './experience'
import { experience } from './experience'

Font.register({
  family: 'Inter',
  src: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
})

// Lightweight design tokens for PDF rendering
const theme = {
  colors: {
    border: '#dddddd',
    muted: '#666666',
    primary: '#262626',
    text: '#0b0b0b',
  },
  fontSizes: {
    display: 24,
    lg: 13,
    md: 11,
    sm: 9,
    xl: 18,
  },
  space: {
    lg: 16,
    md: 12,
    sm: 8,
    xl: 24,
    xs: 4,
    xxl: 32,
  },
}

const styles = StyleSheet.create({
  bullet: {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.space.sm,
    marginBottom: theme.space.xs,
  },
  bulletDot: {
    width: 8,
  },
  bulletText: {
    flexGrow: 1,
  },
  colLeft: {
    paddingRight: theme.space.md,
    width: 100,
  },
  colRight: {
    flexGrow: 1,
    width: 100,
  },
  company: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.md,
    marginBottom: theme.space.sm,
  },
  contactLine: {
    color: theme.colors.muted,
    fontSize: theme.fontSizes.sm,
  },
  experienceRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.space.lg,
  },
  header: {
    borderBottomColor: theme.colors.border,
    borderBottomWidth: 1,
    marginBottom: theme.space.xxl,
    paddingBottom: theme.space.lg,
  },
  page: {
    backgroundColor: '#ffffff',
    color: theme.colors.text,
    fontSize: theme.fontSizes.md,
    lineHeight: 1.4,
    padding: theme.space.xxl,
  },
  role: {
    fontSize: theme.fontSizes.lg,
    marginBottom: theme.space.xs,
  },
  section: {
    marginBottom: theme.space.xl,
  },
  subtitle: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.xl,
    marginBottom: theme.space.xs,
  },
  title: {
    fontSize: theme.fontSizes.display,
    marginBottom: theme.space.sm,
  },
})

function H1({ children }: { children: React.ReactNode }) {
  return <Text style={styles.title}>{children}</Text>
}

function H2({ children }: { children: React.ReactNode }) {
  return <Text style={styles.subtitle}>{children}</Text>
}

function P({
  children,
  muted = false,
}: {
  children: React.ReactNode
  muted?: boolean
}) {
  return (
    <Text
      style={{
        color: muted ? theme.colors.muted : theme.colors.text,
        display: 'flex',
        flexDirection: 'column',
        fontSize: theme.fontSizes.sm,
      }}
    >
      {children}
    </Text>
  )
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.bullet}>
      <Text style={styles.bulletDot}>•</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  )
}

function ExperienceEntry({ item }: { item: ExperienceItem }) {
  return (
    <View
      style={[styles.experienceRow, { marginBottom: theme.space.lg }]}
      // wrap={false}
    >
      <View style={styles.colLeft}>
        <Text>
          {item.start} — {item.end ? item.end : 'Present'}
        </Text>
      </View>
      <View style={styles.colRight}>
        <Text style={styles.role}>{item.role.title}</Text>
        {item.company.href ? (
          <Link src={item.company.href} style={styles.company}>
            {item.company.title}
          </Link>
        ) : (
          <Text style={styles.company}>{item.company.title}</Text>
        )}
        <View>
          {item.details.map((d, idx) => (
            <BulletItem key={`${item.company.title}-${item.start}-${idx}`}>
              {d}
            </BulletItem>
          ))}
        </View>
      </View>
    </View>
  )
}

export function CVDocument() {
  return (
    <Document
      author="Jacob Lapworth"
      pageLayout="singlePage"
      subject="Curriculum Vitae"
      title="Jacob Lapworth — CV"
    >
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <H1>CV</H1>
          <H2>Jacob Lapworth</H2>
          <P muted>
            <Link src="mailto:jacob@lapworth.nz">jacob@lapworth.nz</Link>
            <Link src="tel:+447949536308">(+44) 7949 536308</Link>
            <Link src="tel:+64277271661">(+64) 27 727 1661</Link>
            Currently in London
          </P>
        </View>
        <View style={styles.section}>
          {experience.map((item) => (
            <ExperienceEntry item={item} key={item.company.title} />
          ))}
        </View>
      </Page>
    </Document>
  )
}
