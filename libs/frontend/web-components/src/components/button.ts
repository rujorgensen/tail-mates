/**
 * TailMates Button Component
 * A customizable button web component for the Tail Mates application
 */
export class TmButton extends HTMLElement {
	private button!: HTMLButtonElement;

	constructor() {
		super();
		this.attachShadow({
			mode: 'open',
		});
		this.button = document.createElement('button');
		this.render();
	}

	static get observedAttributes() {
		return [
			'variant',
			'size',
			'disabled',
		];
	}

	connectedCallback() {
		this.updateButton();
		this.addEventListener('click', this.handleClick);
	}

	disconnectedCallback() {
		this.removeEventListener('click', this.handleClick);
	}

	attributeChangedCallback() {
		this.updateButton();
	}

	private render() {
		const style = document.createElement('style');
		style.textContent = `
      :host {
        display: inline-block;
      }
      
      button {
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-family: inherit;
        font-weight: 500;
        transition: all 0.2s ease;
        outline: none;
        text-decoration: none;
      }
      
      button:focus {
        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
      }
      
      button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      
      /* Variants */
      .primary {
        background-color: #3b82f6;
        color: white;
      }
      
      .primary:hover:not(:disabled) {
        background-color: #2563eb;
      }
      
      .secondary {
        background-color: #f3f4f6;
        color: #374151;
        border: 1px solid #d1d5db;
      }
      
      .secondary:hover:not(:disabled) {
        background-color: #e5e7eb;
      }
      
      .outline {
        background-color: transparent;
        color: #3b82f6;
        border: 1px solid #3b82f6;
      }
      
      .outline:hover:not(:disabled) {
        background-color: #3b82f6;
        color: white;
      }
      
      /* Sizes */
      .small {
        padding: 8px 16px;
        font-size: 14px;
      }
      
      .medium {
        padding: 12px 24px;
        font-size: 16px;
      }
      
      .large {
        padding: 16px 32px;
        font-size: 18px;
      }
    `;

		this.shadowRoot!.appendChild(style);
		this.shadowRoot!.appendChild(this.button);

		const slot = document.createElement('slot');
		this.button.appendChild(slot);
	}

	private updateButton() {
		const variant = this.getAttribute('variant') || 'primary';
		const size = this.getAttribute('size') || 'medium';
		const disabled = this.hasAttribute('disabled');

		this.button.className = `${variant} ${size}`;
		this.button.disabled = disabled;
	}

	private handleClick = (event: Event) => {
		if (this.hasAttribute('disabled')) {
			event.preventDefault();
			event.stopPropagation();
			return;
		}

		// Dispatch custom event
		this.dispatchEvent(
			new CustomEvent('tm-click', {
				bubbles: true,
				composed: true,
				detail: {
					originalEvent: event,
				},
			}),
		);
	};
}

// Register the custom element
customElements.define('tm-button', TmButton);
