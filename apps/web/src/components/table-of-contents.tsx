'use client'

import type { Toc } from '@stefanprobst/rehype-extract-toc'
import { useEffect, useState } from 'react'
import { styled } from '@/styled/jsx'

interface TableOfContentsProps {
  items: Toc
}

const TocNav = styled('nav', {
  base: {
    display: 'none',
    lg: {
      display: 'block',
    },
    maxHeight: 'calc(100vh - 2 * token(spacing.md))',
    overflowY: 'auto',
    position: 'sticky',
    top: 'md',
    width: '250px',
  },
})

const TocList = styled('ul', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
})

const TocListItem = styled('li', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    margin: 0,
    padding: 0,
  },
})

const TocLink = styled('a', {
  base: {
    _activeItem: {
      _before: {
        backgroundColor: 'primary',
      },
      color: 'primary',
      fontWeight: 'md',
    },
    _before: {
      backgroundColor: 'transparent',
      bottom: 0,
      content: '""',
      left: 0,
      position: 'absolute',
      top: 0,
      transitionDuration: 'md',
      transitionProperty: 'background-color',
      transitionTimingFunction: 'ease-in-out',
      width: '2px',
    },
    _hover: {
      _before: {
        backgroundColor: 'quaternary',
      },
      color: 'primary',
    },
    color: 'secondary',
    display: 'block',
    fontSize: 'sm',
    lineHeight: '1.5',
    paddingBlock: 'xs',
    paddingInlineStart: 'md',
    position: 'relative',
    textDecoration: 'none',
    transitionDuration: 'md',
    transitionProperty: 'color, background-color',
    transitionTimingFunction: 'ease-in-out',
  },

  variants: {
    depth: {
      1: {
        paddingInlineStart: 'lg',
      },
    },
  },
})

function useActiveIds(itemIds: string[]) {
  const [activeIds, setActiveIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setActiveIds((prev) => {
          const next = new Set(prev)
          for (const entry of entries) {
            if (entry.isIntersecting) {
              next.add(entry.target.id)
            } else {
              next.delete(entry.target.id)
            }
          }
          return next
        })
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    for (const id of itemIds) {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [itemIds])

  return activeIds
}

function getItemIds(items: Toc): string[] {
  const ids: string[] = []
  for (const item of items) {
    if (item.id) {
      ids.push(item.id)
    }
    if (item.children) {
      ids.push(...getItemIds(item.children))
    }
  }
  return ids
}

interface TocItemsProps {
  items: Toc
  activeIds: Set<string>
  depth?: number
}

function TocItems({ items, activeIds, depth = 0 }: TocItemsProps) {
  return (
    <>
      {items.map(({ id, value, children }) => (
        <TocListItem key={id || value}>
          <TocLink
            data-active-item={activeIds.has(id) ? 'true' : undefined}
            depth={depth}
            href={`#${id}`}
          >
            {value}
          </TocLink>
          {children && children.length > 0 && (
            <TocList>
              <TocItems
                activeIds={activeIds}
                depth={depth + 1}
                items={children}
              />
            </TocList>
          )}
        </TocListItem>
      ))}
    </>
  )
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const itemIds = getItemIds(items)
  const activeIds = useActiveIds(itemIds)

  if (!items || items.length === 0) {
    return null
  }

  return (
    <TocNav aria-label="Table of contents">
      <TocList>
        <TocItems activeIds={activeIds} items={items} />
      </TocList>
    </TocNav>
  )
}
