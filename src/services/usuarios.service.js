import UsuariosRepository from "../repositories/usuariosRepository.js";

class UsuariosService {

    static async buscarUsuarioPorEmail(email) {
        return await UsuariosRepository.findByEmail(email)
    }

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