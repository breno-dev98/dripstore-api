
import UsuariosService from "../services/usuarios.service.js";

class UsuariosController {
    // Criar uma usuario
    static async criar(req, res) {
        try {
            const usuario = await UsuariosService.criarUsuarios(req.body);
            return res.status(201).json(usuario);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao criar usuario" });
        }
    }

    // Listar todas as usuarios
    static async listar(req, res) {
        try {
            const usuarios = await UsuariosService.listarUsuarioss();
            return res.status(200).json(usuarios);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao listar usuarios" });
        }
    }

    // Buscar usuario por ID
    static async buscarPorId(req, res) {
        try {
            const usuario = await UsuariosService.buscarUsuariosPorId(req.params.id);
            if (!usuario) return res.status(404).json({ error: "usuario não encontrado" });

            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar usuario" });
        }
    }

    // Atualizar uma usuario
    static async atualizar(req, res) {
        try {
            const usuario = await UsuariosService.atualizarUsuarios(req.params.id, req.body);
            if (!usuario) return res.status(404).json({ error: "usuario não encontrado" });

            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao atualizar usuario" });
        }
    }

    // Deletar uma usuario
    static async deletar(req, res) {
        try {
            const deletado = await UsuariosService.deletarUsuarios(req.params.id);
            if (!deletado) return res.status(404).json({ error: "usuario não encontrado" });

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: "Erro ao deletar usuario" });
        }
    }
}

export default UsuariosController;
