import { betterAuth } from 'better-auth';
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma-types/tail-mates";

const prisma = new PrismaClient();

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    trustedOrigins: [
        "http://localhost:3101",
    ],
    socialProviders: {
        google: {
            clientId: process.env['GOOGLE_CLIENT_ID'] as string,
            clientSecret: process.env['GOOGLE_CLIENT_SECRET'] as string,
        },
        facebook: {
            clientId: process.env['FACEBOOK_CLIENT_ID'] as string,
            clientSecret: process.env['FACEBOOK_CLIENT_SECRET'] as string,
        },
    },
});