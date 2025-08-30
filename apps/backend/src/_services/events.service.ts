import type { EventsRepository } from '../_repositories/events.repository';

export class EventsService {

    constructor(
        private readonly _eventsRepository: EventsRepository,
    ) { }

}
