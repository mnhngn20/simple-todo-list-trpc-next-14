import { LoginInput } from "@/types/auth";
import { db } from "../../utils/db";
import { verifyPassword } from "../../utils/password";
import { generateToken } from "./token";

export const authServices = {
  async login({ email, password }: LoginInput) {
    try {
      const existingUser = await db.user.findUnique({
        where: {
          email,
        },
      });

      if (!existingUser) {
        throw new Error("Email or password incorrect!");
      }

      const isVerified = await verifyPassword(existingUser.password, password);

      if (!isVerified) {
        throw new Error("Email or password incorrect!");
      }

      return generateToken(existingUser);
    } catch (err) {
      console.log("ERROR", err);
    }
  },
};
