import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Import the auth client and set up authentication
import { authClient } from '../../auth/auth-client';
import { UserSessionService } from '../../_services/user-session.service';
import { Router } from '@angular/router';

@Component({
	templateUrl: './sign-in-secret.component.html',
	imports: [
		FormsModule,
	],
	styleUrls: [
		'./sign-in-secret.component.scss',
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInSecretComponent {
	
	constructor(
		private readonly _userSessionService: UserSessionService,
		private readonly _router: Router,
	) {}

	protected signInGoogle(): void {
		// Google Sign-In
		authClient.signIn.social(
			{
				provider: 'google',
				// The URL to redirect to after sign-in
				callbackURL: 'http://localhost:3101/',
				// callbackURL: import.meta.env.PROD
				//   ? "/"
				//   : "http://localhost:3101/",
			},
			{
				onSuccess: () => {
					// Redirect to the dashboard or sign in page
					console.log('Success');
					this._userSessionService.refreshUserSession();
				},
				onError: (ctx) => {
					// Display the error message
					console.error(ctx.error.message);
					alert(ctx.error.message);
					this._userSessionService.refreshUserSession();
				},
			},
		);
	}

	/**
	 *
	 */
	protected async signInEmail(e: any): Promise<boolean> {
		e.preventDefault();

		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const submitButton = form.querySelector(
			'button[type="submit"]',
		) as HTMLButtonElement;

		const originalText = submitButton.textContent;

		// Disable button and show loading state
		submitButton.disabled = true;
		submitButton.textContent = 'Signing in...';

		try {
			const { data, error } = await authClient.signIn.email({
				email,
				password,
				//   callbackURL: '/',
			});

			if (error) {
				console.error('Sign-in error:', error.message);
				alert(error.message ?? error.statusText);
			} else {
				console.log('Success', data);
				this._router.navigate([
					'/',
				]);
			}
		} catch (err) {
			console.error('Unexpected error:', err);
			alert('An unexpected error occurred. Please try again.');
		} finally {
			// Re-enable button
			submitButton.disabled = false;
			submitButton.textContent = originalText;
		}

		this._userSessionService.refreshUserSession();

		return false;
	}
}
