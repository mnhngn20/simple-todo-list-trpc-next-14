import { router } from "./trpc";
import userRoutes from "./routes/user";
import authRoutes from "./routes/auth";

export const appRouter = router({
  ...userRoutes,
  ...authRoutes,
});

export type AppRouter = typeof appRouter;
