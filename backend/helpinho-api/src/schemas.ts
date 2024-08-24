import { z } from "zod";

export const CreateUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  document: z.string(),
  birthDate: z.string(),
  password: z.string(),
});

export const EditUserSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  document: z.string().optional(),
  birthDate: z.string().optional(),
  password: z.string().optional(),
});

export type createUserSchema = z.infer<typeof CreateUserSchema>;
export type editUserSchema = z.infer<typeof EditUserSchema>;
