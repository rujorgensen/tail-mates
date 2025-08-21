// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { authClient } from '../auth/auth-client';
// import { isPlatformBrowser } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
// import { api } from '../api';

export type UserSession = typeof authClient.$Infer.Session.user;

@Injectable({
	providedIn: 'root',
})
export class UserSessionService {
	public readonly session$$: Observable<UserSession | null>;

	private readonly session$$_: BehaviorSubject<UserSession | null> =
		new BehaviorSubject<UserSession | null>(null);

	constructor(

	) {
		this.session$$ = this.session$$_.asObservable();
	}

	public async refreshUserSession(): Promise<void> {
		const session = await authClient.getSession();

		this.session$$_.next(session.data?.user ?? null);
	}
}
