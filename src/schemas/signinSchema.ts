import { z } from "zod"

export const signinSchema = z.object({
    email: z.string().email({message: "Email inválido"}).toLowerCase(),
    password: z.string().min(6, {message: "Senha deve ter no minímo 6 caracteres"})
})