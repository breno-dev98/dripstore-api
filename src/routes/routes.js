import { Router } from 'express';
import produtoRoutes from './produtoRoutes.js';
import enderecoRoutes from './enderecoRoutes.js';
import marcaRoutes from './marcaRoutes.js';
import categoriaRoutes from './categoriaRoutes.js';

const router = Router();

router.use(produtoRoutes);
router.use(enderecoRoutes);
router.use(marcaRoutes);
router.use(categoriaRoutes);

export default router;
