// middlewares/validarNomeMarca.js
import MarcasRepository from "../repositories/MarcasRepository.js";

export async function validarNomeMarca(req, res, next) {
    const { nome } = req.body;

    try {
        // Verificar se a marca já existe no banco de dados
        const marcaExistente = await MarcasRepository.findOne(nome);
        if (marcaExistente) {
            return res.status(400).json({ error: "O nome da marca já existe no banco de dados" });
        }
        next(); // Se não houver erro, prossegue para o próximo middleware ou controller
    } catch (error) {
        return res.status(500).json({ error: "Erro ao verificar nome da marca" });
    }
}
