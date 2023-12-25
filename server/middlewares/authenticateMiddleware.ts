import { TRPCError } from "@trpc/server";
import { middleware } from "../trpc";

export const authenticateMiddleware = middleware((opts) => {
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
