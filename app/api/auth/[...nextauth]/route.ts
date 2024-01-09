import { db } from "@/utils/db";
import { verifyPassword } from "@/utils/password";
import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import NextAuth, { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials) {
          const { email, password } = credentials;
          try {
            const existingUser = await db.user.findUnique({
              where: {
                email,
              },
            });

            if (!existingUser) {
              throw new Error("Email or password incorrect!");
            }

            const isVerified = await verifyPassword(
              existingUser.password,
              password
            );

            if (!isVerified) {
              throw new Error("Email or password incorrect!");
            }

            return {
              ...existingUser,
              id: String(existingUser.id),
              image: existingUser.avatar,
              name: existingUser.firstName,
            };
          } catch (error) {
            throw error;
          }
        }
        return null;
      },
    }),
  ],
};
export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
