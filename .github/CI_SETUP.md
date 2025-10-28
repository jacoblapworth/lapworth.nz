# CI Setup Guide

This document explains how the CI pipeline is configured and what secrets are required.

## Environment Variables

The CI workflow uses Vercel to manage environment variables for the web application. This approach centralizes environment variable management in Vercel, eliminating the need to duplicate them in GitHub.

### How It Works

1. Environment variables are configured in the Vercel project dashboard
2. During CI builds, the workflow uses the Vercel CLI to pull these variables
3. Variables are saved to `.env.local` in the web app directory
4. The build process automatically picks up these environment variables

### Required GitHub Secrets

To enable the Vercel environment variable integration, configure the following in the GitHub repository settings:

**Secrets** (Settings > Secrets and variables > Actions > Secrets):

| Secret Name | Description | How to Obtain |
|------------|-------------|---------------|
| `VERCEL_TOKEN` | Vercel authentication token | Create in [Vercel Account Settings > Tokens](https://vercel.com/account/tokens) |

**Variables** (Settings > Secrets and variables > Actions > Variables):

| Variable Name | Description | How to Obtain |
|------------|-------------|---------------|
| `VERCEL_ORG_ID` | Vercel organization/team ID | Found in Vercel project settings or by running `vercel link` locally and checking `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | Vercel project ID | Found in Vercel project settings or by running `vercel link` locally and checking `.vercel/project.json` |

### Additional Required Secrets

These secrets are still managed directly in GitHub:

- `CYPRESS_RECORD_KEY`: For Cypress test recording
- `TURBO_TOKEN`: For Turborepo remote caching

### Additional Required Variables

These variables are managed in GitHub Actions variables:

- `TURBO_TEAM`: Turborepo team identifier

## Setting Up Vercel Integration

### 1. Create a Vercel Token

1. Go to [Vercel Account Settings > Tokens](https://vercel.com/account/tokens)
2. Click "Create Token"
3. Give it a descriptive name (e.g., "GitHub Actions CI")
4. Set the scope to the team/organization that owns the project
5. Copy the token and save it as `VERCEL_TOKEN` secret in GitHub

### 2. Get Your Project IDs

#### Option A: From `.vercel/project.json` (if you have the project linked locally)

```bash
cd apps/web
vercel link
cat .vercel/project.json
```

This will show your `projectId` and `orgId`.

#### Option B: From Vercel Dashboard

1. Go to your project in the Vercel dashboard
2. Navigate to Settings > General
3. Find the "Project ID" in the project settings
4. For the Organization ID, check your team/organization settings

### 3. Configure GitHub Secrets and Variables

1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Add the following **secret**:
   - `VERCEL_TOKEN`: Your Vercel token from step 1
4. Add the following **variables** (click on the "Variables" tab):
   - `VERCEL_ORG_ID`: Your organization ID from step 2
   - `VERCEL_PROJECT_ID`: Your project ID from step 2

## Environment Variables in Vercel

Make sure the following environment variables are configured in your Vercel project:

### Required for Build

- `APPLE_TEAM_ID`
- `APPLE_MUSIC_KEY_ID`
- `APPLE_MUSIC_PRIVATE_KEY`
- `APPLE_MUSIC_USER_TOKEN`
- `KLAVIYO_API_KEY`
- `RESEND_API_KEY`
- `SENTRY_AUTH_TOKEN`
- `SENTRY_ORG`
- `SENTRY_PROJECT`

### Public Environment Variables (exposed to client)

- `NEXT_PUBLIC_POSTHOG_HOST`
- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_PROJECT_ID`
- `NEXT_PUBLIC_SENTRY_DSN`

## Troubleshooting

### Error: "Could not retrieve Project Settings"

This usually means:
- The `VERCEL_TOKEN` is invalid or expired
- The `VERCEL_PROJECT_ID` or `VERCEL_ORG_ID` is incorrect
- The token doesn't have access to the specified project/organization

### Environment Variables Not Available During Build

Make sure:
1. Variables are set in Vercel for the correct environment (Production, Preview, Development)
2. The `.env.local` file is being created before the build step
3. The working directory is set correctly to `apps/web`

## References

- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [GitHub Actions Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
