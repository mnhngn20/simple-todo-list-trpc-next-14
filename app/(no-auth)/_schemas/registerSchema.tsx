import { requiredText } from "@/utils/validator";
import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  password: requiredText("Password"),
  confirmPassword: requiredText("Confirm Password"),
  firstName: requiredText("First Name"),
  lastName: requiredText("Last Name"),
  gender: z.enum(["Male", "Female"]),
});
