# Tail Mates Web Components

A TypeScript-based web components library for the Tail Mates application. This library provides a collection of reusable, customizable UI components built using native Web Components API.

## Components

### TmButton

A customizable button component with multiple variants and sizes.

**Usage:**
```html
<tm-button variant="primary" size="medium">Click me</tm-button>
<tm-button variant="secondary" size="small">Secondary</tm-button>
<tm-button variant="outline" size="large" disabled>Disabled</tm-button>
```

**Attributes:**
- `variant`: `primary` | `secondary` | `outline` (default: `primary`)
- `size`: `small` | `medium` | `large` (default: `medium`)
- `disabled`: Boolean attribute to disable the button

**Events:**
- `tm-click`: Custom event fired when button is clicked (not fired when disabled)

### TmCard

A versatile card component for displaying content with optional header and footer.

**Usage:**
```html
<tm-card variant="default" padding="medium">
  <div slot="header">Card Header</div>
  <p>This is the main content of the card.</p>
  <div slot="footer">Card Footer</div>
</tm-card>
```

**Attributes:**
- `variant`: `default` | `elevated` | `bordered` (default: `default`)
- `padding`: `none` | `small` | `medium` | `large` (default: `medium`)

**Slots:**
- Default slot: Main content area
- `header`: Optional header content
- `footer`: Optional footer content

## Installation

```bash
# Install dependencies
bun install

# Build the library
bun run build

# Development mode (watch for changes)
bun run dev

# Start Storybook for component development and documentation
bun run storybook

# Build Storybook for deployment
bun run storybook-build
```

## Usage in Projects

```typescript
// Import all components
import '@tail-mates/web-components';

// Or import specific components
import { TmButton, TmCard } from '@tail-mates/web-components';
```

## Development

The components are built using:
- TypeScript for type safety
- Native Web Components API (Custom Elements, Shadow DOM)
- CSS-in-JS for styling
- Modern ES modules
- Storybook for component documentation and development

### Component Development with Storybook

This library includes Storybook for interactive component development and documentation. Storybook provides:

- **Interactive component playground** - Test components with different props and states
- **Comprehensive documentation** - Auto-generated docs from component stories
- **Visual testing** - See all component variants in one place
- **Development workflow** - Hot reloading during development

To start Storybook:
```bash
bun run storybook
```

This will start Storybook at `http://localhost:6006` where you can:
- Browse all components and their variants
- Interact with component controls to change props
- View auto-generated documentation
- Test component behavior in isolation

### File Structure

```
src/
├── components/          # Individual component files
│   ├── button.ts       # TmButton component
│   └── card.ts         # TmCard component
└── index.ts            # Main export file
```

## Browser Support

These components use modern web standards and are supported in:
- Chrome 67+
- Firefox 63+
- Safari 13+
- Edge 79+

For older browser support, consider using polyfills for Custom Elements and Shadow DOM.