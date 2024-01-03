"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { trpc } from "@/app/_trpc/client";
import BaseForm from "@/components/ui/BaseForm";
import FormItem from "@/components/ui/FormItem";
import Divider from "@/components/ui/Divider";
import { loginSchema } from "../_schemas/loginSchema";
import { FacebookIcon, GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { setAccessToken } from "@/utils/token";

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const login = trpc.login.useMutation({
    onSuccess(data) {
      if (data?.accessToken) {
        setAccessToken(data?.accessToken);
      }
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginForm) => {
    login.mutate(data);
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
      <Button type="submit" loading={login.isLoading}>
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
          <Image src="/google-icon.png" alt="Google" width={24} height={24} />
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
