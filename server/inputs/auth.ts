import { z } from "zod";

export const registerInput = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.string(),
  password: z.string(),
});
