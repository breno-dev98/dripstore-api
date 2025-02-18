import CategoriaRepository from "../repositories/CategoriaRepository.js";


class CategoriaService {
    static async criarCategoria(data) {

        return await CategoriaRepository.create(data);
    }

    static async listarCategorias() {
        return await CategoriaRepository.findAll();
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