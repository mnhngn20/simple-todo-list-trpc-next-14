import Link from "next/link";
import HeaderExtra from "./HeaderExtra";

export default function Header() {
  return (
    <div className="fixed bg-white w-full top-0 h-20 border-b border-border">
      <div className="max-w-[1440px] flex items-center justify-between w-full p-4 mx-auto">
        <Link href={"/"}>
          <span className="text-xl font-bold text-primary">Simple TODO</span>
        </Link>
        <HeaderExtra />
      </div>
    </div>
  );
}
