import { z } from "zod";

export const signInInput = z.object({
  username: z.string(),
  password: z.string(),
});

console.log("here");
export type SignInInputType = z.infer<typeof signInInput>;
