"use client";

import BaseForm from "@/components/ui/BaseForm";
import FormItem from "@/components/ui/FormItem";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from "@/app/_trpc/client";
import useNotification from "@/hooks/useNotification";
import { signOut } from "next-auth/react";
import {
  ChangePasswordForm,
  changePasswordFormSchema,
} from "../_schemas/password-setting";

type PasswordSettingProps = {};

export default function PasswordSetting({}: PasswordSettingProps) {
  const { showSuccess, showError } = useNotification();

  const changePasswordMutation = trpc.changePassword.useMutation({
    onError(error) {
      showError(error.message);
    },
    onSuccess() {
      showSuccess("Change password successfully!");
      signOut();
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<ChangePasswordForm>({
    resolver: zodResolver(changePasswordFormSchema),
  });

  const onSubmit = (data: ChangePasswordForm) => {
    changePasswordMutation.mutate({
      ...data,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Password</CardTitle>
        <CardDescription>
          Change your password here. After saving, {`you'll`} be logged out.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <BaseForm onSubmit={handleSubmit(onSubmit)}>
          <FormItem
            label="Old Password"
            required
            error={errors.oldPassword?.message}
          >
            <Input
              placeholder="Enter password"
              type="password"
              {...register("oldPassword")}
            />
          </FormItem>
          <FormItem
            label="New Password"
            required
            error={errors.newPassword?.message}
          >
            <Input
              placeholder="Enter new password"
              type="password"
              {...register("newPassword")}
            />
          </FormItem>
          <FormItem
            label="Confirm New Password"
            required
            error={errors.confirmNewPassword?.message}
          >
            <Input
              placeholder="Confirm your new password"
              type="password"
              {...register("confirmNewPassword")}
            />
          </FormItem>
        </BaseForm>
      </CardContent>
      <CardFooter className="justify-end gap-4">
        <Button onClick={() => reset()} variant="secondary">
          Reset
        </Button>
        <Button
          onClick={() => onSubmit(getValues())}
          loading={changePasswordMutation.isLoading}
        >
          Change Password
        </Button>
      </CardFooter>
    </Card>
  );
}
