"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { trpc } from "@/app/_trpc/client";
import { registerSchema } from "../_schema";

type RegisterForm = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const registerMutation = trpc.register.useMutation({
    onSuccess() {
      console.log("aaa");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  console.log(errors);

  const onSubmit = (data: RegisterForm) => {
    console.log(data);

    registerMutation.mutate({
      ...(data as any),
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span className="text-primary text-2xl font-bold">
          Create Your Account
        </span>
        <div>
          <Input
            placeholder="Enter your email address"
            {...register("email")}
          />
        </div>
        <div>
          <Input
            placeholder="Enter your first name"
            {...register("firstName")}
          />
        </div>
        <div>
          <Input placeholder="Enter your last name" {...register("lastName")} />
        </div>
        <div>
          <Input placeholder="Enter your password" {...register("password")} />
        </div>
        <div>
          <Input
            placeholder="Enter your password"
            {...register("confirmPassword")}
          />
        </div>
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
}
