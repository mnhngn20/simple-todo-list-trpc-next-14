import { User } from "@prisma/client";
import { sign } from "jsonwebtoken";

export function generateToken(user: User) {
  const accessToken = sign(
    { ...user },
    process.env.ACCESS_TOKEN_SECRET_KEY as string,
    {
      expiresIn: "30m",
    }
  );

  const refreshToken = sign(
    { id: user.id },
    process.env.REFRESH_TOKEN_SECRET_KEY as string,
    {
      expiresIn: "1year",
    }
  );

  return {
    accessToken,
    refreshToken,
  };
}
