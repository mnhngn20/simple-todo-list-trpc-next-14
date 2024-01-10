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
  profileSettingSchema,
} from "../_schemas/profile-setting";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar } from "@/components/ui/avatar";
import UserAvatar from "@/components/ui/UserAvatar";
import { useMe } from "@/hooks/useMe";

type ProfileSettingProps = {};

export default function ProfileSetting({}: ProfileSettingProps) {
  const { data, isFetching } = useMe();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ProfileSettingForm>({
    resolver: zodResolver(profileSettingSchema),
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Profile Information</CardTitle>
        <CardDescription>
          Make changes to your profile here. Click save when {`you're`} done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <BaseForm>
          <UserAvatar user={data} className="w-32 h-32 mx-auto" />
          <FormItem label="Email">
            <Input placeholder="Enter first name" />
          </FormItem>
          <div className="grid grid-cols-2 gap-4">
            <FormItem label="First Name">
              <Input placeholder="Enter first name" />
            </FormItem>
            <FormItem label="Last Name">
              <Input placeholder="Enter last name" />
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
        </BaseForm>
      </CardContent>
      <CardFooter className="justify-end gap-4">
        <Button variant="secondary">Reset</Button>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  );
}
