// routes/ProdutoRoutes.js
import express from "express";
import UsuarioController from "../controllers/usuarios.controller.js";
import { validarRequisicao } from "../middlewares/validarRequisicao.js";
import { createUserSchema } from "../schemas/createUserSchema.js";

const router = express.Router();

// Definir as rotas
router.post("/usuarios", validarRequisicao(createUserSchema), UsuarioController.criar);
router.get("/usuarios", UsuarioController.listar);
router.get("/usuarios/:id", UsuarioController.buscarPorId);
router.put("/usuarios/:id", UsuarioController.atualizar);
router.delete("/usuarios/:id", UsuarioController.deletar);
router.post("/login", UsuarioController.login)

export default router;
