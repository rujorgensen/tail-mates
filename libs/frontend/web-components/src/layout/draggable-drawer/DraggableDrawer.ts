import { css, html, LitElement, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
// customElement, 
import { SlideY } from './slide';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  color?: string;
  backgroundColor?: string;
  /** Optional click handler */
  onClick?: () => void;
}

const INERTIA_LIMIT: number = 1.8;

// @customElement('draggable-drawer')
export class DraggableDrawer extends LitElement {
  @property({ type: String })
  private readonly color?: string;

  @state()
  private state: 'closed' | 'dragged' | 'open' = 'closed';

  @state()
  private dragPixels: number = 0

  @state()
  private restingPixels: number = 0

  private slideY: SlideY | undefined;

  static readonly styles = css`
    #container { 
      background-color: palegoldenrod;
      height: 100%;
      display: grid;
      overflow: hidden;
    }

    main{ 
      grid-column: 1 / -1;
      grid-row: 1 / -1;
    }

    aside { 
      box-shadow: rgb(183, 183, 183) 0px -3px 26px;
      grid-column: 1 / -1;
      grid-row: 1 / -1;
      display: grid;
      align-self: end; /* Pushes it to the bottom */
      
      /* TODO, MOVE TO WHERE THE COMPONENT IS USED */
      border-radius: 30px 30px 0 0;
      overflow: hidden;
    }
      
    aside[state="open"] > section, aside[state="closed"] > section {
      transition: height 100ms ease-in-out;
    }

    aside[state="open"] > section {
      height: var(--resting-pixels);
    }
    
    aside[state="dragged"] > section {
      height: calc(var(--dragged-pixels) + var(--resting-pixels));
    }
      
     aside[state="closed"] > section {
      height: var(--resting-pixels);
    }

    #drag-handle {
      cursor: pointer;
      padding: 10px;
      text-align: center;
      user-select: none;
      background-color: var(--bg-clr, #00000000);

      background-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }

    #drag-handle::after{
      content: "";
      display: block;
      width: 22%;
      height: 7px;
      background-color: rgba(12, 9, 9, 0.26);
      border-radius: 46px;
      margin-top: 4px;
      margin-inline: auto;
    }
  `;

  protected firstUpdated(

  ): void {
    const dragHandle = this.renderRoot.querySelector('#drag-handle');
    const aside = this.renderRoot.querySelector('aside');
    const container = this.renderRoot.querySelector('#container');

    if (this.color) {
      aside?.style.setProperty('--bg-clr', this.color);
    }

    if (dragHandle && aside && container) {
      const containerHeight = container.offsetHeight;
      const handleHeight = dragHandle.offsetHeight;
      const availableSpace = containerHeight - handleHeight;

      this.restingPixels = 0;
      aside.style.setProperty('--resting-pixels', this.restingPixels + 'px');

      this.slideY = new SlideY(
        dragHandle,
        container,
        {
          dragged: (
            dragPixels: number,
          ) => {
            this.state = 'dragged';
            this.dragPixels = Math.min(availableSpace, dragPixels);
            aside.style.setProperty('--dragged-pixels', this.dragPixels + 'px');
          },

          released: (
            inertia: number,
          ) => {
            console.log('inertia', inertia);
            const position = this.dragPixels + this.restingPixels;

            // This svipe had high inertia
            if (Math.abs(inertia) > INERTIA_LIMIT) {
              if (inertia < 0) {
                this.restingPixels = 0;
                this.state = 'closed';
              } else {
                this.state = 'open';
                this.restingPixels = containerHeight * 0.85;
              }

              aside.style.setProperty('--resting-pixels', this.restingPixels + 'px');

              this.dispatchEvent(new CustomEvent(this.state, {
                detail: {}, // optional data
                bubbles: true,            // allow event to bubble up
                composed: true            // allow it to cross shadow DOM
              }));

              return;
            }

            // Animate to open
            if ((position > availableSpace / 2)) {
              this.state = 'open';
              this.restingPixels = containerHeight * 0.85;
            } else {
              this.restingPixels = 0;
              this.state = 'closed';
            }

            this.dispatchEvent(new CustomEvent(this.state, {
              detail: {}, // optional data
              bubbles: true, // allow event to bubble up
              composed: true, // allow it to cross shadow DOM
            }));

            aside.style.setProperty('--resting-pixels', this.restingPixels + 'px');
          },
        },
      );
    }
  }

  protected render(
  ): TemplateResult<1> {
    // Drag here <b>${this.state}</b> ${this.dragPixels}px ${this.inertia} px/ms 
    return html`
    <div id="container">
      <main>
        <slot name="body"></slot>
      </main>
      <aside state="${this.state}">
        <div id="drag-handle"></div>
        <section>
          <slot name="drawer"></slot>
        </section>
      </aside>
    </div>
  `;
  }
}
