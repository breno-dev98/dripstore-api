
import MarcasRepository from "../repositories/MarcasRepository.js";
class MarcaService {
    static async criarMarca(body, userId) {
        const novaMarca = {
            ...body,
            user_id: userId
        }
        return await MarcasRepository.create(novaMarca);
    }

    static async listarMarcas() {
        return await MarcasRepository.findAll();
    }

    static async getAllByUser(userId) {
        return await MarcasRepository.findByUser(userId);
    };


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