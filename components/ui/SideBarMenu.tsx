"use client";

import { cn } from "@/utils/cn";
import { navigationMenuTriggerStyle } from "./navigation-menu";
import Link from "next/link";

type SideBarMenuProps = {
  items: SideBarMenuItem[];
  className?: string;
};

export type SideBarMenuItem = {
  href: string;
  title: string;
  key: string;
};

export default function SideBarMenu({
  items = [],
  className,
}: SideBarMenuProps) {
  return (
    <div
      className={cn(
        "w-full h-full border-r flex flex-col gap-2 border-l border-border p-4",
        className
      )}
    >
      {items.map((item) => (
        <Link href={item.href} key={item.key}>
          <div
            className={cn(
              navigationMenuTriggerStyle(),
              "cursor-pointer w-full text-left justify-between"
            )}
          >
            {item.title}
          </div>
        </Link>
      ))}
    </div>
  );
}
