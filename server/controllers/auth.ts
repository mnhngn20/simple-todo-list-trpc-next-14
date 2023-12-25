import { procedure } from "@/server/trpc";
import { loginInput, registerInput } from "../inputs/auth";
import userServices from "../services/user";
import { authServices } from "../services/auth";

export const register = procedure.input(registerInput).mutation(async (opt) => {
  const { input } = opt;

  return await userServices.create(input);
});

export const login = procedure.input(loginInput).mutation(async (opt) => {
  const { input } = opt;

  return await authServices.login(input);
});
