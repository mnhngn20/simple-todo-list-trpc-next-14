import { requiredText } from "@/utils/validator";
import { z } from "zod";

export const changePasswordFormSchema = z.object({
  oldPassword: requiredText("Old Password"),
  newPassword: requiredText("New Password"),
  confirmNewPassword: requiredText("Confirm New Password"),
});

export type ChangePasswordForm = z.infer<typeof changePasswordFormSchema>;
