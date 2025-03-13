import UsuariosRepository from "../repositories/usuariosRepository.js";
import bcrypt from 'bcrypt'

const hashSenha = async (senha) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(senha, salt)
}

const compararSenha = async (senhaDigitada, senhaHash) => {
    return await bcrypt.compare(senhaDigitada, senhaHash);
};

export { hashSenha, compararSenha}

class UsuariosService {
    static async criarUsuarios(data) {
        return await UsuariosRepository.create(data);
    }

    static async listarUsuarioss() {
        return await UsuariosRepository.findAll();
    }

    static async buscarUsuariosPorId(id) {
        return await UsuariosRepository.findById(id);
    }

    static async atualizarUsuarios(id, data) {
        return await UsuariosRepository.update(id, data)
    }

    static async deletarUsuarios(id) {
        return await UsuariosRepository.delete(id)
    }
}

export default UsuariosService