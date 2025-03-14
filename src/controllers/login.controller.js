import UsuariosService from "../services/usuarios.service.js";
import {  compararSenha } from "../utils/bcryptHelper.js";

class LoginController {
    static async login(req, res) {
        try {
            const { email, senha } = req.body;

            const usuario = await UsuariosService.buscarUsuarioPorEmail(email);
            if (!usuario) {
                return res.status(404).json({ error: "Usuário não encontrado" })
            }

            const senhaCorreta = await compararSenha(senha, usuario.senha);
            if (!senhaCorreta) {
                return res.status(401).json({ error: "Senha inválida" })
            }

            return res.status(200).json({ message: "Login bem-sucedido" })
        } catch (error) {
            return res.status(500).json({ error: "Erro ao realizar login" })
        }
    }
}

export default LoginController;