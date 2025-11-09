# Storybook for Web App

This directory contains the Storybook configuration for the web app.

## Getting Started

### Development

To run Storybook in development mode:

```bash
# From the root of the monorepo
turbo run storybook --filter=web

# Or from the web app directory
cd apps/web
pnpm storybook
```

Storybook will start on http://localhost:6006

### Building

To build a static version of Storybook:

```bash
# From the root of the monorepo
turbo run build:storybook --filter=web

# Or from the web app directory
cd apps/web
pnpm build:storybook
```

The static build will be created in `apps/web/storybook-static/`

## Writing Stories

Stories are located alongside their components in the `src/components/` directory with the `.stories.tsx` extension.

Example story file:

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Click me',
  },
}
```

## Configuration

- **`.storybook/main.ts`**: Main Storybook configuration including addons and Vite setup
- **`.storybook/preview.ts`**: Global decorators, parameters, and styling

## Features

- ✅ React 19 support
- ✅ Panda CSS integration
- ✅ Path aliases (`@/`, `@/styled/`, `@/public/`)
- ✅ Auto-generated documentation
- ✅ Essential addons (Controls, Actions, Viewport, etc.)
- ✅ Interaction testing support

## Notes

- Stories use Vite for bundling (not Webpack)
- Panda CSS tokens must be generated before running Storybook (`pnpm tokens`)
- The `.styled` directory contains auto-generated Panda CSS files and is gitignored
