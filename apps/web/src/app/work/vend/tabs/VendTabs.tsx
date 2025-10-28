'use client'

import * as Ariakit from '@ariakit/react'
import { ChevronDownIcon } from 'lucide-react'
import { type MotionValue, motion, useScroll, useTransform } from 'motion/react'
import { Lato } from 'next/font/google'
import { type ComponentProps, type ReactNode, useRef, useState } from 'react'
import { styled } from '@/styled/jsx'

const VEND_GREEN = '#41AF4B'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const MenuButton = styled(Ariakit.MenuButton, {
  base: {
    _hover: {
      backgroundColor: 'surfaceHovered',
    },
    alignItems: 'center',
    alignSelf: 'center',
    all: 'unset',
    borderRadius: 'md',
    color: '#7191A6',
    cursor: 'pointer',
    display: 'flex',
    marginInlineStart: 'sm',
    paddingBlock: 'sm',
    paddingInline: 'sm',
  },
})

const MenuArrow = styled(Ariakit.MenuArrow, {
  base: {
    fill: 'surface',
  },
})

const Menu = styled(Ariakit.Menu, {
  base: {
    backgroundColor: 'surface',
    borderRadius: 5,
    boxShadow: '0 4px 5px rgba(0,0,0,.35)',
    fontFamily: lato.style.fontFamily,
    minWidth: 200,
    overflow: 'hidden',
    paddingBlock: 'md',
    zIndex: '4',
  },
})

const MenuItem = styled(Ariakit.MenuItem, {
  base: {
    _active: {
      backgroundColor: 'surfaceHovered',
      color: VEND_GREEN,
    },
    _hover: {
      backgroundColor: 'surfaceHovered',
    },
    cursor: 'pointer',
    display: 'flex',
    padding: 'md',
    position: 'relative',
    zIndex: '4',
  },
  variants: {
    isActive: {
      true: {
        color: VEND_GREEN,
      },
    },
  },
})

interface TabItem {
  value: string
  label: string
}

interface DropdownMenuProps extends Ariakit.MenuStoreProps {
  tabs: TabItem[]
  onChange: (value: string) => void
  activeTab?: string
}

function TabsMenu({ tabs, onChange, activeTab }: DropdownMenuProps) {
  const menu = Ariakit.useMenuStore()
  return (
    <Ariakit.MenuProvider store={menu}>
      <MenuButton>
        All
        <ChevronDownIcon size={16} />
      </MenuButton>
      <Menu gutter={0} portal>
        <MenuArrow />
        {tabs.map(({ value, label }) => (
          <MenuItem
            isActive={activeTab === value}
            key={value}
            onClick={() => onChange(value)}
          >
            {activeTab === value && <Highlight vertical />}
            {label}
          </MenuItem>
        ))}
        <MenuArrow height={8} width={16} />
      </Menu>
    </Ariakit.MenuProvider>
  )
}

interface OverflowIndicatorProps {
  direction: 'start' | 'end'
  opacity: MotionValue
}

function OverflowIndicator({ direction, opacity }: OverflowIndicatorProps) {
  const Indicator = styled(motion.div, {
    base: {
      _before: {
        borderRadius: '100%',
        boxShadow: '0 0 var(--width) rgba(0, 0, 0, 0.35)',
        content: '""',
        height: '100%',
        position: 'absolute',
        width: '100%',
      },
      '--width': '10px',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none',
      position: 'absolute',
      transition: 'opacity .2s ease 0s',
      userSelect: 'none',
      width: 'var(--width)',
      zIndex: '3',
    },

    variants: {
      direction: {
        end: {
          _before: {
            transform: 'translateY(0) translateX(100%)',
          },
          right: '50%',
        },
        start: {
          _before: {
            transform: 'translateY(0) translateX(-100%)',
          },
          left: '50%',
        },
      },
    },
  })

  const Container = styled('div', {
    base: {
      maxWidth: 'fit-content',
      position: 'relative',
    },
  })

  return (
    <Container>
      <Indicator direction={direction} style={{ opacity }} />
    </Container>
  )
}

const Highlight = styled(motion.div, {
  base: {
    backgroundColor: VEND_GREEN,
  },
  defaultVariants: {
    vertical: false,
  },
  variants: {
    vertical: {
      false: {
        bottom: 0,
        height: 4,
        position: 'absolute',
        width: '100%',
      },
      true: {
        height: '100%',
        left: 0,
        position: 'absolute',
        top: 0,
        width: 4,
      },
    },
  },
})

