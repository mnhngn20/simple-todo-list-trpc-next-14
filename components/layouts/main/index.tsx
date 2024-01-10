import { PropsWithChildren } from "react";
import Header from "./Header";
import { twMerge } from "tailwind-merge";
import Footer from "./Footer";

type MainLayoutProps = {
  childCentered?: boolean;
  showFooter?: boolean;
};

export default function MainLayout({
  childCentered,
  children,
  showFooter,
}: PropsWithChildren<MainLayoutProps>) {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Header />
      <div
        className={twMerge(
          "px-4 h-full overflow-hidden max-w-[1440px] mx-auto",
          childCentered
            ? "flex items-center justify-center"
            : "h-[calc(100vh-80px)] mt-20",
          showFooter && !childCentered && "max-h-[calc(100vh-80px-100px)]"
        )}
      >
        {children}
      </div>
      {showFooter && <Footer />}
    </div>
  );
}
