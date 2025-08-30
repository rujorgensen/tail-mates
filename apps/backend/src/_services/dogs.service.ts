import type { IDog_S, TUserId_S } from '@tailmates/shared/interfaces';
import type { Observable } from 'rxjs';
import type { DogsRepository } from '../_repositories/dogs.repository';

export class DogsService {

    constructor(
        private readonly _dogsRepository: DogsRepository,
    ) { }

    // ****************************************************************************
    // *** Read
    // ****************************************************************************

    /**
     * Reads all dogs of a user.
     * 
     * @param { TUserId } ownerId
     * 
     * @returns { Observable<IDog_S[]> }
     */
    public readMyDogs$(
        ownerId: TUserId_S,
    ): Observable<IDog_S[]> {
        return this._dogsRepository
            .readMyDogs$(
                ownerId,
            );
    }

}
