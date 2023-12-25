import { registerInput } from "@/server/inputs/auth";

export type CreateUserInput = {
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  password: string;
};
