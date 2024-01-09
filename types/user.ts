import { User as DBUser } from "@prisma/client";

export type User = Omit<DBUser, "password" | "updatedAt" | "createdAt">;
