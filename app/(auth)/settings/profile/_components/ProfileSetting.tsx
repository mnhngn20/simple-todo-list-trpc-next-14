"use client";

import GenderSelector from "@/app/(no-auth)/_components/GenderSelector";
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
import { Controller, useForm } from "react-hook-form";
import {
  ProfileSettingForm,
  profileSettingFormSchema,
} from "../_schemas/profile-setting";
import { zodResolver } from "@hookform/resolvers/zod";
import UserAvatar from "@/components/ui/UserAvatar";
import { useMe } from "@/hooks/useMe";
import { trpc } from "@/app/_trpc/client";
import useNotification from "@/hooks/useNotification";
import FormSkeleton from "@/components/ui/Skeleton/FormSkeleton";

type ProfileSettingProps = {};

export default function ProfileSetting({}: ProfileSettingProps) {
  const [{ data, isLoading }, { updateMe, revertData }] = useMe();
  const { showSuccess, showError } = useNotification();

  const updateMeMutation = trpc.updateMe.useMutation({
    onMutate: async (user) => await updateMe(user),
    onError(error, __, context) {
      showError(error.message);
      context?.previousData && revertData(context?.previousData);
    },
    onSuccess() {
      showSuccess("Updated profile successfully!");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    getValues,
  } = useForm<ProfileSettingForm>({
    resolver: zodResolver(profileSettingFormSchema),
    values: {
      ...(data as ProfileSettingForm),
    },
  });

  const onSubmit = (data: ProfileSettingForm) => {
    updateMeMutation.mutate({
      ...data,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Profile Information</CardTitle>
        <CardDescription>
          Make changes to your profile here. Click save when {`you're`} done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <FormSkeleton loading={isLoading}>
          <BaseForm onSubmit={handleSubmit(onSubmit)}>
            <UserAvatar user={data} className="w-32 h-32 mx-auto" />
            <FormItem label="Email" required error={errors.email?.message}>
              <Input placeholder="Enter first name" {...register("email")} />
            </FormItem>
            <div className="grid grid-cols-2 gap-4">
              <FormItem
                label="First Name"
                required
                error={errors.firstName?.message}
              >
                <Input
                  placeholder="Enter first name"
                  {...register("firstName")}
                />
              </FormItem>
              <FormItem
                label="Last Name"
                required
                error={errors.lastName?.message}
              >
                <Input
                  placeholder="Enter last name"
                  {...register("lastName")}
                />
              </FormItem>
            </div>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <FormItem
                  label="Gender"
                  required
                  error={errors.gender?.message}
                >
                  <GenderSelector
                    onValueChange={(value) => field.onChange(value)}
                    value={field.value}
                  />
                </FormItem>
              )}
            />
          </BaseForm>
        </FormSkeleton>
      </CardContent>
      <CardFooter className="justify-end gap-4">
        <Button onClick={() => reset()} variant="secondary">
          Reset
        </Button>
        <Button
          onClick={() => onSubmit(getValues())}
          disabled={isLoading}
          loading={updateMeMutation.isLoading}
        >
          Save changes
        </Button>
      </CardFooter>
    </Card>
  );
}
