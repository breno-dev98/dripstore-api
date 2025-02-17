// controllers/EnderecoController.js
import EnderecoService from "../services/endereco.service.js";
import ServiceError from "../utils/ServiceError.js";

class EnderecoController {
  // Criar um endereco
  static async criar(req, res) {
    try {
      const endereco = await EnderecoService.criarEndereco(req.body);
      return res.status(201).json(endereco);
    } catch (error) {
      if (error instanceof ServiceError) {
        return res.status(error.statusCode).json({ error: error.message });
      }

      return res.status(500).json({error: "Erro interno do servidor."})
    }
  }

  // Listar todos os enderecos
  static async listar(req, res) {
    try {
      const enderecos = await EnderecoService.listarEnderecos();
      return res.status(200).json(enderecos);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao listar enderecos" });
    }
  }

  // Buscar um endereco por ID
  static async buscarPorId(req, res) {
    try {
      const endereco = await EnderecoService.buscarEnderecoPorId(req.params.id);
      if (!endereco) return res.status(404).json({ error: "endereco não encontrado" });
      
      return res.status(200).json(endereco);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar endereco" });
    }
  }

  // Atualizar um endereco
  static async atualizar(req, res) {
    try {
      const endereco = await EnderecoService.atualizarEndereco(req.params.id, req.body);
      if (!endereco) return res.status(404).json({ error: "endereco não encontrado" });
      
      return res.status(200).json(endereco);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao atualizar endereco" });
    }
  }

  // Deletar um endereco
  static async deletar(req, res) {
    try {
      const deletado = await EnderecoService.deletarEndereco(req.params.id);
      if (!deletado) return res.status(404).json({ error: "endereco não encontrado" });
      
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: "Erro ao deletar endereco" });
    }
  }
}

export default EnderecoController;
