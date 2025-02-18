
import CategoriaService from "../services/categoria.service.js";

class CategoriaController {
  // Criar uma categoria
  static async criar(req, res) {
    try {
      const categoria = await CategoriaService.criarCategoria(req.body);
      return res.status(201).json(categoria);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criar categoria" });
    }
  }

  // Listar todas as categorias
  static async listar(req, res) {
    try {
      const categorias = await CategoriaService.listarCategorias();
      return res.status(200).json(categorias);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao listar categorias" });
    }
  }

  // Buscar categoria por ID
  static async buscarPorId(req, res) {
    try {
      const categoria = await CategoriaService.buscarCategoriaPorId(req.params.id);
      if (!categoria) return res.status(404).json({ error: "Categoria não encontrado" });
      
      return res.status(200).json(categoria);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar categoria" });
    }
  }

  // Atualizar uma categoria
  static async atualizar(req, res) {
    try {
      const categoria = await CategoriaService.atualizarCategoria(req.params.id, req.body);
      if (!categoria) return res.status(404).json({ error: "Categoria não encontrado" });
      
      return res.status(200).json(categoria);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao atualizar categoria" });
    }
  }

  // Deletar uma categoria
  static async deletar(req, res) {
    try {
      const deletado = await CategoriaService.deletarCategoria(req.params.id);
      if (!deletado) return res.status(404).json({ error: "Categoria não encontrado" });
      
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: "Erro ao deletar categoria" });
    }
  }
}

export default CategoriaController;
