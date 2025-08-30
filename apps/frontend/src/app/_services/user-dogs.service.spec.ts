/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserDogsService } from './user-dogs.service';

describe('Service: UserDogs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDogsService]
    });
  });

  it('should ...', inject([UserDogsService], (service: UserDogsService) => {
    expect(service).toBeTruthy();
  }));
});
