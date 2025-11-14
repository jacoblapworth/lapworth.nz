# Dark Mode Color Palette

This document shows the complete color mapping between light and dark modes in the Xero package.

## Backgrounds

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `background.primary` | `#FFFFFF` | `#081F33` |
| `background.secondary` | `#F6F6F8` | `#0F1621` |
| `background.tertiary` | `#EFF0F3` | `#1A2231` |
| `background.quaternary` | `#E1E2E5` | `#2A3142` |
| `background.neutral` | `#F6F6F8` | `#1A1F2E` |
| `background.inform` | `#F0F9FE` | `#0D2940` |
| `background.positive` | `#F0FBF3` | `#0F2E1C` |
| `background.negative` | `#FFF6F7` | `#3D1A1F` |
| `background.warning` | `#FEF8E4` | `#3D2E0F` |

## Text Colors

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `text.primary` | `#1E3145` | `#E1E4E8` |
| `text.muted` | `#424F60` | `#A6ACB5` |
| `text.faint` | `#616B7A` | `#9198A1` |
| `text.inverse` | `#FFF` | `#1E3145` |

## Action Colors (Buttons, Links)

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `action` | `#1F68DD` | `#5BA3FF` |
| `action.hover` | `#184390` | `#6BB0FF` |
| `action.active` | `#1C5DC5` | `#4A90E2` |
| `action.focus` | `#1C5DC5` | `#4A90E2` |
| `action.disabled` | `#828995` | `#5A6270` |

## Status Colors

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `inform` | `#1F68DD` | `#5BA3FF` |
| `positive` | `#0F7B3D` | `#5EC689` |
| `negative` | `#C31230` | `#FF5B7A` |
| `warning` | `#BB421F` | `#FF9B6B` |

## Borders

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `border.subtle` | `#CFD1D5` | `#343B4A` |
| `border.soft` | `#E1E2E5` | `#2A3142` |
| `border.regular` | `#A6AAB1` | `#3D4452` |
| `border.strong` | `#828995` | `#4D5563` |

## Icons

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `icon` | `#1E3145` | `#E1E4E8` |
| `icon.muted` | `#424F60` | `#A6ACB5` |
| `icon.faint` | `#616B7A` | `#9198A1` |
| `icon.inverse` | `#FFF` | `#1E3145` |

## Design Principles

The dark mode color palette follows these principles:

1. **Contrast**: Maintains WCAG AA compliance for text readability
2. **Hierarchy**: Uses different shades to establish visual hierarchy
3. **Consistency**: Action colors remain recognizable across modes
4. **Comfort**: Reduced brightness for extended viewing
5. **Depth**: Multiple background layers create depth without harsh borders

## Color Selection Rationale

- **Primary Background (`#081F33`)**: Deep navy provides comfortable base while maintaining enough contrast with text
- **Text Primary (`#E1E4E8`)**: Light gray provides excellent readability without harsh pure white
- **Action Colors**: Brighter blues (`#5BA3FF`) ensure visibility and accessibility
- **Status Colors**: Adjusted for better contrast while maintaining semantic meaning
- **Borders**: Subtle grays that define boundaries without overwhelming the interface
