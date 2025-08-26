import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, type Observable, tap } from 'rxjs';
import { authClient } from '../auth/auth-client';

export type UserSession = typeof authClient.$Infer.Session.user;

const UN_INITIALIZED = undefined;
type TUninitialized = typeof UN_INITIALIZED;

@Injectable({
	providedIn: 'root',
})
export class UserSessionService {
	public readonly session$$: Observable<UserSession | null>;

	private readonly session$$_: BehaviorSubject<UserSession | null | TUninitialized> = new BehaviorSubject<UserSession | null | TUninitialized>(UN_INITIALIZED);

	constructor() {
		this.session$$ = this.session$$_
			.asObservable()
			.pipe(
				tap((session: UserSession | null | TUninitialized) => {
					if (session === UN_INITIALIZED) {
						this.refreshUserSession();
					}
				}),
				filter((session: UserSession | null | TUninitialized) => session !== UN_INITIALIZED)
			);
	}

	/**
	 * Refreshes the user session.
	 *
	 * @returns { Promise<void> }
	 */
	public async refreshUserSession(): Promise<void> {
		const session = await authClient.getSession();

		this.session$$_.next(session.data?.user ?? null);
	}
}
