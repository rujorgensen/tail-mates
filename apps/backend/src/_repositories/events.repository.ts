import type { PrismaClient } from '@prisma-types/tailmates';

export class EventsRepository {

    constructor(
        private readonly _prismaClient: PrismaClient,
    ) { }

}
