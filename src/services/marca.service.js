import MarcasRepository from "../repositories/MarcasRepository.js";
import ServiceError from "../utils/ServiceError.js"
class MarcaService {
    static async criarMarca(data) {
        const {nome} = data;
        if (typeof nome !== 'string' || nome.trim() === '') {
            throw new ServiceError('Nome é obrigatório e deve ser uma string')
        }

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