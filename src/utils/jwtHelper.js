import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.JWT_SECRET || "chaveSecretaSuperSegura"; 

export const gerarToken = (payload) => {
    return jwt.sign(payload, secret, { expiresIn: "1h" }); 
};

export const verificarToken = (token) => {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
};
