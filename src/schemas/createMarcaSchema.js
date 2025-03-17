import { z } from "zod"

export const marcaSchema = z.object({
    nome: z.string().min(2, "O nome da Marca deve ter pelo menos 3 dígitos").max(255, "O nome da Marca deve ter no máximo 255 dígitos")
})
