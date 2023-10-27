import { z } from "zod";

export const AuthSchema = z.object({
    username: z.string({ required_error: "Username must be provided" }).trim().toLowerCase().min(2, {message: "Username  must be at least 2 characters"}),
    password: z.string({ required_error: "Password must be provided" }).trim().min(8, {message: "Password must be at least 8 characters"}),
});