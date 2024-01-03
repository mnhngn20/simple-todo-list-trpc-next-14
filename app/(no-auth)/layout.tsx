import MainLayout from "@/components/layouts/main";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <MainLayout childCentered>{children}</MainLayout>;
}
