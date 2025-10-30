import { styled } from '@/styled/jsx'

const List = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'lg',
    listStyle: 'inside',
    marginBlock: 'lg',
    marginBlockEnd: 'md',
    maxWidth: 600,
    padding: 0,
  },
})

const Item = styled('div', {
  base: {
    _hover: {
      textDecoration: 'underline',
    },
    color: 'primary',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 'lg',
    gap: 'sm',
    textDecoration: 'none',
  },
})

const Cover = styled('div', {
  base: {
    aspectRatio: '16 / 9',
    backgroundColor: 'shadow',
    border: 'muted',
    // height: 200,
    width: '100%',
  },
})

export default function Loading() {
  return (
    <List>
      <Item>
        <Cover />
      </Item>
      <Item>
        <Cover />
      </Item>
      <Item>
        <Cover />
      </Item>
    </List>
  )
}
