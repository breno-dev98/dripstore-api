import CategoriaRepository from "../repositories/CategoriaRepository.js";


class CategoriaService {
    static async criarCategoria(body, userId) {
        const novaCategoria = {
            ...body,
            user_id: userId
        }
        return await CategoriaRepository.create(novaCategoria);
    }

    static async listarCategorias() {
        return await CategoriaRepository.findAll();
    }
    static async listarCategoriasPorUsuario(req) {
        const userId = req.user.id
        return await CategoriaRepository.findAll(userId);
    }

    static async buscarCategoriaPorId(id) {
        return await CategoriaRepository.findById(id);
    }

    static async atualizarCategoria(id, data) {
        return await CategoriaRepository.update(id, data)
    }

    static async deletarCategoria(id) {
        return await CategoriaRepository.delete(id)
    }
}

export default CategoriaService;