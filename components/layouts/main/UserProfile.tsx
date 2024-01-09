import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/types/user";
import React from "react";
import UserMenu from "./UserMenu";
import { ChevronDownIcon } from "lucide-react";

type UserProfileProps = {
  user?: User;
};

export default function UserProfile({ user }: UserProfileProps) {
  const userDefaultAvatarName = () => {
    return [
      user?.firstName?.[0].toLocaleUpperCase() ?? "N",
      user?.lastName?.[0].toLocaleUpperCase() ?? "/A",
    ];
  };

  return (
    <UserMenu>
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage src={user?.avatar ?? ""} />
          <AvatarFallback>{userDefaultAvatarName()}</AvatarFallback>
        </Avatar>
        <div className="text-sm">
          {[user?.firstName ?? "", user?.lastName].join(" ")}
        </div>
        <ChevronDownIcon />
      </div>
    </UserMenu>
  );
}
