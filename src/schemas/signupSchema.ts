import { z } from "zod"

export const signupSchema = z.object({
    name: z.string()
        .min(3, { message: "Nome deve ter no minímo 3 caracteres" })
        .transform((name) =>
            name.trim()
                .split(" ")
                .map((word) => word[0].toUpperCase() + word.slice(1))
                .join(" ")
        ),
    email: z.string().email({ message: "Email inválido" }).toLowerCase(),
    password: z.string().min(6, "Senha deve ter no minímo 6 caracteres"),
    confirmPassword: z.string().min(6, "Senha deve ter no minímo 6 caracteres")
}).refine((data)=> data.password === data.confirmPassword, {message: "As senhas não correspondem", path:["confirmPassword"]})