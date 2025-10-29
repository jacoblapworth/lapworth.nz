'use client'

import { useEffect, useState } from 'react'
import { css } from '@/styled/css'
import { styled } from '@/styled/jsx'

export interface TocItem {
  depth: number
  id: string
  title: string
  children?: TocItem[]
}

interface TableOfContentsProps {
  items: TocItem[]
}

const TocNav = styled('nav', {
  base: {
    '@media (min-width: 1200px)': {
      display: 'block',
    },
    display: 'none',
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
    '&::before': {
      backgroundColor: 'transparent',
      bottom: 0,
      content: '""',
      left: 0,
      position: 'absolute',
      top: 0,
      transition: 'background-color 0.2s',
      width: '2px',
    },
    '&:hover': {
      color: 'text.primary',
    },
    '&.active': {
      '&::before': {
        backgroundColor: 'text.primary',
      },
      color: 'text.primary',
      fontWeight: 'medium',
    },
    color: 'text.secondary',
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
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0,
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

function getItemIds(items: TocItem[]): string[] {
  const ids: string[] = []
  for (const item of items) {
    ids.push(item.id)
    if (item.children) {
      ids.push(...getItemIds(item.children))
    }
  }
  return ids
}

function TocItems({ items, activeId }: { items: TocItem[]; activeId: string }) {
  return (
    <>
      {items.map((item) => (
        <li key={item.id}>
          <TocLink
            className={activeId === item.id ? 'active' : ''}
            href={`#${item.id}`}
          >
            {item.title}
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
      <div
        className={css({
          color: 'text.secondary',
          fontSize: 'xs',
          fontWeight: 'semibold',
          marginBottom: 'sm',
          textTransform: 'uppercase',
        })}
      >
        On this page
      </div>
      <TocList>
        <TocItems activeId={activeId} items={items} />
      </TocList>
    </TocNav>
  )
}
