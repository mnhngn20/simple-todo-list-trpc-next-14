import SideBarMenu from "@/components/ui/SideBarMenu";
import { PropsWithChildren } from "react";

const MENU_ITEMS = [
  {
    href: "/settings/profile",
    title: "Profile Settings",
    key: "Profile",
  },
  {
    href: "/settings/subscription",
    title: "Subscription",
    key: "Subscription",
  },
  {
    href: "/settings/billing",
    title: "Billing",
    key: "Billing",
  },
];

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-12 h-full">
      <SideBarMenu items={MENU_ITEMS} className="col-span-3" />
      <div className="p-4">{children}</div>
    </div>
  );
}
