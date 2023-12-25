import { authenticateMiddleware, procedure } from "@/server/trpc";
import userServices from "../services/user";
import { User } from "@prisma/client";

export const getMe = procedure
  .use(authenticateMiddleware)
  .query(async (opts) => {
    const { input, ctx } = opts;
    const contextUser = ctx.user;

    return contextUser as User;
  });

export const getUsers = procedure
  .use(authenticateMiddleware)
  .query(async (opts) => {
    const users = userServices.getAll();

    return users;
  });
