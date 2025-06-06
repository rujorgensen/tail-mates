/**
 * TailMates Card Component
 * A versatile card component for displaying content with optional header and footer
 */
export class TmCard extends HTMLElement {
  private card!: HTMLDivElement;
  private header!: HTMLDivElement;
  private content!: HTMLDivElement;
  private footer!: HTMLDivElement;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['variant', 'padding'];
  }

  connectedCallback() {
    this.updateCard();
  }

  attributeChangedCallback() {
    this.updateCard();
  }

  private render() {
    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: block;
      }
      
      .card {
        border-radius: 12px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        background: white;
        overflow: hidden;
        transition: box-shadow 0.2s ease;
      }
      
      .card.elevated {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
      
      .card.elevated:hover {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
      
      .card.bordered {
        border: 1px solid #e5e7eb;
        box-shadow: none;
      }
      
      .header {
        border-bottom: 1px solid #f3f4f6;
        font-weight: 600;
        color: #111827;
      }
      
      .content {
        color: #374151;
      }
      
      .footer {
        border-top: 1px solid #f3f4f6;
        background-color: #f9fafb;
      }
      
      .padding-none > * {
        padding: 0;
      }
      
      .padding-small > * {
        padding: 12px;
      }
      
      .padding-medium > * {
        padding: 16px;
      }
      
      .padding-large > * {
        padding: 24px;
      }
      
      .hidden {
        display: none !important;
      }
    `;

    this.card = document.createElement('div');
    this.card.className = 'card';

    this.header = document.createElement('div');
    this.header.className = 'header';
    const headerSlot = document.createElement('slot');
    headerSlot.name = 'header';
    this.header.appendChild(headerSlot);

    this.content = document.createElement('div');
    this.content.className = 'content';
    const contentSlot = document.createElement('slot');
    this.content.appendChild(contentSlot);

    this.footer = document.createElement('div');
    this.footer.className = 'footer';
    const footerSlot = document.createElement('slot');
    footerSlot.name = 'footer';
    this.footer.appendChild(footerSlot);

    this.card.appendChild(this.header);
    this.card.appendChild(this.content);
    this.card.appendChild(this.footer);

    this.shadowRoot!.appendChild(style);
    this.shadowRoot!.appendChild(this.card);

    // Hide header and footer if no content is slotted
    this.updateSlotVisibility();
  }

  private updateCard() {
    const variant = this.getAttribute('variant') || 'default';
    const padding = this.getAttribute('padding') || 'medium';

    this.card.className = `card ${variant} padding-${padding}`;
  }

  private updateSlotVisibility() {
    const headerSlot = this.querySelector('[slot="header"]');
    const footerSlot = this.querySelector('[slot="footer"]');

    if (!headerSlot || !headerSlot.textContent?.trim()) {
      this.header.classList.add('hidden');
    } else {
      this.header.classList.remove('hidden');
    }

    if (!footerSlot || !footerSlot.textContent?.trim()) {
      this.footer.classList.add('hidden');
    } else {
      this.footer.classList.remove('hidden');
    }
  }
}

// Register the custom element
customElements.define('tm-card', TmCard);