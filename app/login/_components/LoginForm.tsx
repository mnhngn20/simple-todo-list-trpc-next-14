"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "../_schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { trpc } from "@/app/_trpc/client";

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const login = trpc.login.useMutation({
    onSuccess() {
      console.log("aaa");
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data: LoginForm) => {
    login.mutate({
      ...data,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span className="text-primary text-2xl font-bold">Login</span>
        <div>
          <Input
            placeholder="Enter your email address"
            {...register("email")}
          />
        </div>
        <div>
          <Input placeholder="Enter your password" {...register("password")} />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
