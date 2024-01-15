import { db, exclude } from "@/utils/db";
import { hash } from "argon2";
import { z } from "zod";
import { registerInput } from "../inputs/auth";
import { changePasswordInput, updateMeInput } from "../inputs/user";
import { User as DbUser } from "@prisma/client";
import { User } from "@/types/user";

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
  async getOneByEmail<NotExcludePassword extends boolean>(
    email: string,
    notExcludePassword?: NotExcludePassword
  ): Promise<NotExcludePassword extends true ? DbUser : User> {
    try {
      const user = await db.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        throw new Error("User not found!");
      }

      return (
        notExcludePassword ? user : exclude(user, ["password"])
      ) as NotExcludePassword extends true ? DbUser : User;
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
  async update(email: string, input: z.infer<typeof updateMeInput>) {
    return await db.user.update({
      where: {
        email,
      },
      data: input,
    });
  },
  async updatePassword(email: string, newPassword: string) {
    const hashedPassword = await hash(newPassword);

    return await db.user.update({
      where: {
        email,
      },
      data: {
        password: hashedPassword,
      },
    });
  },
};

export default userServices;
