import Elysia from 'elysia';
import { DogsService } from '../_services/dogs.service';
import { prismaClient } from '../prisma.service';
import { DogsRepository } from '../_repositories/dogs.repository';
import { EventsRepository } from '../_repositories/events.repository';
import { UsersRepository } from '../_repositories/users.repository';
import { EventsService } from '../_services/events.service';
import { UsersService } from '../_services/users.service';

// Instantiate repositories
const dogsRepository: DogsRepository = new DogsRepository(prismaClient);
const eventsRepository: EventsRepository = new EventsRepository(prismaClient);
const usersRepository: UsersRepository = new UsersRepository(prismaClient);

// Instantiate services and make them available
export const serviceDecorator = new Elysia().decorate('services', {
	dogsService: new DogsService(dogsRepository),
	eventsService: new EventsService(eventsRepository),
	usersService: new UsersService(usersRepository),
});
