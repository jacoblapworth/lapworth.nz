'use client'

import {
  ComponentProps,
  forwardRef,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { CaretDownIcon } from '@radix-ui/react-icons'
import * as RadixTabs from '@radix-ui/react-tabs'
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion'
import { Lato } from 'next/font/google'

import { styled } from 'styled/jsx'

import { ResponsivePreview } from '@/components/Preview'

const VEND_GREEN = '#41AF4B'

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const DropdownTrigger = styled('button', {
  base: {
    all: 'unset',
    color: '#7191A6',
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    paddingInline: 'md',
  },
})

const DropdownPortal = styled(DropdownMenu.Portal, {
  base: {
    zIndex: '4',
  },
})

const DropdownMenuArrow = styled(DropdownMenu.Arrow, {
  base: {
    fill: 'surface',
  },
})

const DropdownContent = styled(DropdownMenu.Content, {
  base: {
    backgroundColor: 'surface',
    // filter: 'drop-shadow(0 4px 5px rgba(0,0,0,.35))',
    boxShadow: '0 4px 5px rgba(0,0,0,.35)',
    borderRadius: 5,
    zIndex: '4',
    overflow: 'hidden',
    paddingBlock: 'md',
    minWidth: 200,
    fontFamily: lato.style.fontFamily,
  },
})

const DropdownItem = styled(DropdownMenu.Item, {
  base: {
    cursor: 'pointer',
    padding: 'md',
    zIndex: '4',
    _highlighted: {
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
  // ref: RefObject<HTMLButtonElement>
}

interface DropdownMenuProps {
  tabs: TabItem[]
  onChange: (value: string) => void
  activeTab?: string
}

function TabOverflowDropdownMenu({
  tabs,
  onChange,
  activeTab,
}: DropdownMenuProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <DropdownTrigger
        // className={lato.className}
        >
          <CaretDownIcon /> All
        </DropdownTrigger>
      </DropdownMenu.Trigger>
      <DropdownPortal>
        <DropdownContent sideOffset={0} alignOffset={0} align="start">
          {tabs.map(({ value, label }) => (
            <DropdownItem
              key={value}
              onSelect={() => {
                onChange(value)
              }}
              isActive={activeTab == value}
            >
              {activeTab == value && <Highlight vertical />}
              {label}
            </DropdownItem>
          ))}
          <DropdownMenuArrow width={16} height={8} />
        </DropdownContent>
      </DropdownPortal>
    </DropdownMenu.Root>
  )
}

interface OverflowIndicatorProps {
  direction: 'start' | 'end'
  opacity: MotionValue
}

function OverflowIndicator({ direction, opacity }: OverflowIndicatorProps) {
  const Indicator = styled(motion.div, {
    base: {
      height: '100%',
      overflow: 'hidden',
      position: 'absolute',
      zIndex: '3',
      width: 30,
      transition: 'opacity .2s ease 0s',
      userSelect: 'none',
      pointerEvents: 'none',

      _before: {
        borderRadius: '100%',
        boxShadow: '0 0 30px rgba(0, 0, 0, 0.35)',
        content: '',
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

const TabTrigger = styled(RadixTabs.Trigger, {
  base: {
    all: 'unset',
    position: 'relative',
    cursor: 'pointer',
    flexShrink: 0,
    minHeight: 48,
    marginBlockEnd: 'md',

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

const Tab = forwardRef<HTMLButtonElement, TabProps>(function Tab(
  { children, isActive, ...rest },
  ref,
) {
  return (
    <TabTrigger {...rest} ref={ref}>
      {children}
      {isActive && <Highlight layoutId="highlight" />}
    </TabTrigger>
  )
})

const TabsList = styled(RadixTabs.List, {
  base: {
    display: 'flex',
    margin: 0,
    padding: 0,
    gap: '16px 32px',
    paddingInlineEnd: 'md',
    scrollbarColor: 'quaternary',
  },
})

const TabsRoot = styled(RadixTabs.Root, {
  base: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: `0 2px 10px token(colors.primary)`,
  },
})

const TabsContainer = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'row',
    boxShadow: 'inset 0 -1px #c9c7ca',
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

const ScrollContainer = styled('div', {
  base: {
    overflowX: 'scroll',
    marginBlockEnd: '-md',
  },
})

export function TabsExample() {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const tabs: TabItem[] = [
    { value: '1', label: 'Inventory' },
    { value: '2', label: 'Tax' },
    { value: '3', label: 'Price & Loyalty' },
    { value: '4', label: 'Select Images' },
    { value: '5', label: 'RACS' },
  ]

  const [tabValue, setTabValue] = useState<string>(tabs[0].value)
  const scrollRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef(null)
  const { scrollX, scrollXProgress } = useScroll({ container: scrollRef })

  const startTransformer = ([x, progress]: number[]) =>
    x > 0.1 && progress > 0.1 ? 1 : 0

  const overflowStartOpacity = useTransform(
    [scrollX, scrollXProgress],
    startTransformer,
  )
  const overflowEndOpacity = useTransform(scrollXProgress, (v) =>
    v < 1 ? 1 : 0,
  )

  const onChange = (value: string) => {
    setTabValue(value)
    const index = tabs.findIndex((tab) => tab.value == value)
    if (index < 0) return
    tabRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }

  // useLayoutEffect(() => {
  //   return () => {}
  // }, [scrollRef, tabRefs])

  const isOverflow = true

  return (
    <ResponsivePreview>
      <TabsRoot
        value={tabValue}
        onValueChange={onChange}
        css={{ margin: 'md' }}
      >
        <TabsContainer
          css={{ marginBlockEnd: 'lg' }}
          className={lato.className}
        >
          <OverflowIndicator direction="start" opacity={overflowStartOpacity} />
          <ScrollContainer ref={scrollRef}>
            <TabsList ref={tabsRef}>
              {tabs.map(({ value, label }, i) => (
                <Tab
                  key={value}
                  value={value}
                  isActive={value == tabValue}
                  ref={(el) => (tabRefs.current[i] = el)}
                >
                  {label}
                </Tab>
              ))}
            </TabsList>
          </ScrollContainer>
          <OverflowIndicator direction="end" opacity={overflowEndOpacity} />
          {isOverflow && (
            <TabOverflowDropdownMenu
              tabs={tabs}
              onChange={onChange}
              activeTab={tabValue}
            />
          )}
        </TabsContainer>
        <SkeletonContent />
      </TabsRoot>
    </ResponsivePreview>
  )
}

export default TabsExample
