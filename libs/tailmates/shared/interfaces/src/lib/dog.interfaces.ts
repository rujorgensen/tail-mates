import type { Branded } from './utils.interfaces';
import type { TUserId_S } from './user.interfaces';

export type TSize_S = 'small' | 'medium' | 'large';
export type TGender_S = 'male' | 'female';

export type TDogId_S = Branded<string, 'DogId'>;

export interface IDogDTO_S {
  name: string;
  imageUrl: string;
  birthDate: Date;
  size: TSize_S;
  favouriteActivity: string | null;
  gender: TGender_S;
  neutered: boolean;
}

export interface IDog_S extends IDogDTO_S {
  id: TDogId_S;
  ownerId: TUserId_S;
  caretakerUUIDs: TUserId_S[]; // Caretakers can be added or removed after creation
}
