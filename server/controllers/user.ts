import { authenticateMiddleware, procedure } from "@/server/trpc";
import userServices from "../services/user";
import { changePasswordInput, updateMeInput } from "../inputs/user";
import { error } from "console";
import { verifyPassword } from "@/utils/password";

export const getMe = procedure
  .use(authenticateMiddleware)
  .query(async (opts) => {
    const { ctx } = opts;
    const contextUser = ctx.user;
    const user = await userServices.getOneByEmail(contextUser.email ?? "");

    return user;
  });

export const getUsers = procedure
  .use(authenticateMiddleware)
  .query(async (opts) => {
    const users = userServices.getAll();

    return users;
  });

export const updateMe = procedure
  .use(authenticateMiddleware)
  .input(updateMeInput)
  .mutation(async (opts) => {
    const { input, ctx } = opts;

    try {
      const user = await userServices.update(ctx.user.email ?? "", input);

      return user;
    } catch (error) {
      throw error;
    }
  });

export const changePassword = procedure
  .use(authenticateMiddleware)
  .input(changePasswordInput)
  .mutation(async (opts) => {
    const { input, ctx } = opts;
    const { newPassword, oldPassword } = input;
    try {
      const user = await userServices.getOneByEmail(ctx.user.email ?? "", true);

      const isOldPasswordMatched = await verifyPassword(
        user.password,
        oldPassword
      );

      if (isOldPasswordMatched) {
        await userServices.updatePassword(ctx.user.email ?? "", newPassword);
        return "Change password successfully!";
      }

      throw new Error("Old password is not correct!");
    } catch (error) {
      throw error;
    }
  });
