This is a TypeScript based repository using Bun and Elysia.

## Stack
- **Language**: TypeScript
- **Runtime**: Bun
- **Backend Frameworks**: Elysia / Bun
- **Frontend Frameworks**: Astro and Svelte
- **Package Manager and Dependency Management**: Bun / Bun.lockb
- **Testing**: Bun
- **Documentation**: Markdown files in `docs/`
- **Version Control**: Git
- **Package Structure**: Monorepo with `apps/` and `libs/`
- **Deployment**: Docker
- **Authentication**: JWT (JSON Web Tokens)

## Code Standards

## Formatting
- Function arguments must be on their own line
- Add hanging comma (comma on the last argument or property, if on it's own line)

## Repository Structure
- `apps/`: Backend and frontend applications
- `libs/`: Common logic

## Key Guidelines
1. Maintain existing code structure and organization
2. Use dependency injection patterns where appropriate
3. Write unit tests for new functionality.
4. Always update the version in package.json when creating PRs.
5. Document public APIs and complex logic. Suggest changes to the `docs/` folder when appropriate.

## Pull Requests
- Bump version in `package.json` when creating PRs and follow the semantic versioning convention.