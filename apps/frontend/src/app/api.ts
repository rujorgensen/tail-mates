import { treaty } from '@elysiajs/eden';
import type { TApp } from '../../../../apps/backend/src/main.ts';

export const api = treaty<TApp>('localhost:3100');
