// routes/ProdutoRoutes.js
import express from "express";
import ProdutoController from "../controllers/produto.controller.js";

const router = express.Router();

// Definir as rotas
router.post("/produtos", ProdutoController.criar);
router.get("/produtos", ProdutoController.listar);
router.get("/produtos/:id", ProdutoController.buscarPorId);
router.put("/produtos/:id", ProdutoController.atualizar);
router.delete("/produtos/:id", ProdutoController.deletar);

export default router;
