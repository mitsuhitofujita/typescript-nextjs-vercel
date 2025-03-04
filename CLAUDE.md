# CLAUDE.md - Next.js TypeScript Project Guidelines

## Commands
- **Development**: `cd next-app && npm run dev` (uses Turbopack)
- **Build**: `cd next-app && npm run build`
- **Start Production**: `cd next-app && npm run start`
- **Lint**: `cd next-app && npm run lint`
- **Test Single File**: Add Jest with `npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom` then run `npx jest path/to/test-file.test.tsx`

## Code Style Guidelines
- **Formatting**: Use Biome (installed as dev dependency)
- **Types**: Prefer explicit types; use TypeScript's strict mode
- **Imports**: Use absolute imports with `@/` alias; group by external/internal
- **Components**: Use functional components with explicit return types
- **Naming**: PascalCase for components/types, camelCase for variables/functions
- **Error Handling**: Use try/catch for async operations; provide meaningful error messages
- **State Management**: Use React hooks; prefer local state
- **Styling**: Use Tailwind CSS (v4)
- **Project Structure**: Follow Next.js 15+ App Router conventions