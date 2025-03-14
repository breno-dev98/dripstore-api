import express from "express";
import LoginController from "../controllers/login.controller.js";

const router = express.Router();

// Rota de login
router.post("/login", LoginController.login);

export default router;
