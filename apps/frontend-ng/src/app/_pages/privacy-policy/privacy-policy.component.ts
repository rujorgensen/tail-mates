import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-privacy-policy',
	imports: [],
	templateUrl: './privacy-policy.component.html',
	styleUrl: './privacy-policy.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPolicyComponent {
	protected readonly dateString: string = new Date().toLocaleDateString();
}
