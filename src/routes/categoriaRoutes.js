// routes/ProdutoRoutes.js
import express from "express";
import CategoriaController from "../controllers/categoria.controller.js";
import { authenticateToken } from '../middlewares/authenticateToken.js'

const router = express.Router();

// Definir as rotas
router.post("/categorias", authenticateToken, CategoriaController.criar);
router.get("/categorias", authenticateToken, CategoriaController.listarCategoriaPorUsuario);
router.get("/categorias/:id", authenticateToken, CategoriaController.buscarPorId);
router.put("/categorias/:id", authenticateToken, CategoriaController.atualizar);
router.delete("/categorias/:id", authenticateToken, CategoriaController.deletar);

export default router;
