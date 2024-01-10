import MainLayout from "@/components/layouts/main";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function Layout({ children }: PropsWithChildren) {
  const session = await getServerSession();

  if (!session?.user?.email) {
    redirect("/login");
  }

  return <MainLayout>{children}</MainLayout>;
}
