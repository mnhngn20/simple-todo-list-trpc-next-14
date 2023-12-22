import { db } from "@/db";
import { procedure, router } from "./trpc";

export const appRouter = router({
  getTodos: procedure.query(async (opts) => {
    const users = await db.user.findFirst();

    return {
      users,
    };
  }),
});

export type AppRouter = typeof appRouter;
