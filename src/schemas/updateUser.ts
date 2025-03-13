import { z } from "zod"

export const updateProfilePictureSchema = z.object({
    profilePicture: z.string().url({ message: "URL inválida" })
})

export const updateNameSchema = z.object({
    name: z
        .string()
        .min(3, { message: "Nome deve ter no mínimo 3 caracteres" })
        .transform((name) =>
            name
                .trim()
                .split(" ")
                .map((word) => word[0].toUpperCase() + word.slice(1))
                .join(" ")
        )
})

export const updateEmailSchema = z.object({
    email: z.string().email({ message: "Email inválido" }).toLowerCase()
})

export const updatePasswordSchema = z
    .object({
        password: z.string().min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
        confirmPassword: z.string().min(6, { message: "Senha deve ter no mínimo 6 caracteres" })
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "As senhas não correspondem",
        path: ["confirmPassword"]
    })