import type {
    Dog,
    PrismaClient,
} from '@prisma-types/tailmates';
import type {
    IDog_S,
    IDogDTO_S,
    TDogId_S,
    TUserId_S,
} from '@tailmates/shared/interfaces';
import { from, map, type Observable } from 'rxjs';
import { convertGenderFromApp, convertGenderFromDatabase, convertSizeFromApp, convertSizeFromDatabase } from './database-enum.utils';

type DogWithCaretakerId = Dog & {
    caretakers: {
        id: string;
    }[];
};

export class DogsRepository {

    constructor(
        private readonly _prismaClient: PrismaClient,
    ) { }

    // ****************************************************************************
    // *** Create
    // ****************************************************************************

    /**
     * Creates a new dog.
     * 
     * @param { TUserId }       ownerId
     * @param { IDogDTO_S }     dog
     * 
     * @returns { Observable<IDog_S[]> }
     */
    public createDog$(
        ownerId: TUserId_S,
        dog: IDogDTO_S,
    ): Observable<IDog_S> {
        return from(this._prismaClient.dog.create({
            data: {
                ownerId,
                imageUrl: dog.imageUrl,
                name: dog.name,
                size: convertSizeFromApp(dog.size),
                favouriteActivity: dog.favouriteActivity || null,
                gender: convertGenderFromApp(dog.gender),
                neutered: dog.neutered,
                birthDate: dog.birthDate,
            },
            include: {
                caretakers: {
                    select: {
                        id: true,
                    },
                },
            },
        }))
            .pipe(
                map(this.adaptInterface.bind(this))
            );
    }

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
        return from(this._prismaClient.dog.findMany({
            where: {
                ownerId,
            },
            include: {
                caretakers: {
                    select: {
                        id: true,
                    },
                },
            },
        }))
            .pipe(
                map(this.adaptInterfaces.bind(this))
            )
            ;
    }

    // ****************************************************************************
    // *** Update
    // ****************************************************************************

    /**
     * ! NB The invoker must be owner.
     * 
     * @param dogId 
     * @param caretakerIds 
     */

    // ****************************************************************************
    // *** Internal Helpers
    // ****************************************************************************

    /**
     * Converts the database types into the DTO types.
     * 
     * @param { DogWithCaretakerId[] } dogs
     * 
     * @returns { IDog_S[] }
     */
    private adaptInterfaces(
        dogs: DogWithCaretakerId[],
    ): IDog_S[] {
        return dogs.map(this.adaptInterface.bind(this));
    }

    /**
     * Converts the database type into the DTO type.
     * 
     * @param { DogWithCaretakerId } dogs
     * 
     * @returns { IDog_S }
     */
    private adaptInterface(
        dog: DogWithCaretakerId,
    ): IDog_S {
        return {
            caretakerUUIDs: dog.caretakers.map((caretaker: { id: string }) => caretaker.id as TUserId_S),
            name: dog.name,
            imageUrl: dog.imageUrl,
            birthDate: dog.birthDate,
            size: convertSizeFromDatabase(dog.size),
            favouriteActivity: dog.favouriteActivity || null,
            gender: convertGenderFromDatabase(dog.gender),
            neutered: dog.neutered,
            id: dog.id as TDogId_S,
            ownerId: dog.ownerId as TUserId_S,
        };
    }
}

