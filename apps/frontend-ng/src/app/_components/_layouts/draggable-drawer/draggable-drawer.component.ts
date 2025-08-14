import '@tail-mates/web-components';
import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';

@Component({
  selector: 'app-draggable-drawer',
  imports: [
  ],
  template: `
  @defer(on viewport){
    <draggable-drawer color="white" style="height: 100%; background-color: yellow;">
      <div slot="body" style="height: 100%;">
         <ng-content select="[body]"></ng-content>
      </div>
      <div slot="drawer">
        <ng-content select="[drawer]"></ng-content>
      </div>
    </draggable-drawer>
  }@placeholder{
    <div>...</div>
  }
    `,
  styles: `
  :host{
    display: block;
    height: 100%;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [
    // ! For custom elements
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class DraggableDrawerComponent {}
