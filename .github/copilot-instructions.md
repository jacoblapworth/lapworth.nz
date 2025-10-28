# Copilot Instructions for lapworth.nz

## Project Overview

This is a personal portfolio website built as a monorepo using:
- **Package Manager**: pnpm@10.19.0
- **Monorepo Tool**: Turborepo
- **Runtime**: Node.js 24
- **Linter/Formatter**: Biome 2.2.6

## Repository Structure

This is a pnpm workspace monorepo with the following structure:

```
├── apps/
│   ├── web/          # Next.js web application (main site, includes main UI components)
│   └── worker/       # Cloudflare Worker
└── packages/
    └── xero/         # Xero design system examples and components
```

### Apps

- **web**: Next.js 16.0.0 application (using React 19.2.0) with:
  - MDX support for content
  - Panda CSS for styling
  - Cypress for E2E testing
  - Sentry for error tracking
  - PostHog for analytics
  - React Email for email templates
  
- **worker**: Cloudflare Worker with:
  - Vitest for testing
  - Wrangler for deployment

### Packages

- **xero**: Xero design system examples with:
  - Example React components (DataGrid, Table, etc.)
  - Panda CSS for styling
  - Used for Xero-specific UI patterns and examples

## Building the Project

### Prerequisites

Ensure you have Node.js 24 and pnpm 10.19.0 installed.

```bash
# Install pnpm if needed
npm install -g pnpm@10.19.0

# Install all dependencies
pnpm install
```

### Build Commands

```bash
# Build all packages and apps (uses Turborepo caching)
turbo run build

# Build specific workspace (recommended - uses caching)
turbo run build --filter=web
turbo run build --filter=worker

# Development mode
turbo run dev

# Start production server
turbo run start
```

**Note**: Prefer using `turbo run` commands instead of `pnpm --filter` to leverage Turborepo's caching and task orchestration. Root-level scripts like `pnpm run build` automatically use turbo.

## Testing

### Web App (Cypress E2E)

```bash
# Run Cypress tests
cd apps/web
pnpm cypress:run

# Open Cypress GUI
pnpm cypress:open
```

### Worker (Vitest)

```bash
cd apps/worker
pnpm test
```

## Linting and Formatting

This project uses **Biome** for both linting and formatting.

```bash
# Lint all code
pnpm run lint

# Lint for CI (with GitHub reporter)
pnpm lint:ci

# Format code (with --write flag)
pnpm run format
```

### Biome Configuration

- Located at `biome.json` in the root
- Uses 2-space indentation
- Line width: 80 characters
- Single quotes for JavaScript
- Semicolons: as needed
- Trailing commas: always
- Attributes should be sorted

## Type Checking

```bash
# Type check all workspaces
turbo run types:check

# Type check specific workspace
turbo run types:check --filter=web
```

## Coding Conventions

### General
- Follow the Biome configuration for code style
- Use TypeScript for all new code
- Organize imports alphabetically
- Sort object keys and JSX attributes

### React/Next.js (apps/web)
- Use functional components with hooks
- Prefer server components when possible (Next.js App Router)
- Use MDX for content pages
- Use Panda CSS for styling

### Component Library (packages/xero)
- Example components for Xero design patterns
- Export components from individual files
- Include TypeScript types for all props
- Use Panda CSS for styling

## Environment Variables

The web app requires several environment variables for full functionality:
- Managed via Vercel in production
- For local development, run: `cd apps/web && pnpm env`
- Required variables are documented in `turbo.json` under `globalEnv`

Key environment variables include:
- Apple Music API credentials
- Vercel Blob/KV tokens
- Sentry configuration
- PostHog analytics
- Resend email API
- Klaviyo API

## Monorepo Workflow

This project uses Turborepo for task orchestration:
- Tasks are defined in `turbo.json`
- Dependencies between tasks are handled automatically
- Remote caching is enabled via `TURBO_TOKEN`

### Running Commands Across Workspaces

```bash
# Run a command in all workspaces (uses Turborepo)
turbo run <task>

# Run task in specific workspace (recommended - uses caching)
turbo run <task> --filter=<workspace>

# For package management tasks, use pnpm
pnpm --filter <workspace> <command>
```

**Best Practice**: Use `turbo run` for all build, test, lint, and dev tasks to benefit from caching. Use `pnpm --filter` only for package management (installing dependencies, etc.).

## CI/CD

### GitHub Actions Workflow

The CI pipeline (`.github/workflows/main.yml`) runs:
1. **Build**: Builds all apps and packages
2. **Lint**: Runs Biome checks
3. **Test**: Runs Cypress E2E tests

### Required Secrets/Variables

Documented in `.github/CI_SETUP.md`:
- `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`
- `CYPRESS_RECORD_KEY`
- `TURBO_TOKEN`, `TURBO_TEAM`

## Content Management

The web app uses MDX for content:
- Content files are in the web app
- MDX is processed with various rehype/remark plugins
- Frontmatter is extracted for metadata

## Deployment

- **Web App**: Deploys to Vercel automatically
- **Worker**: Deploy via `turbo run deploy --filter=worker` or `cd apps/worker && pnpm deploy`

## Important Notes

- Always run `pnpm install` from the root of the monorepo
- Use `pnpm` commands, not `npm` or `yarn`
- Turborepo handles caching and task dependencies
- Biome replaces ESLint and Prettier
- The web app requires environment variables to build successfully
