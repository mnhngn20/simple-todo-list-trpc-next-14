import { PropsWithChildren } from "react";
import Header from "./Header";
import { twMerge } from "tailwind-merge";

type MainLayoutProps = {
  childCentered?: boolean;
};

export default function MainLayout({
  childCentered,
  children,
}: PropsWithChildren<MainLayoutProps>) {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Header />
      <div
        className={twMerge(
          "p-4 h-full",
          childCentered ? "flex items-center justify-center" : "mt-20"
        )}
      >
        {children}
      </div>
    </div>
  );
}
