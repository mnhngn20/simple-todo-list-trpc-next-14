import {
  getMe,
  getUsers,
  updateMe,
  changePassword,
} from "@/server/controllers/user";

const userRoutes = {
  getMe,
  getUsers,
  updateMe,
  changePassword,
};

export default userRoutes;
