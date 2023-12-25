import { procedure } from "@/server/trpc";
import { registerInput } from "../inputs/auth";
import userServices from "../services/user";

export const register = procedure.input(registerInput).mutation(async (opt) => {
  const input = opt.input;

  if (await userServices.getOneByEmail(input.email)) {
    throw new Error("Email is taken!");
  }
});
