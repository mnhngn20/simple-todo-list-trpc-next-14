import { db, exclude } from "@/utils/db";
import { hash } from "argon2";
import { z } from "zod";
import { registerInput } from "../inputs/auth";

const userServices = {
  async getAll() {
    return await db.user.findMany();
  },
  async getOneById(id: number) {
    try {
      const user = await db.user.findUnique({
        where: {
          id,
        },
      });

      if (!user) {
        throw new Error("User not found!");
      }

      return exclude(user, ["password"]);
    } catch (error) {
      throw error;
    }
  },
  async getOneByEmail(email: string) {
    try {
      const user = await db.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        throw new Error("User not found!");
      }

      return exclude(user, ["password"]);
    } catch (error) {
      throw error;
    }
  },
  async create(input: z.infer<typeof registerInput>) {
    try {
      const { email, password, ...rest } = input;

      if (
        await db.user.findUnique({
          where: {
            email,
          },
        })
      ) {
        throw new Error("Email is taken!");
      }

      const hashedPassword = await hash(password);

      const user = await db.user.create({
        data: {
          email,
          password: hashedPassword,
          ...rest,
        },
      });

      return exclude(user, ["password"]);
    } catch (error) {
      throw error;
    }
  },
};

export default userServices;
