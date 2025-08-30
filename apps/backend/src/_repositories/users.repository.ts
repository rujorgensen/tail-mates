import type { PrismaClient } from '@prisma-types/tailmates';

export class UsersRepository {

    constructor(
        private readonly _prismaClient: PrismaClient,
    ) { }

}
