import { db } from "@/db";

const userServices = {
  getAll() {
    return db.user.findMany();
  },
  getOneById(id: number) {
    return db.user.findUnique({
      where: {
        id,
      },
    });
  },
};

export default userServices;
