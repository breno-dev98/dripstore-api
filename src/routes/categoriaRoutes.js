// routes/ProdutoRoutes.js
import express from "express";
import CategoriaController from "../controllers/categoria.controller.js";

const router = express.Router();

// Definir as rotas
router.post("/categorias", CategoriaController.criar);
router.get("/categorias", CategoriaController.listar);
router.get("/categorias/:id", CategoriaController.buscarPorId);
router.put("/categorias/:id", CategoriaController.atualizar);
router.delete("/categorias/:id", CategoriaController.deletar);

export default router;
