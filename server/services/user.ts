import { db } from "@/server/db";
import { CreateUserInput } from "@/types/user";

const userServices = {
  async getAll() {
    return await db.user.findMany();
  },
  async getOneById(id: number) {
    return await db.user.findUnique({
      where: {
        id,
      },
    });
  },
  async getOneByEmail(email: string) {
    return await db.user.findUnique({
      where: {
        email,
      },
    });
  },
  async create(input: CreateUserInput) {
    const user = await db.user.create({
      data: input,
    });

    return user;
  },
};

export default userServices;
