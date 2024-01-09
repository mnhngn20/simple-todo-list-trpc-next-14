import { PrismaClient } from "@prisma/client";

export function exclude<T extends object, Key extends keyof T>(
  obj: T,
  keys: Key[]
): Omit<T, Key> {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key as Key))
  ) as Omit<T, Key>;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export { prisma as db };
