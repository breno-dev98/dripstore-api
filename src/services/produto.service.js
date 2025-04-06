import ProdutoRepository from "../repositories/produtoRepository.js";

class ProdutoService {
    static async criarProduto(body, userId) {
        const novoProduto = {
            ...body,
            user_id: userId
        }
        return await ProdutoRepository.create(novoProduto);
    }

    static async listarProdutos() {
        return await ProdutoRepository.findAll();
    }
    static async listarProdutosPorUsuario(userId) {
        return await ProdutoRepository.findAllByUser(userId);
    }

    static async buscarProdutoPorId(id) {
        return await ProdutoRepository.findById(id);
    }

    static async atualizarProduto(id, data) {
        return await ProdutoRepository.update(id, data)
    }

    static async deletarProduto(id) {
        return await ProdutoRepository.delete(id)
    }
}

export default ProdutoService