import * as stylex from '@stylexjs/stylex'
import * as Ariakit from '@ariakit/react'
import { XIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { cva, styled } from '@/stylex'
import { borderRadius, semanticColors } from '@/stylex/theme.stylex'
import { Menu, MenuItemRadio, MenuProvider } from './Menu'

const pillStyles = stylex.create({
  base: {
    alignItems: 'stretch',
    backgroundColor: semanticColors.background.primary.default,
    borderColor: semanticColors.border.subtle,
    borderRadius: borderRadius.md,
    borderStyle: 'solid',
    borderWidth: '1px',
    display: 'inline-flex',
    fontSize: '13px',
    lineHeight: '1.2',
  },
})

const PillStyles = cva({
  base: pillStyles.base,
})

const labelStyles = stylex.create({
  default: {
    fontWeight: '500',
    paddingBlock: '6px',
    paddingInline: '8px',
  },
})

const Label = styled('span', {
  base: labelStyles.default,
})

const valueStyles = stylex.create({
  default: {
    borderLeftColor: semanticColors.border.subtle,
    borderLeftStyle: 'solid',
    borderLeftWidth: '1px',
    color: semanticColors.action.default,
    cursor: 'pointer',
    paddingBlock: '4px',
    paddingInline: '8px',
    backgroundColor: {
      default: 'transparent',
      ':hover': semanticColors.background.secondary,
    },
  },
})

const Value = styled('button', {
  base: valueStyles.default,
})

const removeButtonStyles = stylex.create({
  default: {
    borderEndEndRadius: borderRadius.md,
    borderEndStartRadius: borderRadius.md,
    borderLeftColor: semanticColors.border.subtle,
    borderLeftStyle: 'solid',
    borderLeftWidth: '1px',
    cursor: 'pointer',
    padding: '4px',
    backgroundColor: {
      default: 'transparent',
      ':hover': semanticColors.background.secondary,
    },
  },
})

const RemoveButton = styled(
  'button',
  {
    base: removeButtonStyles.default,
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
