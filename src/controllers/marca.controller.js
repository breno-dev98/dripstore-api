
import MarcaService from "../services/marca.service.js";

class MarcaController {
  // Criar uma marca
  static async criar(req, res) {
    try {
      const marca = await MarcaService.criarMarca(req.body);
      return res.status(201).json(marca);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criar marca" });
    }
  }

  // Listar todas as marcas
  static async listar(req, res) {
    try {
      const user_id = req.query
      if (!user_id) {
        return res.status(400).json({error: "user_id é obrigatório."})
      }
      const marcas = await MarcaService.listarMarcas(user_id);
      return res.status(200).json(marcas);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao listar marcas" });
    }
  }

  // Buscar marca por ID
  static async buscarPorId(req, res) {
    try {
      const marca = await MarcaService.buscarMarcaPorId(req.params.id);
      if (!marca) return res.status(404).json({ error: "marca não encontrado" });

      return res.status(200).json(marca);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar marca" });
    }
  }

  // Atualizar uma marca
  static async atualizar(req, res) {
    try {
      const marca = await MarcaService.atualizarMarca(req.params.id, req.body);
      if (!marca) return res.status(404).json({ error: "marca não encontrado" });

      return res.status(200).json(marca);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao atualizar marca" });
    }
  }

  // Deletar uma marca
  static async deletar(req, res) {
    try {
      const deletado = await MarcaService.deletarMarca(req.params.id);
      if (!deletado) return res.status(404).json({ error: "marca não encontrado" });

      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: "Erro ao deletar marca" });
    }
  }
}

export default MarcaController;
