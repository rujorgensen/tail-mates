import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DraggableDrawerComponent } from '../../_components/_layouts/draggable-drawer/draggable-drawer.component';
import { FixedBottomMenuLayoutComponent } from '../../_components/_layouts/fixed-bottom-menu-layout/fixed-bottom-menu-layout.component';
import { MapComponent } from '../../_components/map/map.component';
import { AsyncPipe, JsonPipe } from '@angular/common';
import {
	type UserSession,
	UserSessionService,
} from '../../_services/user-session.service';
import type { Observable } from 'rxjs';

@Component({
	templateUrl: './main.component.html',
	imports: [
		DraggableDrawerComponent,
		// * Pipes
		AsyncPipe,
		JsonPipe, // Remove
		// * Components
		FixedBottomMenuLayoutComponent,
		MapComponent,
	],
	styleUrls: [
		'./main.component.scss',
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
	protected user$$: Observable<UserSession | null>;

	constructor(private readonly _userSessionService: UserSessionService) {
		this.user$$ = this._userSessionService.session$$;
	}
}
