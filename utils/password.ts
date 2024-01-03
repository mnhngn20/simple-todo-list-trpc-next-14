import { hash, verify } from "argon2";

export async function hashPassword(password: string) {
  return await hash(password);
}

export async function verifyPassword(
  password: string,
  passwordToVerify: string
) {
  return await verify(password, passwordToVerify);
}
