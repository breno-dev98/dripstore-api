import { z } from 'zod'
export const createUserSchema = z.object({
    nome: z.string().nonempty("O campo 'nome' é obigatório.").min(3, "O nome deve ter pelo menos 3 caracteres"),

    cpf: z.string().nonempty("O campo 'cpf' é obigatório.").min(11, "CPF deve ter no mínimo 11 dígitos").max(15, "CPF deve ter no máximo 15 dígitos"),

    email: z.string().nonempty("O campo 'email' é obigatório.").email("E-mail inválido"),

    senha: z.string().nonempty("O campo 'senha' é obigatório.").min(6, "A senha precisa ter no mínimo 6 caracteres").max(20, "A senha deve ter no máximo 20 caracteres"),
    
    telefone: z.string().nonempty("O campo 'telefone' é obrigatório.").min(11, "Telefone deve ter no máximo 11 dígitos").max(15, "Telefone deve ter no máximo 15 dígitos")
})
