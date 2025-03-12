// middlewares/validarRequisicao.js
import { ZodError } from "zod";

export function validarRequisicao(schema) {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next(); // Se a validação passar, segue para o próximo middleware/controller
        } catch (error) {
            if (error instanceof ZodError) {
                // Formatar erros do Zod
                const detalhes = error.errors.map((err) => ({
                    field: err.path.join("."),
                    message: err.message,
                }));
                return res.status(400).json({
                    error: "Erro de validação",
                    statusCode: 400,
                    details: detalhes,
                });
            }
            next(error); // Outros erros
        }
    };
}
