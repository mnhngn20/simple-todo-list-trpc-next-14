import { getServerSession } from "next-auth";
import LoginForm from "../_components/LoginForm";
import { redirect } from "next/navigation";
import { getToken } from "next-auth/jwt";

export default async function Login() {
  const session = await getServerSession();

  console.log("session", session);

  // if (session?.user?.name) {
  //   redirect("/");
  // }

  return <LoginForm />;
}
