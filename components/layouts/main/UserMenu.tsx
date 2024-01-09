import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOutIcon, UserCircle2Icon } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

const MENU_ITEMS: (
  | { type: "separator"; id: string }
  | { type: "item"; title: string; href: string; id: string }
)[] = [
  {
    id: "1",
    title: "Profile Settings",
    href: "/settings/profile",
    type: "item",
  },
  {
    id: "2",
    title: "Billing",
    href: "/settings/billing",
    type: "item",
  },
  {
    id: "3",
    title: "Subscription",
    href: "/settings/subscription",
    type: "item",
  },
  {
    id: "4",
    type: "separator",
  },
  {
    id: "5",
    title: "FAQs",
    href: "/faq",
    type: "item",
  },
  {
    id: "6",
    title: "About Us",
    href: "/about-us",
    type: "item",
  },
];

export default function UserMenu({ children }: PropsWithChildren) {
  const { push } = useRouter();

  const onSignOut = () => {
    signOut();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>
          <div className="flex items-center gap-2">
            <UserCircle2Icon size={16} />
            My Account
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {MENU_ITEMS.map((item) =>
          item.type === "item" ? (
            <DropdownMenuItem onClick={() => push(item.href)} key={item.id}>
              {item.title}
            </DropdownMenuItem>
          ) : (
            <DropdownMenuSeparator key={item.id} />
          )
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onSignOut}>
          Log out
          <DropdownMenuShortcut>
            <LogOutIcon size={16} />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
