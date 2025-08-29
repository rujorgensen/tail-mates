import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  ToggleComponent,
  ButtonComponent,
  TextInputComponent,
} from '@tailmates/frontend/ui/components';
import { ImageInputComponent } from '@tailmates/frontend/ui/smart-components';

@Component({
  templateUrl: './dog-profile.component.html',
  imports: [
    TextInputComponent,
    ButtonComponent,
    ToggleComponent,
    ImageInputComponent,
  ],
  styleUrls: ['./dog-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DogProfileComponent {

  constructor() { }

}
