'use client'

import * as Ariakit from '@ariakit/react'
import {
  type MotionValue,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { ChevronDownIcon } from 'lucide-react'
import { Lato } from 'next/font/google'
import {
  type ComponentProps,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import { ResponsivePreview } from '@/components/Preview'
import { styled } from '@/styled/jsx'

const VEND_GREEN = '#41AF4B'

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const MenuButton = styled(Ariakit.MenuButton, {
  base: {
    all: 'unset',
    color: '#7191A6',
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    borderRadius: 'md',
    paddingInline: 'sm',
    paddingBlock: 'sm',
    marginInlineStart: 'sm',
    alignSelf: 'center',
    _hover: {
      backgroundColor: 'surfaceHovered',
    },
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
    boxShadow: '0 4px 5px rgba(0,0,0,.35)',
    borderRadius: 5,
    zIndex: '4',
    overflow: 'hidden',
    paddingBlock: 'md',
    minWidth: 200,
    fontFamily: lato.style.fontFamily,
  },
})

const MenuItem = styled(Ariakit.MenuItem, {
  base: {
    cursor: 'pointer',
    padding: 'md',
    zIndex: '4',
    _hover: {
      backgroundColor: 'surfaceHovered',
    },
    _active: {
      color: VEND_GREEN,
      backgroundColor: 'surfaceHovered',
    },
    display: 'flex',
    position: 'relative',
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
            key={value}
            onClick={() => onChange(value)}
            isActive={activeTab === value}
          >
            {activeTab === value && <Highlight vertical />}
            {label}
          </MenuItem>
        ))}
        <MenuArrow width={16} height={8} />
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
      '--width': '10px',
      height: '100%',
      overflow: 'hidden',
      position: 'absolute',
      zIndex: '3',
      width: 'var(--width)',
      transition: 'opacity .2s ease 0s',
      userSelect: 'none',
      pointerEvents: 'none',

      _before: {
        borderRadius: '100%',
        boxShadow: '0 0 var(--width) rgba(0, 0, 0, 0.35)',
        content: '""',
        height: '100%',
        position: 'absolute',
        width: '100%',
      },
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
  variants: {
    vertical: {
      true: {
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        width: 4,
      },
      false: {
        height: 4,
        position: 'absolute',
        bottom: 0,
        width: '100%',
      },
    },
  },
  defaultVariants: {
    vertical: false,
  },
})

const TabTrigger = styled(Ariakit.Tab, {
  base: {
    all: 'unset',
    position: 'relative',
    cursor: 'pointer',
    flexShrink: 0,
    minHeight: 48,

    _hover: {
      color: VEND_GREEN,
      _before: {
        content: '',
        backgroundColor: 'quaternary',
        height: 4,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      },
    },

    _active: {
      color: VEND_GREEN,
    },
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
    margin: 0,
    padding: 0,
    gap: '16px 32px',
    paddingInlineEnd: 'md',
    marginBlockEnd: 'md',
    scrollbarColor: 'quaternary',
  },
})

const TabsRoot = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'md',
    // boxShadow: `0 2px 10px token(colors.primary)`,
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
      borderRadius: 'md',
      backgroundColor: 'quaternary',
    },
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 0.5, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ type: 'spring', stiffness: 165, damping: 18 }}
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
    display: 'flex',
    flexDirection: 'row',
    boxShadow: 'inset 0 -1px #c9c7ca',
    marginBlockEnd: 'lg',
  },
})

const ScrollContainer = styled('div', {
  base: {
    overflowX: 'scroll',
    scrollbarWidth: 'thin',
    marginBlockEnd: '-md',
    flexGrow: 1,
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
    { value: 'inventory', label: 'Inventory' },
    { value: 'tax', label: 'Tax' },
    { value: 'price-loyalty', label: 'Price & Loyalty' },
    { value: 'select-images', label: 'Select Images' },
    { value: 'racs', label: 'RACS' },
  ]

  const [tabValue, setTabValue] = useState<string>(tabs[0].value)
  const tabsRef = useRef<HTMLDivElement | null>(null)

  const onChange = (value: string) => {
    setTabValue(value)
  }

  // Scroll active tab into view when selection changes
  useEffect(() => {
    const index = tabs.findIndex((tab) => tab.value === tabValue)
    if (index < 0) return
    tabRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }, [tabValue])

  // Ariakit tab store controlled by tabValue
  const tabStore = Ariakit.useTabStore({
    selectedId: tabValue,
    setSelectedId: (id) => setTabValue(id ?? tabs[0].value),
  })

  return (
    <ResponsivePreview>
      <TabsRoot className={lato.className}>
        <Ariakit.TabProvider store={tabStore}>
          <Scroll
            endElement={
              <TabsMenu tabs={tabs} onChange={onChange} activeTab={tabValue} />
            }
          >
            <TabList ref={tabsRef}>
              {tabs.map(({ value, label }, i) => (
                <Tab
                  key={value}
                  id={value}
                  isActive={value === tabValue}
                  ref={(el) => {
                    tabRefs.current[i] = el
                  }}
                >
                  {label}
                </Tab>
              ))}
            </TabList>
          </Scroll>
          <SkeletonContent />
        </Ariakit.TabProvider>
      </TabsRoot>
    </ResponsivePreview>
  )
}
