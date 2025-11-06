'use client'

import * as Ariakit from '@ariakit/react'
import { ChevronDownIcon } from 'lucide-react'
import { matchSorter } from 'match-sorter'
import { type MotionValue, motion, useScroll, useTransform } from 'motion/react'
import { Lato } from 'next/font/google'
import {
  type ComponentProps,
  type ReactNode,
  startTransition,
  useMemo,
  useRef,
  useState,
} from 'react'
import { styled } from '@/styled/jsx'

const VEND_GREEN = '#41AF4B'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const MenuButton = styled(Ariakit.MenuButton, {
  base: {
    _expanded: {
      backgroundColor: 'surfaceHovered',
    },
    _focusVisible: {
      outlineColor: '#008AE8',
      outlineOffset: 1,
      outlineStyle: 'solid',
      outlineWidth: 2,
    },
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
    display: 'flex',
    flexDirection: 'column',
    fontFamily: lato.style.fontFamily,
    maxHeight: 'min(var(--popover-available-height, 300px), 300px)',
    minWidth: 200,
    overflow: 'visible',
    overscrollBehavior: 'contain',
    zIndex: '4',
  },
})

const Combobox = styled(Ariakit.Combobox, {
  base: {
    _focusVisible: {
      boxShadow: '0 0 2px 1px #008AE8',
      outlineColor: '#008AE8',
      outlineOffset: -1,
      outlineStyle: 'solid',
      outlineWidth: 2,
    },
    borderColor: 'quaternary',
    borderRadius: 3,
    borderStyle: 'solid',
    borderWidth: 1,
    marginBlock: 'sm',
    marginInline: 'sm',
    padding: 'sm',
  },
})

const ComboboxList = styled(Ariakit.ComboboxList, {
  base: {
    borderTopColor: 'quaternary',
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    overflow: 'auto',
    overscrollBehavior: 'contain',
    paddingBlock: 'sm',
  },
})

const ComboboxItem = styled(Ariakit.ComboboxItem, {
  base: {
    _activeItem: {
      backgroundColor: 'surfaceHovered',
      color: VEND_GREEN,
    },
    _focusVisible: {
      outline: 'none',
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
  onChange: (activeId: string | null | undefined) => void
  activeTab?: string
}

function TabsMenu({ tabs, onChange, activeTab }: DropdownMenuProps) {
  const [searchValue, setSearchValue] = useState('')
  const matches = useMemo(() => {
    return matchSorter(tabs, searchValue, {
      keys: ['label'],
    })
  }, [searchValue])

  return (
    <Ariakit.ComboboxProvider
      resetValueOnHide
      setValue={(value) => {
        startTransition(() => {
          setSearchValue(value)
        })
      }}
    >
      <Ariakit.MenuProvider>
        <MenuButton>
          All
          <ChevronDownIcon size={16} />
        </MenuButton>
        <Menu gutter={0} portal>
          <Combobox autoSelect placeholder="Search..." />
          <ComboboxList>
            {matches.map(({ value, label }) => (
              <ComboboxItem
                focusOnHover
                isActive={activeTab === value}
                key={value}
                onClick={() => onChange(value)}
                setValueOnClick={false}
                value={value}
              >
                {activeTab === value && <Highlight vertical />}
                {label}
              </ComboboxItem>
            ))}
          </ComboboxList>
          <MenuArrow height={8} width={16} />
        </Menu>
      </Ariakit.MenuProvider>
    </Ariakit.ComboboxProvider>
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
    _activeItem: {
      color: VEND_GREEN,
    },

    _before: {
      backgroundColor: 'surfaceHovered',
      borderRadius: 6,
      bottom: 8,
      content: '""',
      left: -8,
      opacity: 0,
      position: 'absolute',
      right: -8,
      top: 8,
      transition: 'opacity 0.3s',
      zIndex: -1,
    },

    _focusVisible: {
      _before: {
        opacity: 1,
      },
    },

    _hover: {
      _after: {
        backgroundColor: 'black/10',
        bottom: 0,
        content: '""',
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
    zIndex: 1,
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
    borderBottom: 'solid 1px #c9c7ca',
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

const TabPanel = styled(Ariakit.TabPanel, {
  base: {
    _focusVisible: {
      outline: 'none',
    },
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

interface Props {
  tabs: TabItem[]
}

export function TabsExample({ tabs }: Props) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [tabValue, setTabValue] = useState<string>(tabs[0].value)
  const tabsRef = useRef<HTMLDivElement | null>(null)

  const onChange = (value: string | null | undefined) => {
    if (!value) return
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
    setSelectedId: (id) => {
      if (!id) return
      setTabValue(id)
    },
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
        <TabPanel key={tabValue} tabId={tabValue}>
          <SkeletonContent />
        </TabPanel>
      </Ariakit.TabProvider>
    </Container>
  )
}
