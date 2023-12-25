import { TRPCError, initTRPC } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { verify } from "jsonwebtoken";

export async function createContext({
  req,
}: trpcNext.CreateNextContextOptions) {
  async function getUserFromHeader() {
    if (req.headers.authorization) {
      const user = await verify(
        req.headers.authorization.split(" ")[1],
        process.env.ACCESS_TOKEN_SECRET_KEY as string
      );
      return user;
    }
    return null;
  }
  const user = await getUserFromHeader();
  return {
    user,
  };
}

const t = initTRPC.context<typeof createContext>().create();

export const authenticateMiddleware = t.middleware((opts) => {
  const { ctx } = opts;
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return opts.next({
    ctx: {
      user: ctx.user,
    },
  });
});

export const middleware = t.middleware;

export const router = t.router;
export const procedure = t.procedure;
