/**
 * Tail Mates Web Components Library
 * 
 * A collection of reusable web components for the Tail Mates application.
 * These components are built using native Web Components API with TypeScript.
 */

// Export component classes
export { TmButton } from './components/button.js';
export { TmCard } from './components/card.js';

// Type definitions for custom elements
import type { TmButton } from './components/button.js';
import type { TmCard } from './components/card.js';

declare global {
  interface HTMLElementTagNameMap {
    'tm-button': TmButton;
    'tm-card': TmCard;
  }
}

// Auto-register all components when the module is imported
import './components/button.js';
import './components/card.js';

/**
 * Register all components manually if needed
 * This is useful when you want to control when components are registered
 */
export function registerAllComponents(): void {
  // Components are auto-registered when imported, but this function
  // can be called explicitly if needed for any reason
  if (!customElements.get('tm-button')) {
    import('./components/button.js');
  }
  if (!customElements.get('tm-card')) {
    import('./components/card.js');
  }
}