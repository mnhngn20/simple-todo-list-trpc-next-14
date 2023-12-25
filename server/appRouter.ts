import { router } from "./trpc";
import userRoutes from "./routes/user";

export const appRouter = router({
  ...userRoutes,
});

export type AppRouter = typeof appRouter;
