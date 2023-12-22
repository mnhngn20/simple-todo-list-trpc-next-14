import { AppRouter } from "@/server/appRouter";
import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { createTRPCReact } from "@trpc/react-query";

const getAppUrl = () => {
  if (typeof window !== "undefined") return "";

  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export const trpc = createTRPCReact<AppRouter>({});
