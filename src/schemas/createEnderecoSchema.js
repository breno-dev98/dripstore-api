// schemas/enderecoSchema.js
import { z } from "zod";

export const createEnderecoSchema = z.object({
    cep: z.string().length(8, "CEP deve ter 8 caracteres."),
    logradouro: z.string().min(1, "Logradouro é obrigatório."),
    cidade: z.string().min(1, "Cidade é obrigatória."),
    estado: z.string().min(2, "Estado deve ter 2 caracteres."),
    numero: z.number().optional(),
    complemento: z.string().max(255, "Complemento deve ter no máximo 255 caracteres.").optional(),
});
