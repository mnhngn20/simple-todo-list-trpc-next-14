"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { trpc } from "@/app/_trpc/client";
import { registerSchema } from "../_schemas/registerSchema";
import BaseForm from "@/components/ui/BaseForm";
import FormItem from "@/components/ui/FormItem";
import Link from "next/link";
import GenderSelector from "./GenderSelector";
import { useRouter } from "next/navigation";
import useNotification from "@/hooks/useNotification";

type RegisterForm = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const { showSuccess, showError } = useNotification();
  const { push } = useRouter();
  const registerMutation = trpc.register.useMutation({
    onSuccess() {
      showSuccess("Register successfully!");
      push("/login");
    },
    onError: (error) => {
      console.log(error);

      showError(error.message);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterForm) => {
    registerMutation.mutate({
      ...data,
    });
  };

  return (
    <BaseForm
      onSubmit={handleSubmit(onSubmit)}
      title="Create your account"
      className="w-[550px] border-border p-6 border shadow-sm"
    >
      <FormItem label="Email" required error={errors.email?.message}>
        <Input placeholder="Enter your email" {...register("email")} />
      </FormItem>
      <div className="grid grid-cols-2 gap-4">
        <FormItem label="First Name" required error={errors.firstName?.message}>
          <Input
            placeholder="Enter your first name"
            {...register("firstName")}
          />
        </FormItem>
        <FormItem label="Last Name" required error={errors.lastName?.message}>
          <Input placeholder="Enter your last name" {...register("lastName")} />
        </FormItem>
      </div>
      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <FormItem label="Gender" required error={errors.gender?.message}>
            <GenderSelector
              onValueChange={(value) => field.onChange(value)}
              value={field.value}
            />
          </FormItem>
        )}
      />
      <FormItem label="Password" required error={errors.password?.message}>
        <Input
          placeholder="Enter your password"
          type="password"
          {...register("password")}
        />
      </FormItem>
      <FormItem
        label="Confirm Password"
        required
        error={errors.confirmPassword?.message}
      >
        <Input
          placeholder="Confirm your password"
          type="password"
          {...register("confirmPassword")}
        />
      </FormItem>
      <Button type="submit" loading={registerMutation.isLoading}>
        Register
      </Button>
      <span className="text-sm">
        Already has an account?{" "}
        <Link href="/login" className="text-primary font-medium">
          Login Now!
        </Link>
      </span>
    </BaseForm>
  );
}
