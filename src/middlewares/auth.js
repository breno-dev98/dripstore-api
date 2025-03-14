import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const authenticateToken = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1]

    if (!token) return res.status(401).send("Acesso negado")

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).send("Token inválido")
        req.user = user;
        next()
    })
}