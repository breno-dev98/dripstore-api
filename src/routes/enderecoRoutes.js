// routes/ProdutoRoutes.js
import express from "express";
import EnderecoController from "../controllers/endereco.controller.js";
import { validarRequisicao } from "../middlewares/validarRequisicao.js";
import { createEnderecoSchema } from "../schemas/createEnderecoSchema.js"

const router = express.Router();

// Definir as rotas
router.post("/enderecos", validarRequisicao(createEnderecoSchema), EnderecoController.criar);
router.get("/enderecos", EnderecoController.listar);
router.get("/enderecos/:id", EnderecoController.buscarPorId);
router.put("/enderecos/:id", EnderecoController.atualizar);
router.delete("/enderecos/:id", EnderecoController.deletar);

export default router;
