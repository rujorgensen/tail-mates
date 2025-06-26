import { betterAuth } from 'better-auth';
import { PrismaClient } from '@prisma-types/tail-mates';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { userRegistered } from './discord.js';

if (!process.env['GOOGLE_CLIENT_ID']) {
	throw new Error('GOOGLE_CLIENT_ID is not set in environment variables');
}
const googleClientId: string = process.env['GOOGLE_CLIENT_ID'];

if (!process.env['GOOGLE_CLIENT_SECRET']) {
	throw new Error('GOOGLE_CLIENT_SECRET is not set in environment variables');
}
const googleClientSecret: string = process.env['GOOGLE_CLIENT_SECRET'];

if (!process.env['FACEBOOK_CLIENT_ID']) {
	throw new Error('FACEBOOK_CLIENT_ID is not set in environment variables');
}
const facebookClientId: string = process.env['FACEBOOK_CLIENT_ID'];

if (!process.env['FACEBOOK_CLIENT_SECRET']) {
	throw new Error('FACEBOOK_CLIENT_SECRET is not set in environment variables');
}
const facebookClientSecret: string = process.env['FACEBOOK_CLIENT_SECRET'];


const prisma = new PrismaClient();

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: 'postgresql',
	}),
	trustedOrigins: [
		'http://localhost:3101',
	],
	databaseHooks: {
		user: {
			create: {
				after: async (user) => {
					userRegistered(user);
				},
			},
		},
	},
	socialProviders: {
		google: {
			clientId: googleClientId,
			clientSecret: googleClientSecret,
		},
		facebook: {
			clientId: facebookClientId,
			clientSecret: facebookClientSecret,
		},
	},
});
