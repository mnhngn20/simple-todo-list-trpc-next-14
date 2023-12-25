import { Input } from "@/components/ui/input";
import LoginForm from "./_components/LoginForm";

export default function Login() {
  return (
    <div className="h-full grid grid-cols-5 p-4">
      <div className="col-span-3">a</div>
      <div className="col-span-2">
        <LoginForm />
      </div>
    </div>
  );
}
