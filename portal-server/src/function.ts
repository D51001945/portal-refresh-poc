import e, { Request, Response } from 'express';

import { bootstrapApplication } from './app';

let expressInstance: e.Express | null = null;

export async function apiHandler(request: Request, response: Response) {
  if (!expressInstance) {
    const app = await bootstrapApplication();
    await app.init();
    expressInstance = app.getHttpAdapter().getInstance();
  }
  expressInstance(request, response);
}
