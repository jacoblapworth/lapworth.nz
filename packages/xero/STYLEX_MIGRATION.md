# StyleX Migration for Xero Package

This document tracks the migration from panda-css to StyleX for the @lapworth/xero package.

## Completed Work

### 1. StyleX Dependencies (✅ Complete)
- Installed `@stylexjs/stylex` v0.16.3
- Installed `@stylexjs/cli` v0.16.3 for build process
- Removed `@pandacss/dev` and `@pandacss/types`
- Updated package.json exports to point to `./dist/stylex.css`

### 2. StyleX Utility Functions (✅ Complete)
Created StyleX equivalents for panda-css utilities in `src/stylex/`:

- **`utils.ts`**: Core utilities
  - `styled()` - Factory function for creating styled components with variants
  - `cva()` - Component Variant API for variant-based styling
  - `css()` - Helper to convert StyleX styles to className
  
- **`jsx.tsx`**: Layout primitives
  - `Box` - Generic container
  - `HStack` - Horizontal stack layout
  - `VStack` - Vertical stack layout
  - `Stack` - Configurable stack with direction variant

- **`theme.stylex.ts`**: Design tokens using dot notation
  - Color tokens (e.g., `colors['grey.1']`, `colors['grey.alpha.6']`)
  - Semantic colors (e.g., `semanticColors['action.default']`, `semanticColors['background.primary.default']`)
  - Font tokens (fonts, fontSizes, fontWeights, lineHeights)
  - Spacing, border radius, shadows, z-index
  - Animation keyframes (loader, rotate)

- **`textStyles.ts`**: Typography styles
  - Body text styles (small, medium, large × regular, semibold)
  - Button text styles
  - Heading styles (xsmall through 4xlarge)

- **`index.ts`**: Central export file

### 3. Migrated Components (✅ 9/31 Complete)
The following components have been successfully migrated to StyleX:

1. **SrOnly.tsx** - Screen reader only text
2. **Spinner.tsx** - Loading spinner with animations
3. **Heading.tsx** - Typography heading component with size variants
4. **Tag.tsx** - Status/category tags with variant styles
5. **Label.tsx** - Form label with cva styling
6. **Button.tsx** - Button component with size/variant combinations
7. **Checkbox.tsx** - Checkbox with checked states
8. **FilterPill.tsx** - Removable filter pills
9. **BulkActions.tsx** - Bulk action bar with layout

### 4. Token Access Pattern (✅ Complete)
Using dot notation for accessing tokens as requested:
```typescript
// ✅ Correct - using bracket notation with dots
semanticColors['action.default']
semanticColors['background.primary.default']
colors['grey.alpha.6']
```

## Remaining Work

### 5. Components to Migrate (⏳ 22 remaining)
Need to migrate these components from panda-css to StyleX:

1. **ColumnSizing.tsx** - Column resizing handlers
2. **Controls.tsx** - Data table controls
3. **DataCell.tsx** - Table cell component
4. **DataEditableCell.tsx** - Editable table cell
5. **DataFiltersToggle.tsx** - Filter visibility toggle
6. **DataGrid.tsx** - Main data grid/table (complex)
7. **Filters.tsx** - Filter components
8. **Form.tsx** - Form wrapper
9. **FormExample.tsx** - Form example
10. **HeadMenu.tsx** - Table header menu
11. **Menu.tsx** - Dropdown menu component
12. **Pagination.tsx** - Pagination controls
13. **Panel.tsx** - Panel/card component
14. **ScrollContainer.tsx** - Scrollable container
15. **Search.tsx** - Search input
16. **Select.tsx** - Select dropdown
17. **Table.tsx** - Base table component
18. **TextInput.tsx** - Text input field
19. **Tooltip.tsx** - Tooltip component
20. **ViewTab.tsx** - View tab component
21. **ViewsTabList.tsx** - Tab list container
22. **Cells.tsx** - Additional cell components

### 6. Build Configuration (⏳ Pending)
- Test the StyleX CLI build command: `pnpm run build`
- Verify generated `dist/stylex.css` file
- Ensure CSS is properly extracted and optimized

### 7. Testing & Validation (⏳ Pending)
- Run type checking: `pnpm run types:check`
- Fix any remaining TypeScript errors
- Run linting: `pnpm run format`
- Test components in consuming applications

### 8. Cleanup (⏳ Pending)
- Remove `panda.config.ts`
- Remove `.styled/` directory
- Remove old theme files:
  - `src/theme/global.ts`
  - `src/theme/tokens.ts`
  - `src/theme/text.ts`
  - `src/theme/index.ts`
- Update documentation

## Migration Patterns

### Pattern 1: Simple Styled Component
```typescript
// Before (panda-css)
import { styled } from '@/styled/jsx'

export const Tag = styled('span', {
  base: {
    backgroundColor: 'background.neutral',
    color: 'text.primary',
  },
})

// After (StyleX)
import * as stylex from '@stylexjs/stylex'
import { styled } from '@/stylex'
import { semanticColors } from '@/stylex/theme.stylex'

const styles = stylex.create({
  base: {
    backgroundColor: semanticColors['background.neutral'],
    color: semanticColors['text.primary'],
  },
})

export const Tag = styled('span', {
  base: styles.base,
})
```

### Pattern 2: Component with CVA
```typescript
// Before (panda-css)
import { cva } from '@/styled/css'

export const LabelStyles = cva({
  base: {
    display: 'inline-flex',
    textStyle: 'body.medium.semibold',
  },
})

// After (StyleX)
import * as stylex from '@stylexjs/stylex'
import { cva } from '@/stylex'
import { textStyles } from '@/stylex/textStyles'

const labelStyles = stylex.create({
  default: {
    display: 'inline-flex',
    ...textStyles.body.medium.semibold.default,
  },
})

export const LabelStyles = cva({
  base: labelStyles.default,
})
```

### Pattern 3: Layout with Inline Props
```typescript
// Before (panda-css)
<HStack gap={8} padding={8} borderBottomWidth={1}>
  {children}
</HStack>

// After (StyleX)
const styles = stylex.create({
  container: {
    gap: '8px',
    padding: '8px',
    borderBottomWidth: '1px',
  },
})

<HStack {...stylex.props(styles.container)}>
  {children}
</HStack>
```

### Pattern 4: Pseudo-states
```typescript
// Before (panda-css)
{
  _hover: { backgroundColor: 'background.tertiary' },
  _active: { backgroundColor: 'background.quaternary' },
}

// After (StyleX)
{
  backgroundColor: {
    default: 'transparent',
    ':hover': semanticColors['background.tertiary'],
    ':active': semanticColors['background.quaternary'],
  },
}
```

## Notes

- StyleX's `defineVars` doesn't support nested objects, so we use dot notation strings (e.g., `'action.default'`)
- Access tokens using bracket notation: `semanticColors['action.default']`
- StyleX doesn't have direct textStyle support - merge text styles into component styles
- Pseudo-classes use object syntax with `:hover`, `:active`, etc. as keys
- Inline props pattern changes from prop-based to StyleX `props()` spreading

## Next Steps

1. Continue migrating remaining 22 components following the patterns above
2. Test build process with StyleX CLI
3. Verify all TypeScript types are correct
4. Run full linting and type checking
5. Clean up old panda-css configuration and files
6. Update documentation and examples
