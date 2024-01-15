import { z } from "zod";

export const getUserByIdInput = z.object({
  id: z.number(),
});

export const updateMeInput = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.string().optional(),
});

export const changePasswordInput = z.object({
  oldPassword: z.string(),
  newPassword: z.string(),
});
