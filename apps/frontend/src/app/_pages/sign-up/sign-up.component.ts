import {
	ChangeDetectionStrategy,
	Component,
	inject,
	signal,
} from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { authClient } from '../../auth/auth-client';

// Replace with your real auth client
export interface EmailSignUpPayload {
	email: string;
	password: string;
	name: string;
}

@Component({
	selector: 'app-sign-up',
	imports: [
		ReactiveFormsModule,
		RouterLink,
	],
	templateUrl: './sign-up.component.html',
	styleUrl: './sign-up.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
	private fb = inject(FormBuilder);
	private router = inject(Router);

	pending = signal(false);
	errorMsg = signal<string | null>(null);
	successMsg = signal<string | null>(null);

	form = this.fb.group({
		name: [
			'',
			[
				Validators.required,
				Validators.minLength(2),
			],
		],
		email: [
			'',
			[
				Validators.required,
				Validators.email,
			],
		],
		password: [
			'',
			[
				Validators.required,
				Validators.minLength(8),
			],
		],
	});

	async submit() {
		this.errorMsg.set(null);
		this.successMsg.set(null);

		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}

		this.pending.set(true);
		try {
			const { name, email, password } = this.form.getRawValue()!;

			await authClient.signUp.email({
				email: email!,
				password: password!,
				name: name!,
			});

			this.successMsg.set(
				'Account created successfully! Redirecting to dashboard...',
			);
			// brief delay to show success state
			setTimeout(() => this.router.navigateByUrl('/'), 1500);
		} catch (err: any) {
			console.error('Sign-up error:', err);
			this.errorMsg.set(
				err?.message ??
				'An error occurred during sign-up. Please try again.',
			);
		} finally {
			this.pending.set(false);
		}
	}
}
