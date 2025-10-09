import * as Ariakit from '@ariakit/react'
import { XIcon } from 'lucide-react'
import { HStack, styled } from '@/styled/jsx'
import { Menu, MenuButton, MenuItemRadio, MenuProvider } from './Menu'

const Pill = styled('div', {
  base: {
    alignItems: 'stretch',
    backgroundColor: 'xero.background.primary',
    borderColor: 'xero.border.subtle',
    borderRadius: 6,
    borderStyle: 'solid',
    borderWidth: 1,
    display: 'inline-flex',
    fontSize: 13,
    lineHeight: '1.2',
    overflow: 'hidden',
  },
})

const Label = styled('span', {
  base: {
    fontWeight: '500',
    paddingBlock: 6,
    paddingInline: 8,
  },
})

const Value = styled('button', {
  base: {
    _hover: {
      backgroundColor: 'xero.background.secondary',
    },
    borderLeftColor: 'xero.border.subtle',
    borderLeftStyle: 'solid',
    borderLeftWidth: 1,
    color: 'xero.action',
    cursor: 'pointer',
    paddingBlock: 4,
    paddingInline: 8,
  },
})

const RemoveButton = styled(
  'button',
  {
    base: {
      _hover: {
        backgroundColor: 'xero.background.secondary',
      },
      borderLeftColor: 'xero.border.subtle',
      borderLeftStyle: 'solid',
      borderLeftWidth: 1,
      cursor: 'pointer',
      padding: 4,
    },
  },
  {
    defaultProps: {
      children: <XIcon size={16} />,
    },
  },
)

interface Props {
  label: string
  operator?: string
  value: string
  onRemove: () => void
}

export function FilterPill({ label, onRemove, operator, value }: Props) {
  return (
    <Pill>
      <Label>{label}</Label>
      {operator && (
        <MenuProvider>
          <Ariakit.MenuButton render={<Value />}>{operator}</Ariakit.MenuButton>
          <Menu>
            <MenuItemRadio name="operator" value="is">
              is
            </MenuItemRadio>
            <MenuItemRadio name="operator" value="not">
              is not
            </MenuItemRadio>
          </Menu>
        </MenuProvider>
      )}
      <Value>{value}</Value>
      <RemoveButton onClick={onRemove} />
    </Pill>
  )
}
