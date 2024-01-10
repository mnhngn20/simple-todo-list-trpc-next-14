import { trpc } from "@/app/_trpc/client";
import { useSession } from "next-auth/react";

export function useMe() {
  const { status } = useSession();

  const query = trpc.getMe.useQuery(undefined, {
    enabled: status === "authenticated",
    refetchOnMount: false,
  });

  return query;
}
