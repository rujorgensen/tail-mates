import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'tm-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: [
    '../input.conponent.scss',
    './text-input.component.scss',
  ],
  // encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
  },
  // tabindex: '0',
})
export class TextInputComponent { 
  @Input() placeholder = ''; // Expose "placeholder" to the outside
}
