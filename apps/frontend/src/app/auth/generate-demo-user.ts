// Create demo user
import { authClient } from './auth-client';

(async () => {
	await authClient.signUp.email(
		{
			email: 'test@example.com', // user email address
			password: 'password1234', // user password -> min 8 characters by default
			name: 'Demo User', // user display name
			// image, // User image URL (optional)
			// callbackURL: '/dashboard' // A URL to redirect to after the user verifies their email (optional)
		},
		{
			onRequest: () => {
				console.log('Creating demo user');
			},
			onSuccess: () => {
				console.log('Demo user created');
			},
			onError: (ctx) => {
				console.error(`Could not create demo user: "${ctx.error.message}"`);
			},
		},
	);
})();
