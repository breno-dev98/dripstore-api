import MarcasRepository from "../repositories/MarcasRepository.js";
class MarcaService {
    static async criarMarca(data) {
        return await MarcasRepository.create(data);
    }

    static async listarMarcas() {
        return await MarcasRepository.findAll();
    }

    static async buscarMarcaPorId(id) {
        return await MarcasRepository.findById(id);
    }

    static async atualizarMarca(id, data) {
        return await MarcasRepository.update(id, data)
    }

    static async deletarMarca(id) {
        return await MarcasRepository.delete(id)
    }
}

export default MarcaService