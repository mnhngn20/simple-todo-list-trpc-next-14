import { requiredText } from "@/utils/validator";
import { z } from "zod";

export const profileSettingSchema = z.object({
  email: z.string().email(),
  firstName: requiredText("First Name"),
  lastName: requiredText("Last Name"),
  gender: z.enum(["Male", "Female"]),
});

export type ProfileSettingForm = z.infer<typeof profileSettingSchema>;
