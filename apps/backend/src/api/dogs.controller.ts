import { Elysia, t } from 'elysia';
import type { IDog_S, TUserId_S } from '@tailmates/shared/interfaces';
import { serviceDecorator } from '../_decorators/service.decorator';
import { betterAuthMacro } from '../_auth/auth.macro';
import type { Observable } from 'rxjs';

// import { NetworkAgentRedisService } from '@flux/mesh/store/redis/network-agent';
// import { getMeshBunRedisConnection } from '@flux/mesh/core/redis';
// // import type { TNetworkAgentCountAt } from 'libs/flux/shared/types/src/lib/agents/network-agent.type';
// import { networkIdValidatorPlugin } from './plugins';

// const meshRedisConnection = await getMeshBunRedisConnection();
// const networkAgentRedisCacheService: NetworkAgentRedisService = new NetworkAgentRedisService(meshRedisConnection.getClient());

export const dogsController = new Elysia({
	prefix: '/api/dogs',
})
	.use(betterAuthMacro)
	// .use(networkIdValidatorPlugin)
	.use(serviceDecorator)

	/**
	 * '/api/networks/:networkId/agents/count?when={'now'}'
	 * '/api/networks/:networkId/agents/count?startDate={startDate}&endDate={endDate}'
	 */
	// .get('/count', ({ networkId, query }): Promise<TNetworkAgentCountAt> => {
	//     if (query.when === 'now') {
	//         return networkAgentRedisCacheService
	//             .readNetworkAgentCount(
	//                 networkId,
	//             );
	//     }

	//     throw new Error('Only ?when=now is supported as query parameter');
	// },
	//     {
	//         query: t.Object({
	//             when: t.Optional(t.Literal('now')),
	//             startDate: t.Optional(t.Date()),
	//             endDate: t.Optional(t.Date()),
	//         })
	//     })

	/**
	 * '/api/dogs'
	 * '/api/networks/:networkId/agents/connected'
	 */


	.get('/', ({ user, services }): Observable<IDog_S[]> => {
		// .get('/connected', ({ networkId }) => {
		return services
			.dogsService
			.readMyDogs$(user.id as TUserId_S);
	}, {
		auth: true,
	});
