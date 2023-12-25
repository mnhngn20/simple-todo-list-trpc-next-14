import { procedure } from "@/server/trpc";
import { registerInput } from "../inputs/auth";
import userServices from "../services/user";
import { argon2d, hash } from "argon2";

export const register = procedure.input(registerInput).mutation(async (opt) => {
  const { email, password, ...rest } = opt.input;

  if (await userServices.getOneByEmail(email)) {
    throw new Error("Email is taken!");
  }

  const hashedPassword = hash(password);
});
