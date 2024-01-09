"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import UserProfile from "./UserProfile";
import { trpc } from "@/app/_trpc/client";

export default function HeaderExtra() {
  const { status } = useSession();

  const { data } = trpc.getMe.useQuery(undefined, {
    enabled: status === "authenticated",
  });

  if (status === "loading") {
    return null;
  }

  return (
    <div>
      {status === "authenticated" ? (
        <UserProfile user={data} />
      ) : (
        <div className="flex gap-4">
          <Link href="/login">
            <Button>Login</Button>
          </Link>
          <Link href="/register">
            <Button variant="secondary">Create An Account</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
