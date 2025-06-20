Tailmate is a social app for dog owners designed to make walk-time more social, spontaneous, and fun. Whether you're looking to meet new dog friends, explore top-rated walking routes, or just get outside more often, Tailmate brings dog-lovers together.

## 🚧 Feature Roadmap

- [ ] Walk Now Broadcasting – Broadcast your current walk so others nearby can see you're out.
- [ ] Join-In Requests – Enable others to request to join ongoing walks.
- [ ] Dog Profiles – Add photos and details like breed, age, temperament, and favorite activities.
- [ ] Walk Scheduler – Schedule future walks with time, location, and dog compatibility filters.
- [ ] Location Tagging & Ratings – Tag and rate parks, trails, and other dog-friendly spots.
- [ ] Dog Friend Circles – Track dogs you’ve met, and get notified when friends are nearby.
- [ ] Badges & Gamification – Reward users with badges for milestones like new dog friendships, frequent walks, and exploring new spots.

## 🧱 Tech Stack

- Frontend: Astro & Svelte – Fast, content-focused frontend framework with partial hydration.
  - UI Components: Custom Web Components library built with TypeScript.
- Backend: Elysia – Lightweight and fast Bun-native web framework.
- Runtime: Bun – Ultra-fast JavaScript runtime, package manager, and bundler.

### 🚀 Project Structure

Inside of the project, you'll see the following folders and files:

```text
/
├── apps/
│   ├── frontend/               # Frontend applications
│   │   ├── public/
│   │   └── src/
│   │
│   └── backend/                # Backend applications
│       └── src/
│
├── libs/
│   └── frontend/
│       └── web-components/     # Reusable UI components library
│
├── docs/                       # Documentation
└── package.json
```

## 📦 Libraries

### Web Components

The project includes a custom web components library (`@tail-mates/web-components`) that provides reusable UI components:

- **TmButton**: Customizable button component with multiple variants and sizes
- **TmCard**: Flexible card container with optional header and footer

The components are built using native Web Components API with TypeScript for excellent developer experience and framework independence. Interactive documentation and development is available through Storybook.

**Usage:**
```typescript
import '@tail-mates/web-components';

// Use in HTML
<tm-button variant="primary" size="medium">Click me</tm-button>
<tm-card variant="elevated">
  <div slot="header">Title</div>
  <p>Content goes here</p>
</tm-card>
```

See [Web Components Documentation](./docs/web-components.md) for detailed usage instructions, or run Storybook for interactive component exploration.

## Development

### 🐣 Getting Started

Start the server and open http://localhost:3100/ with your browser to see the result.


### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `nx serve frontend-tail-mates`             | Starts local frontend dev server at `localhost:3101`      |
| `nx serve backend-tail-mates`           | Starts local backend dev server at `localhost:3100` |
| `bun web-components:build`           | Build the web components library |
| `cd libs/frontend/web-components && bun run storybook` | Start Storybook for component development at `localhost:6006` |
| `cd libs/frontend/web-components && bun run storybook-build` | Build static Storybook files |
