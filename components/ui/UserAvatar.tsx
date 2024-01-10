import { User } from "@/types/user";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { AvatarImageProps, AvatarProps } from "@radix-ui/react-avatar";

type UserAvatarProps = {
  user?: User;
  loading?: boolean;
  imageProps?: AvatarImageProps;
} & AvatarProps;

export default function UserAvatar({
  user,
  imageProps,
  ...rest
}: UserAvatarProps) {
  const userDefaultAvatarName = () => {
    return [
      user?.firstName?.[0].toLocaleUpperCase() ?? "N",
      user?.lastName?.[0].toLocaleUpperCase() ?? "/A",
    ];
  };
  return (
    <Avatar {...rest}>
      <AvatarImage src={user?.avatar ?? ""} {...imageProps} />
      <AvatarFallback>{userDefaultAvatarName()}</AvatarFallback>
    </Avatar>
  );
}
