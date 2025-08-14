import { createAuthClient } from 'better-auth/svelte';

export const authClient = createAuthClient({
	/** The base URL of the server (optional if you're using the same domain) */
	baseURL: 'http://localhost:3100',
	// baseURL: import.meta.env.PROD ? undefined : 'http://localhost:3100',
});


// Create demo user
/*
 (async  () =>  {

	 await authClient.signUp.email({
			 email:'test@example.com', // user email address
			 password: 'password1234', // user password -> min 8 characters by default
			 name: 'Demo User', // user display name
			 // image, // User image URL (optional)
			 // callbackURL: "/dashboard" // A URL to redirect to after the user verifies their email (optional)
		 }, {
			 onRequest: (ctx) => {
				 console.log("loading");
				 //show loading
			 },
			 onSuccess: (ctx) => {
				 console.log("User created");
				 //redirect to the dashboard or sign in page
			 },
			 onError: (ctx) => {
				 // display the error message
				 alert(ctx.error.message);
			 },
	 });
 })();
  */