import { Router } from 'express';
import produtoRoutes from './produtoRoutes.js';
import enderecoRoutes from './enderecoRoutes.js';
import marcaRoutes from './marcaRoutes.js';
import categoriaRoutes from './categoriaRoutes.js';
import usuariosRoutes from './usuariosRoutes.js'

const router = Router();

router.use(produtoRoutes);
router.use(enderecoRoutes);
router.use(marcaRoutes);
router.use(categoriaRoutes);
router.use(usuariosRoutes);

export default router;
