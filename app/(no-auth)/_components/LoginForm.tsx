"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import BaseForm from "@/components/ui/BaseForm";
import FormItem from "@/components/ui/FormItem";
import Divider from "@/components/ui/Divider";
import { loginSchema } from "../_schemas/loginSchema";
import { FacebookIcon, GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import useNotification from "@/hooks/useNotification";
import { useRouter } from "next/navigation";

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { showError } = useNotification();
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);

    const response = await signIn("credentials", {
      redirect: false,
      ...data,
    });

    if (response?.error) {
      showError(response?.error);
    } else {
      push("/");
    }
    setIsLoading(false);
  };

  return (
    <BaseForm
      onSubmit={handleSubmit(onSubmit)}
      className="w-[450px] border-border p-6 border shadow-sm"
      title="Login"
    >
      <FormItem label="Email" error={errors.email?.message} required>
        <Input placeholder="Enter your email address" {...register("email")} />
      </FormItem>
      <FormItem label="Password" required error={errors.password?.message}>
        <Input
          placeholder="Enter your password"
          type="password"
          {...register("password")}
        />
      </FormItem>
      <span className="text-sm -mt-4 text-right text-gray-500 hover:text-gray-400 cursor-pointer">
        Forgot your password?
      </span>
      <Button type="submit" loading={isLoading}>
        Login
      </Button>
      <Divider content="OR" />
      <span className="grid grid-cols-3 gap-4">
        <Button className="bg-[#4267B2] hover:bg-[#4a74c9]">
          <FacebookIcon />
        </Button>
        <Button className="bg-black hover:bg-[#323232]">
          <GithubIcon />
        </Button>
        <Button variant="outline">
          <Image
            src="/images/google-icon.png"
            alt="Google"
            width={24}
            height={24}
          />
        </Button>
      </span>
      <span className="text-sm text-gray-500">
        {`Don't have an account? `}{" "}
        <Link href="/register" className="text-primary font-medium">
          Register Now!
        </Link>
      </span>
    </BaseForm>
  );
}
