export interface ExperienceItem {
  company: {
    title: string
    href?: string
  }
  role: {
    title: string
    detail?: string
  }
  start: number
  end?: number
  url?: string
  details: string[]
}

export const xero: ExperienceItem = {
  company: {
    href: 'https://xero.com',
    title: 'Xero',
  },
  details: [
    'Scaled the design system at Xero to support over 200 designers, 1,000 engineers and 100 product teams. (Figma, Typescript, React, SASS)',
    'Developed Design Tokens to support a complete redesign of Xero’s product, delivering on brand promises in marketing and enabling a cohesive experience across web and mobile platforms.',
    'Redesigned advanced tables across Xero for viewing, filtering and editing, empowering customers to easily scan, compare, and interact with their wealth of financial data. Led engineering feasibility through coded prototyping.',
    'Iterative prototyping-lead design of dashboard and widgets for a reimagined homepage experience, the landing page for millions of Xero’s customers.',
    'Led user research into pain-points across the product including inconsistent experiences, and issues with density and efficiency, informing design and product strategy.',
    'Designed and built internal tooling including Figma plugins for Accessibility and Design System documentation.',
  ],
  end: 2025,
  role: {
    detail: 'Design System & Web',
    title: 'Senior Product Designer',
  },
  start: 2020,
}

export const vend: ExperienceItem = {
  company: {
    href: 'https://www.lightspeedhq.co.uk/vend/',
    title: 'Vend',
  },
  details: [
    'Design of Vend’s iPad and Web “Easy to learn, easy to use” POS',
    'Launched accounting integrations with Xero, QuickBooks Online and MYOB, simplifying the accounting process for thousands of retailers.',
    'Developed product strategies for mobile expansion, identifying opportunities for new apps and features increasing engagement. (Scanner Inventory App)',
    'Designed an add-ons platform for 3rd party integrations, that leverages and expands the current product solving complex needs for retailers with unique workflows and enterprise customers.',
  ],
  end: 2020,
  role: {
    detail: 'Mobile & Web',
    title: 'Product Designer',
  },

  start: 2019,
}

export const trademe: ExperienceItem = {
  company: {
    href: 'https://trademe.co.nz',
    title: 'Trade Me',
  },
  details: [
    'Design of Trade Me’s iOS and Android apps (combined 1.2M MAU), optimising engagement, conversion and retention.',
    'Led the mobile design guild, facilitating collaboration across business units, working with product owners and designers, identifying shared problems to resolve cohesive experiences for customers.',
    'Development of design systems, combining brand and development including developing guidance for onboarding, change aversion, experimentation, and cross platform cohesive experiences.',
    'Design sprints, Qualitative and quantitative research, identifying user needs, wireframing, prototyping, user- testing, interface design and release management.',
  ],
  end: 2018,
  role: {
    detail: 'Native iOS & Android',
    title: 'Product Designer',
  },
  start: 2016,
}

export const experience = [xero, vend, trademe]
