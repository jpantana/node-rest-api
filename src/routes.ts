// src/routes.ts

import { Express, Request, Response } from "express";
import validateRequest from './middleware/validateRequest';

export default function (app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));
}

export const postUser = function (app: Express, createUserSchema: any, createUserHandler: any) {
  app.post('/api/users', validateRequest(createUserSchema), createUserHandler);
}

export const postSession = function (app: Express, createUserSessionSchema: any, createUserSessionHandler: any) {
  app.post("/api/sessions", validateRequest(createUserSessionSchema), createUserSessionHandler);
}
