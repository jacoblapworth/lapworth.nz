import * as Ariakit from '@ariakit/react'
import { XIcon } from 'lucide-react'
import { isValidMotionProp, motion } from 'motion/react'
import { cva } from '@/styled/css'
import { css } from '@/styled/css/css'
import { HStack, isCssProperty, styled } from '@/styled/jsx'
import { Menu, MenuButton, MenuItemRadio, MenuProvider } from './Menu'

const PillStyles = cva({
  base: {
    alignItems: 'stretch',
    backgroundColor: 'background.primary',
    borderColor: 'border.subtle',
    borderRadius: 6,
    borderStyle: 'solid',
    borderWidth: 1,
    display: 'inline-flex',
    fontSize: 13,
    lineHeight: '1.2',
    // overflow: 'hidden',
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
      backgroundColor: 'background.secondary',
    },
    borderLeftColor: 'border.subtle',
    borderLeftStyle: 'solid',
    borderLeftWidth: 1,
    color: 'action',
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
        backgroundColor: 'background.secondary',
      },

      borderEndRadius: 6,
      borderLeftColor: 'border.subtle',
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
  selectedOperatorId?: string
  onOperatorChange?: (operator: string) => void
  selectedValueId: string
  values: { id: string; label: string }[]
  onRemove: () => void
  operators?: { id: string; label: string }[]
  onValueChange: (valueId: string) => void
}

export function FilterPill({
  label,
  onRemove,
  selectedOperatorId,
  operators,
  selectedValueId,
  values,
  onValueChange,
  onOperatorChange,
}: Props) {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1, width: 'auto', y: 0 }}
      className={PillStyles()}
      exit={{ opacity: 0, y: -8 }}
      initial={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <Label key="label">{label}</Label>
      {selectedOperatorId && onOperatorChange && operators && (
        <MenuProvider
          defaultValues={{ operator: selectedOperatorId }}
          setValues={(e) => onOperatorChange(e.operator)}
        >
          <Ariakit.MenuButton render={<Value />}>
            {selectedOperatorId}
          </Ariakit.MenuButton>
          <Menu>
            {operators.map(({ id, label }) => (
              <MenuItemRadio key={id} name="operator" value={id}>
                {label}
              </MenuItemRadio>
            ))}
          </Menu>
        </MenuProvider>
      )}

      <MenuProvider
        defaultValues={{ value: selectedValueId }}
        setValues={(e) => onValueChange(e.value)}
      >
        <Ariakit.MenuButton render={<Value key="value" />}>
          {selectedValueId}
        </Ariakit.MenuButton>
        <Menu>
          {values.map(({ id, label }) => (
            <MenuItemRadio key={id} name="value" value={id}>
              {label}
            </MenuItemRadio>
          ))}
        </Menu>
      </MenuProvider>
      <RemoveButton onClick={onRemove} />
    </motion.div>
  )
}
