import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'tm-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleComponent {

  @Input() label = '';

}
