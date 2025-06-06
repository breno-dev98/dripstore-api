// routes/ProdutoRoutes.js
import express from "express";
import MarcaController from "../controllers/marca.controller.js";
import { validarRequisicao } from '../middlewares/validarRequisicao.js'
import { marcaSchema } from "../schemas/createMarcaSchema.js";
import { authenticateToken } from "../middlewares/authenticateToken.js"

const router = express.Router();

// Definir as rotas
router.post("/marcas", validarRequisicao(marcaSchema), MarcaController.criar);
router.get("/marcas", authenticateToken, MarcaController.listarMarcasPorUsuario);
router.get("/marcas/:id", MarcaController.buscarPorId);
router.put("/marcas/:id", validarRequisicao(marcaSchema), MarcaController.atualizar);
router.delete("/marcas/:id", MarcaController.deletar);

export default router;
