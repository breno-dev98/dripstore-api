import EnderecoRepository from "../repositories/EnderecoRepository.js";
import { validarEndereco } from "../utils/validarEndereco.js";

class EnderecoService {
    static async criarEndereco(data) {
        validarEndereco(data)
        return await EnderecoRepository.create(data);
    }

    static async listarEnderecos() {
        return await EnderecoRepository.findAll();
    }

    static async buscarEnderecoPorId(id) {
        return await EnderecoRepository.findById(id);
    }

    static async atualizarEndereco(id, data) {
        return await EnderecoRepository.update(id, data)
    }

    static async deletarEndereco(id) {
        return await EnderecoRepository.delete(id)
    }
}

export default EnderecoService;