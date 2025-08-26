import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-fixed-bottom-menu-layout',
  templateUrl: './fixed-bottom-menu-layout.component.html',
	styleUrls: [
		'./fixed-bottom-menu-layout.component.scss',
	],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FixedBottomMenuLayoutComponent {

}
