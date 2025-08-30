import type { UsersRepository } from '../_repositories/users.repository';

export class UsersService {

    constructor(
        private readonly _usersRepository: UsersRepository,
    ) { }

}
