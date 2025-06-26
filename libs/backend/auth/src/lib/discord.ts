import { WebhookClient } from 'discord.js';

const webhookClient = new WebhookClient({
	url: process.env['DISCORD_TAIL_MATES_WEBHOOK_URL'] ?? '-',
});

export const userRegistered = async (user: any) => {
	webhookClient.send({
		content: `New user registered 🥳!\n${JSON.stringify(user.username)}`,
	});
};
