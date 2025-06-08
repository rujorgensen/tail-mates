# Web Components Library

This document provides detailed information about the Tail Mates Web Components Library.

## Overview

The Tail Mates Web Components Library is a collection of reusable UI components built using native Web Components API with TypeScript. These components are designed to be framework-agnostic and can be used in any web application.

## Architecture

The library follows these architectural principles:

- **Native Web Components**: Built using Custom Elements and Shadow DOM APIs
- **TypeScript**: Full type safety and excellent developer experience
- **CSS-in-JS**: Scoped styling using Shadow DOM
- **Event-driven**: Custom events for component communication
- **Accessibility**: Following WCAG guidelines where applicable

## Components

### TmButton

The `TmButton` component provides a customizable button with multiple variants and sizes.

#### API

**Attributes:**
- `variant`: Controls the visual style
  - `primary` (default): Blue background, white text
  - `secondary`: Gray background, dark text
  - `outline`: Transparent background, blue border and text
- `size`: Controls the button size
  - `small`: 8px vertical, 16px horizontal padding
  - `medium` (default): 12px vertical, 24px horizontal padding
  - `large`: 16px vertical, 32px horizontal padding
- `disabled`: Boolean attribute to disable interactions

**Events:**
- `tm-click`: Fired when button is clicked (unless disabled)

#### Examples

```html
<!-- Basic usage -->
<tm-button>Click me</tm-button>

<!-- With variants -->
<tm-button variant="primary">Primary</tm-button>
<tm-button variant="secondary">Secondary</tm-button>
<tm-button variant="outline">Outline</tm-button>

<!-- With sizes -->
<tm-button size="small">Small</tm-button>
<tm-button size="medium">Medium</tm-button>
<tm-button size="large">Large</tm-button>

<!-- Disabled state -->
<tm-button disabled>Disabled</tm-button>
```

#### JavaScript Usage

```typescript
const button = document.querySelector('tm-button');
button.addEventListener('tm-click', (event) => {
  console.log('Button clicked!', event.detail);
});
```

### TmCard

The `TmCard` component provides a flexible container for displaying content with optional header and footer sections.

#### API

**Attributes:**
- `variant`: Controls the visual style
  - `default` (default): Standard card with subtle shadow
  - `elevated`: Enhanced shadow with hover effects
  - `bordered`: Border instead of shadow
- `padding`: Controls internal spacing
  - `none`: No padding
  - `small`: 12px padding
  - `medium` (default): 16px padding
  - `large`: 24px padding

**Slots:**
- Default slot: Main content area
- `header`: Optional header content (hidden if empty)
- `footer`: Optional footer content (hidden if empty)

#### Examples

```html
<!-- Basic usage -->
<tm-card>
  <p>This is the main content.</p>
</tm-card>

<!-- With header and footer -->
<tm-card variant="elevated" padding="large">
  <div slot="header">Card Title</div>
  <p>Main content goes here.</p>
  <div slot="footer">Footer content</div>
</tm-card>

<!-- Bordered variant -->
<tm-card variant="bordered" padding="small">
  <h3>Compact Card</h3>
  <p>With minimal spacing.</p>
</tm-card>
```

## Integration

### Import All Components

```typescript
import '@tail-mates/web-components';

// Components are now available globally
document.body.innerHTML = '<tm-button>Hello</tm-button>';
```

### Import Specific Components

```typescript
import { TmButton, TmCard } from '@tail-mates/web-components';

// Components are registered automatically when imported
```

### Manual Registration

```typescript
import { registerAllComponents } from '@tail-mates/web-components';

// Register all components explicitly
registerAllComponents();
```

## Browser Support

The components use modern web standards and require:

- Custom Elements v1
- Shadow DOM v1
- ES2020 features

**Supported Browsers:**
- Chrome 67+
- Firefox 63+
- Safari 13+
- Edge 79+

For older browsers, consider using polyfills:

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@^2/webcomponents-loader.js"></script>
```

## Development

### Building

```bash
cd libs/frontend/web-components
bun install
bun run build
```

### Development Mode

```bash
bun run dev
```

This will start TypeScript in watch mode, automatically rebuilding when files change.

### Component Development with Storybook

For component development, testing, and documentation, this library includes Storybook:

```bash
# Start Storybook development server
bun run storybook

# Build Storybook for deployment
bun run storybook-build
```

Storybook provides:

- **Interactive component playground** - Test all component variants and properties
- **Live documentation** - Auto-generated documentation from component stories  
- **Visual testing** - See all components and their states in one place
- **Development workflow** - Hot reloading and instant feedback

Access Storybook at `http://localhost:6006` to browse components, interact with controls, and view comprehensive documentation.

## Best Practices

### Styling

- Components use Shadow DOM for style encapsulation
- Global styles won't affect component internals
- Use CSS custom properties for theming when needed

### Events

- Listen for custom events (prefixed with `tm-`) for component interactions
- Events bubble and are composed for cross-shadow-boundary communication

### Accessibility

- Components include basic ARIA attributes where appropriate
- Keyboard navigation follows standard patterns
- Focus management is handled automatically

### Performance

- Components are lazy-loaded when first used
- Shadow DOM provides efficient style isolation
- Minimal DOM manipulation for better performance