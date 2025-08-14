// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { authClient } from '../auth/auth-client';
// import { isPlatformBrowser } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
// import { api } from '../api';

export type UserSession = ReturnType<typeof authClient.getSession>;

@Injectable({
	providedIn: 'root',
})
export class UserSessionService {
	public readonly session$$: Observable<UserSession | null>;

	private readonly session$$_: BehaviorSubject<UserSession | null> =
		new BehaviorSubject<UserSession | null>(null);

	constructor(
		//     private readonly _httpClient: HttpClient,
	) {
		this.session$$ = this.session$$_.asObservable();

		// 	const isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
		// if (isBrowser) {
		// 	setInterval(async () => {
		// 		const session: UserSession = await authClient.getSession();
		// 		console.log('klæfsdælsd', session.user);

		// 		const user = await api.api.user.get();
		// 		console.log('User from API:', user);

		// 		this._httpClient.get('/api/user').subscribe({
		// 			next: (session: UserSession) => {
		// 				console.log('Fetched user session:', session);

		// 				this.session$$_.next({
		// 					user: session,
		// 				} as any);
		// 			},
		// 			error: (error) => {
		// 				console.error('Error fetching user session:', error);
		// 			},
		// 		});
		// 	}, 5000);
		// }
	}

	public async refreshUserSession(): Promise<void> {
		const session: UserSession = await authClient.getSession();

		console.log('2222Fetched user session:', session.data.user);

		this.session$$_.next({
			user: session.data.user,
		} as any);
	}
}
