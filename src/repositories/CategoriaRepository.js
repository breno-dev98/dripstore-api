import Categoria from "../models/categoria.model.js";

class CategoriaRepository {
    //Criar um novo categoria
    static async create(data) {
        return await Categoria.create(data);
    }

    //Buscar todos os categorias
    static async findAll() {
        return await Categoria.findAll();
    }

    //Buscar categoria por id
    static async findById(id) {
        return await Categoria.findByPk(id);
    }

    //Atualizar categoria
    static async update(id, data) {
        const categoria = await Categoria.findByPk(id);
        if (!categoria) return null

        await categoria.update(data)
        return categoria;
    }

    //Deletar categoria
    static async delete(id) {
        const categoria = await Categoria.findByPk(id);
        if (!categoria) return null

        await categoria.destroy()
        return true;
    }
}

export default CategoriaRepository