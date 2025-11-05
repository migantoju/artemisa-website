# Repository Guidelines

## Project Structure & Module Organization
This SvelteKit app keeps runtime code in `src`. Route definitions live in `src/routes` with top-level layout in `+layout.svelte` and page logic in `+page.svelte`. Shared UI and utilities belong in `src/lib`, grouping reusable components under `src/lib/components` and static assets in `src/lib/assets` (exported through `src/lib/index.ts`). Static files served verbatim go in `static/` (e.g. `robots.txt`). Authoring prompts or agent contexts use `prompts/`, while configuration files such as `svelte.config.js`, `vite.config.ts`, and `tsconfig.json` stay at the root.

## Build, Test, and Development Commands
Run `bun install` (or `npm install`) once to sync dependencies. Key scripts:
- `npm run dev` — start the Vite dev server; append `-- --open` to launch a browser tab.
- `npm run build` — produce the production bundle using the configured Svelte adapter.
- `npm run preview` — serve the built output locally for smoke testing.
- `npm run check` — run `svelte-check` with the repo TypeScript config.
- `npm run check:watch` — keep the same checks running while you edit files.

## Coding Style & Naming Conventions
Use TypeScript with Svelte single-file components; keep imports type-safe and prefer module exports through `src/lib/index.ts`. Follow Svelte defaults: two-space indentation, PascalCase filenames for components (`Button.svelte`), and kebab-case for folders. Pages, layouts, and server endpoints must follow the SvelteKit `+page.svelte` and related naming. Keep CSS scoped within components unless a rule must be global (then add it to `src/routes/+layout.svelte`).

## Testing Guidelines
`svelte-check` is the current static-analysis gate; run it before every commit. When adding unit tests, colocate them near the feature (e.g. `Component.spec.ts`) and ensure they pass under `npm run check`. Capture regression scenarios in Playwright or Vitest once introduced, and document any manual exploratory steps in the PR description.

## Commit & Pull Request Guidelines
Commits in this repo follow Conventional Commit prefixes (`feat:`, `fix:`, `chore:`). Write subjects in the imperative mood under 72 characters and bundle related changes together. PRs should summarize scope, link related issues, list dev/test commands executed, and attach UI screenshots or recordings for visual tweaks. Request review once the branch is rebased on main and checks are green.
