import { procedure } from "@/server/trpc";
import userServices from "../services/user";
import { getUserByIdInput } from "../inputs/user";

export const getUserById = procedure
  .input(getUserByIdInput)
  .query(async (opts) => {
    const { input } = opts;
    const { id } = input;

    const user = userServices.getOneById(id);

    return user;
  });

export const getUsers = procedure.query(async (opts) => {
  const users = userServices.getAll();

  return users;
});
