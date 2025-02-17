import Endereco from "../models/endereco.model.js";

class EnderecoRepository {
    //Criar um novo endereco
    static async create(data) {
        return await Endereco.create(data);
    }

    //Buscar todos os enderecos
    static async findAll() {
        return await Endereco.findAll();
    }

    //Buscar endereco por id
    static async findById(id) {
        return await Endereco.findByPk(id);
    }

    //Atualizar endereco
    static async update(id, data) {
        const endereco = await Endereco.findByPk(id);
        if (!endereco) return null

        await endereco.update(data)
        return endereco;
    }

    //Deletar endereco
    static async delete(id) {
        const endereco = await Endereco.findByPk(id);
        if (!endereco) return null

        await endereco.destroy()
        return true;
    }
}

export default EnderecoRepository