// controllers/ProdutoController.js
import ProdutoService from "../services/produto.service.js";

class ProdutoController {
  // Criar um produto
  static async criar(req, res) {
    try {
      const produto = await ProdutoService.criarProduto(req.body, req.user.id);
      return res.status(201).json(produto);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criar produto" });
    }
  }

  // Listar todos os produtos
  static async listar(req, res) {
    try {
      const produtos = await ProdutoService.listarProdutos();
      return res.status(200).json(produtos);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao listar produtos" });
    }
  }
  // Listar todos os produtos
  static async listarPorUsuario(req, res) {
    try {
      const produtos = await ProdutoService.listarProdutosPorUsuario(req.user.id);
      return res.status(200).json(produtos);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao listar produtos" });
    }
  }

  // Buscar um produto por ID
  static async buscarPorId(req, res) {
    try {
      const produto = await ProdutoService.buscarProdutoPorId(req.params.id);
      if (!produto) return res.status(404).json({ error: "Produto não encontrado" });
      
      return res.status(200).json(produto);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar produto" });
    }
  }

  // Atualizar um produto
  static async atualizar(req, res) {
    try {
      const produto = await ProdutoService.atualizarProduto(req.params.id, req.body);
      if (!produto) return res.status(404).json({ error: "Produto não encontrado" });
      
      return res.status(200).json(produto);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao atualizar produto" });
    }
  }

  // Deletar um produto
  static async deletar(req, res) {
    try {
      const deletado = await ProdutoService.deletarProduto(req.params.id);
      if (!deletado) return res.status(404).json({ error: "Produto não encontrado" });
      
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: "Erro ao deletar produto" });
    }
  }
}

export default ProdutoController;
