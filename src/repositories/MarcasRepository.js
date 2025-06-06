import Marcas from "../models/marcas.model.js";

class MarcasRepository {
    //Criar um novo marca
    static async create(data) {
        return await Marcas.create(data);
    }

    //Buscar todos os marcas
    static async findAll() {
        return await Marcas.findAll();
    }

    //Buscar marca por id
    static async findById(id) {
        return await Marcas.findByPk(id);
    }

    static async findByUser (userId) {
        return await Marcas.findAll({
            where: { user_id: userId },
        });
    };


    //Atualizar marca
    static async update(id, data) {
        const marca = await Marcas.findByPk(id);
        if (!marca) return null

        await marca.update(data)
        return marca;
    }

    //Deletar marca
    static async delete(id) {
        const marca = await Marcas.findByPk(id);
        if (!marca) return null

        await marca.destroy()
        return true;
    }

    //Buscar por nome
    static async findOne(nome) {
        const marca = await Marcas.findOne({ where: { nome } });
        return marca !== null;
    }
}

export default MarcasRepository