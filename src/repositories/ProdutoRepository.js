import Produto from "../models/produto.model.js";

class ProdutoRepository {
    //Criar um novo produto
    static async create(data) {
        return await Produto.create(data);
    }

    //Buscar todos os produtos
    static async findAll() {
        return await Produto.findAll();
    }
    //Buscar todos os produtos do usuario
    static async findAllByUser(userId) {
        return await Produto.findAll({
            where: {user_id: userId}
        });
    }

    //Buscar produto por id
    static async findById(id) {
        return await Produto.findByPk(id);
    }

    //Atualizar produto
    static async update(id, data) {
        const produto = await Produto.findByPk(id);
        if (!produto) return null

        await produto.update(data)
        return produto;
    }

    //Deletar produto
    static async delete(id) {
        const produto = await Produto.findByPk(id);
        if (!produto) return null

        await produto.destroy()
        return true;
    }
}

export default ProdutoRepository