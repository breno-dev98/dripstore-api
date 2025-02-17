// routes/ProdutoRoutes.js
import express from "express";
import MarcaController from "../controllers/marca.controller.js";

const router = express.Router();

// Definir as rotas
router.post("/marcas", MarcaController.criar);
router.get("/marcas", MarcaController.listar);
router.get("/marcas/:id", MarcaController.buscarPorId);
router.put("/marcas/:id", MarcaController.atualizar);
router.delete("/marcas/:id", MarcaController.deletar);

export default router;
