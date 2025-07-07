import { z } from "zod"

export const interactSchema = z.object({
    content: z.string()
        .trim()
        .min(1, { message: "O comentário não pode ser vazio" })
        .min(5, "O comentário precisa ter pelo menos 5 caracteres")
        .max(500, "O comentário não pode ter mais de 500 caracteres")
        .refine(value => !/^\s*$/.test(value), { message: "A pesquisa não pode ser vazia" })
        .refine((val) => !/<[^>]*script|<\/?[a-z][\s\S]*>/i.test(val), "HTML ou scripts não são permitidos")
})