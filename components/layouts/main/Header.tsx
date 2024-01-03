import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed bg-white w-full top-0 h-20 p-4 flex items-center justify-between border-b border-border">
      <span className="text-xl font-bold text-primary">Simple TODO</span>
      <div className="flex gap-4">
        <Link href="/login">
          <Button>Login</Button>
        </Link>
        <Link href="/register">
          <Button variant="secondary">Create An Account</Button>
        </Link>
      </div>
    </div>
  );
}
