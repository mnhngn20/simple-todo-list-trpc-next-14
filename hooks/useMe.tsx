import { trpc } from "@/app/_trpc/client";
import { User } from "@/types/user";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { useSession } from "next-auth/react";

export function useMe() {
  const { status } = useSession();
  const queryClient = useQueryClient();

  const query = trpc.getMe.useQuery(undefined, {
    enabled: status === "authenticated",
    refetchOnMount: false,
  });

  const getMeKey = getQueryKey(trpc.getMe, undefined, "query");

  const updateMe = async (user: Partial<User>) => {
    const previousData: User | undefined = queryClient.getQueryData(getMeKey);

    queryClient.setQueryData(getMeKey, { ...user });

    return { previousData, newData: user };
  };

  const revertData = async (user: Partial<User>) =>
    queryClient.setQueryData(getMeKey, user);

  return [query, { updateMe, revertData }] as [
    typeof query,
    { updateMe: typeof updateMe; revertData: typeof revertData }
  ];
}
