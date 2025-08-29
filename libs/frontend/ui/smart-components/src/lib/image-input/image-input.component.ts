import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tm-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageInputComponent {

  constructor() { }

}
