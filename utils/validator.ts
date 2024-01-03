import { z } from "zod";

export const trimText = (text: string) => text.replace(/\s+/g, "");
export const requiredText = (name?: string) =>
  z
    .string()
    .transform(trimText)
    .pipe(z.string().min(1, `${name} is Required`));
