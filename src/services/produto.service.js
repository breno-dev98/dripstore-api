import ProdutoRepository from "../repositories/produtoRepository.js";

class ProdutoService {
    static async criarProduto(data) {
        return await ProdutoRepository.create(data);
    }

    static async listarProdutos() {
        return await ProdutoRepository.findAll();
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