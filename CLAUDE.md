# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Jacob Lapworth, built as a Next.js application with Turbo monorepo structure. The main application lives in `apps/web/` and showcases design work, experience, and personal projects.

## Development Commands

**Root level commands (using Turbo):**
- `pnpm dev` - Start development server
- `pnpm build` - Build the application 
- `pnpm lint` - Run linting across all packages
- `pnpm check-types` - Run TypeScript type checking

**Web app specific commands (in apps/web/):**
- `pnpm dev` - Start Next.js development server with Turbo
- `pnpm build` - Build the Next.js application
- `pnpm start` - Start production server
- `pnpm check-types` - TypeScript type checking
- `pnpm tokens` - Generate Panda CSS tokens
- `pnpm cypress:open` - Open Cypress for e2e testing
- `pnpm cypress:run` - Run Cypress tests headlessly
- `pnpm format` - Format code with Prettier

## Architecture Overview

**Styling System:**
- Uses Panda CSS as the CSS-in-JS solution
- Design tokens defined in `src/styles/tokens.ts`
- Global styles in `src/styles/global.ts`
- Run `pnpm tokens` to regenerate CSS tokens after changes
- Styles are imported from `.styled/` directory (auto-generated)

**Content Management:**
- MDX files for rich content (work case studies, recipes)
- Located in app route directories (e.g., `app/work/xero/`, `app/recipes/[slug]/`)
- Uses `@next/mdx` with remark-gfm for GitHub Flavored Markdown

**Key Dependencies:**
- Next.js 15 with App Router
- React 19 with experimental React Compiler
- Panda CSS for styling
- Framer Motion for animations
- Radix UI for accessible components
- Sentry for error monitoring
- Vercel Analytics and Speed Insights

**Project Structure:**
- `apps/web/src/app/` - Next.js App Router pages
- `apps/web/src/components/` - Reusable React components
- `apps/web/src/actions/` - Server actions
- `apps/web/src/lib/` - Utility functions and configurations
- `apps/web/src/styles/` - Design system tokens and global styles
- `apps/web/public/static/` - Static assets organized by project

**Build Process:**
1. `tokens` task runs first to generate Panda CSS
2. TypeScript compilation and type checking
3. Next.js build with MDX processing
4. Sentry source map upload in production

**Testing:**
- Cypress for e2e testing with configuration in `cypress.config.ts`
- Tests located in `cypress/e2e/`
- Accessibility and basic functionality tests included

**Environment Variables:**
- Managed through Turbo's global environment configuration
- Environment files: `.env`, `.env.local`, `.env.example`
- Key integrations: Apple Music, Sentry, Klaviyo, Resend, Vercel KV

**Theme System:**
- Light/dark mode support via `next-themes`
- Theme configuration in `src/components/Theme.tsx`
- Semantic color tokens that adapt to theme changes