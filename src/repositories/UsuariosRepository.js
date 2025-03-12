import Usuarios from "../models/usuarios.models.js";

class UsuarioRepository {
    //Criar um novo usuario
    static async create(data) {
        return await Usuarios.create(data);
    }

    //Buscar todos os usuarios
    static async findAll() {
        return await Usuarios.findAll();
    }

    //Buscar usuario por id
    static async findById(id) {
        return await Usuarios.findByPk(id);
    }

    //Atualizar usuario
    static async update(id, data) {
        const usuario = await Usuarios.findByPk(id);
        if (!usuario) return null

        await usuario.update(data)
        return usuario;
    }

    //Deletar usuario
    static async delete(id) {
        const usuario = await Usuarios.findByPk(id);
        if (!usuario) return null

        await usuario.destroy()
        return true;
    }
}

export default UsuarioRepository