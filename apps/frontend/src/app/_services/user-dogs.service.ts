import { Injectable } from '@angular/core';
import { BehaviorSubject, from, type Observable } from 'rxjs';
import type { IDog_S } from '@tailmates/shared/interfaces';
import { api } from '../api';

@Injectable({
	providedIn: 'root',
})
export class UserDogsService {
	public readonly dogs$$: Observable<IDog_S[]> = new BehaviorSubject([]);

	constructor() {}

	public create(dog: IDogDTO_S): Observable<IDog_S> {}

	public read(): Observable<IDog_S> {
		return from(api.api.auth['*']);
	}
	public update(): Observable<IDog_S> {}
	public delete(): Observable<IDog_S> {}
}
