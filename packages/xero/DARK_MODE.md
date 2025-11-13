# Dark Mode Support

The Xero package now includes full dark mode support for all components.

## Usage

Dark mode can be activated in three ways:

### 1. Using `data-theme` attribute (Recommended)
```tsx
<div data-theme="dark">
  <Panel>This content will be displayed in dark mode</Panel>
</div>
```

### 2. Using `.dark` class
```tsx
<div className="dark">
  <Panel>This content will be displayed in dark mode</Panel>
</div>
```

### 3. Using nested `.dark` class
```tsx
<div className="dark">
  <Panel>Everything inside will be in dark mode</Panel>
  <Button variant="primary">Dark mode button</Button>
</div>
```

## Example Implementation

```tsx
'use client'

import { Button, Panel } from '@lapworth/xero'
import { useState } from 'react'

export function DarkModeExample() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div data-theme={isDark ? 'dark' : 'light'}>
      <Button onClick={() => setIsDark(!isDark)}>
        Toggle {isDark ? 'Light' : 'Dark'} Mode
      </Button>
      <Panel>
        <p>This panel will switch between light and dark mode</p>
      </Panel>
    </div>
  )
}
```

## Supported Components

All Xero components support dark mode out of the box:
- Buttons (all variants)
- Form controls (TextInput, Select, Checkbox, Toggle, Search)
- Panels
- Tags & FilterPills
- Labels
- Tooltips
- Menus
- DataGrid
- And all other components

## Color System

The dark mode uses carefully chosen colors to maintain:
- **Readability**: High contrast between text and backgrounds
- **Accessibility**: WCAG AA compliant contrast ratios
- **Consistency**: All components follow the same color palette

### Key Dark Mode Colors

- **Background Primary**: `#081F33` (Dark navy)
- **Background Secondary**: `#0F1621` (Darker)
- **Text Primary**: `#E1E4E8` (Light gray)
- **Action Color**: `#5BA3FF` (Brighter blue for better visibility)
- **Borders**: Darker grays for subtle separation

## Testing

To test dark mode implementation, visit the demo page at:
`/work/xero/dark-mode-demo`

This page demonstrates all components in both light and dark modes with a toggle button.
