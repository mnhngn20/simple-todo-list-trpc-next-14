import { authenticateMiddleware, procedure } from "@/server/trpc";
import userServices from "../services/user";
import { User } from "@prisma/client";

export const getMe = procedure
  .use(authenticateMiddleware)
  .query(async (opts) => {
    const { ctx } = opts;
    const contextUser = ctx.user;
    const user = await userServices.getOneByEmail(contextUser.email ?? "");

    return user;
  });

export const getUsers = procedure
  .use(authenticateMiddleware)
  .query(async (opts) => {
    const users = userServices.getAll();

    return users;
  });
