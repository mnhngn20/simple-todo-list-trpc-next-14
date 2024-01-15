import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/types/user";
import React from "react";
import UserMenu from "./UserMenu";
import { ChevronDownIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/Skeleton";
import UserAvatar from "@/components/ui/UserAvatar";

type UserProfileProps = {
  user?: User;
  loading?: boolean;
};

export default function UserProfile({ user, loading }: UserProfileProps) {
  return (
    <UserMenu>
      <div className="flex gap-2 items-center">
        {loading ? (
          <Skeleton className="h-10 w-10 rounded-full" />
        ) : (
          <UserAvatar />
        )}
        <div className="text-sm">
          {loading ? (
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-[80px]" />
              <Skeleton className="h-4 w-[60px]" />
            </div>
          ) : (
            [user?.firstName ?? "", user?.lastName].join(" ")
          )}
        </div>
        <ChevronDownIcon />
      </div>
    </UserMenu>
  );
}
