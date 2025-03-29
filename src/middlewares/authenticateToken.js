import dotenv from 'dotenv'
import { verificarToken } from "../utils/jwtHelper.js"

dotenv.config()

export const authenticateToken = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1]

    if (!token) return res.status(401).send("Acesso negado. Token não fornecido.")

    const decoded = verificarToken(token);

    if (!decoded) {
        return res.status(403).send("Token inválido ou expirado")
    }

    req.user = decoded;
    next()

}