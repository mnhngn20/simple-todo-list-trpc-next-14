"use client";

import { trpc } from "../_trpc/client";

type TextProps = {};

export default function Text({}: TextProps) {
  const { data } = trpc.getTodos.useQuery();

  console.log(data);

  return <div>{JSON.stringify(data)}</div>;
}
