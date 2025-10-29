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
    gap: 'xs',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
})

const TocLink = styled('a', {
  base: {
    _active: {
      _before: {
        backgroundColor: 'primary',
      },
      //   color: 'primary',
      //   fontWeight: 'medium',
    },
    _before: {
      // _active: {
      //   backgroundColor: 'primary',
      // },
      backgroundColor: 'transparent',
      bottom: 0,
      content: '""',
      left: 0,
      position: 'absolute',
      top: 0,
      transition: 'background-color 0.2s',
      width: '2px',
    },
    _hover: {
      backgroundColor: 'surface',
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
    transition: 'color 0.2s',
  },
})

const NestedList = styled(TocList, {
  base: {
    marginTop: 'xs',
    paddingLeft: 'md',
  },
})

function useActiveId(itemIds: string[]) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting entry (closest to top of viewport)
        const intersectingEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (intersectingEntries.length > 0) {
          setActiveId(intersectingEntries[0].target.id)
        }
      },
      {
        rootMargin: '-100px 0px -66% 0px',
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

  return activeId
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

function TocItems({ items, activeId }: { items: Toc; activeId: string }) {
  return (
    <>
      {items.map((item) => (
        <li key={item.id || item.value}>
          <TocLink
            data-active={activeId === item.id ? 'true' : 'false'}
            href={`#${item.id}`}
          >
            {item.value}
          </TocLink>
          {item.children && item.children.length > 0 && (
            <NestedList>
              <TocItems activeId={activeId} items={item.children} />
            </NestedList>
          )}
        </li>
      ))}
    </>
  )
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const itemIds = getItemIds(items)
  const activeId = useActiveId(itemIds)

  if (!items || items.length === 0) {
    return null
  }

  return (
    <TocNav aria-label="Table of contents">
      <TocList>
        <TocItems activeId={activeId} items={items} />
      </TocList>
    </TocNav>
  )
}