const TabTrigger = styled(Ariakit.Tab, {
  base: {
    _active: {
      color: VEND_GREEN,
    },

    _hover: {
      _before: {
        backgroundColor: 'quaternary',
        bottom: 0,
        content: '',
        height: 4,
        left: 0,
        position: 'absolute',
        right: 0,
      },
      color: VEND_GREEN,
    },
    all: 'unset',
    cursor: 'pointer',
    flexShrink: 0,
    minHeight: 48,
    position: 'relative',
  },
})

interface TabProps extends ComponentProps<typeof TabTrigger> {
  isActive?: boolean
}

function Tab({ children, isActive, ref, ...rest }: TabProps) {
  return (
    <TabTrigger {...rest} ref={ref}>
      {children}
      {isActive && <Highlight layoutId="highlight" />}
    </TabTrigger>
  )
}

const TabList = styled(Ariakit.TabList, {
  base: {
    display: 'flex',
    gap: '16px 32px',
    margin: 0,
    marginBlockEnd: 'md',
    padding: 0,
    paddingInlineEnd: 'md',
    scrollbarColor: 'quaternary',
  },
})

const Container = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'md',
  },
})

function SkeletonContent() {
  const Layout = styled(motion.div, {
    base: {
      display: 'flex',
      gap: 'sm',
    },
  })

  const VStack = styled(Layout, {
    base: {
      flexDirection: 'column',
    },
  })

  const Block = styled('div', {
    base: {
      backgroundColor: 'quaternary',
      borderRadius: 'md',
    },
  })

  return (
    <motion.div
      animate={{ opacity: 0.5, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ damping: 18, stiffness: 165, type: 'spring' }}
    >
      <Layout>
        <Block css={{ height: 48, width: 48 }} />
        <VStack>
          <Block css={{ height: 12, width: 100 }} />
          <Block css={{ height: 12, width: 120 }} />
        </VStack>
      </Layout>
    </motion.div>
  )
}

const TabsContainer = styled('div', {
  base: {
    boxShadow: 'inset 0 -1px #c9c7ca',
    display: 'flex',
    flexDirection: 'row',
    marginBlockEnd: 'md',
  },
})

const ScrollContainer = styled('div', {
  base: {
    flexGrow: 1,
    marginBlockEnd: '-md',
    overflowX: 'scroll',
    scrollbarWidth: 'none',
  },
})

function Scroll({
  children,
  startElement,
  endElement,
}: {
  children: ReactNode
  startElement?: ReactNode
  endElement?: ReactNode
}) {
  const container = useRef<HTMLDivElement>(null)
  const { scrollX, scrollXProgress } = useScroll({ container })
  const overflowStartOpacity = useTransform(
    [scrollX, scrollXProgress],
    ([x, progress]: number[]) => (x > 0 && progress > 0 ? 1 : 0),
  )
  const overflowEndOpacity = useTransform(scrollXProgress, (x) =>
    x < 1 ? 1 : 0,
  )
  return (
    <TabsContainer>
      {startElement}
      <OverflowIndicator direction="start" opacity={overflowStartOpacity} />
      <ScrollContainer ref={container}>{children}</ScrollContainer>
      <OverflowIndicator direction="end" opacity={overflowEndOpacity} />
      {endElement}
    </TabsContainer>
  )
}

export function TabsExample() {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const tabs: TabItem[] = [
    { label: 'Inventory', value: 'inventory' },
    { label: 'Tax', value: 'tax' },
    { label: 'Price & Loyalty', value: 'price-loyalty' },
    { label: 'Select Images', value: 'select-images' },
    { label: 'RACS', value: 'racs' },
  ]

  const [tabValue, setTabValue] = useState<string>(tabs[0].value)
  const tabsRef = useRef<HTMLDivElement | null>(null)

  const onChange = (value: string) => {
    setTabValue(value)
    const index = tabs.findIndex((tab) => tab.value === value)
    if (index < 0) return
    const tab = tabRefs.current[index]
    tab?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }

  // Ariakit tab store controlled by tabValue
  const tabStore = Ariakit.useTabStore({
    selectedId: tabValue,
    setSelectedId: (id) => setTabValue(id ?? tabs[0].value),
  })

  return (
    <Container className={lato.className}>
      <Ariakit.TabProvider store={tabStore}>
        <Scroll
          endElement={
            <TabsMenu activeTab={tabValue} onChange={onChange} tabs={tabs} />
          }
        >
          <TabList ref={tabsRef}>
            {tabs.map(({ value, label }, i) => (
              <Tab
                id={value}
                isActive={value === tabValue}
                key={value}
                ref={(el) => {
                  tabRefs.current[i] = el
                }}
              >
                {label}
              </Tab>
            ))}
          </TabList>
        </Scroll>
        <Ariakit.TabPanel key={tabValue} tabId={tabValue}>
          <SkeletonContent />
        </Ariakit.TabPanel>
      </Ariakit.TabProvider>
    </Container>
  )
}
