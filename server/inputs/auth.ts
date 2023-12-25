import { z } from "zod";

export const registerInput = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.string().optional(),
  password: z.string(),
});

export const loginInput = z.object({
  email: z.string().email(),
  password: z.string(),
});
