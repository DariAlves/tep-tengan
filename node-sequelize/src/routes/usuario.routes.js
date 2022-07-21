import { Router } from 'express';
import { getUsuarios } from '../controllers/usuarioController.js';

const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuarioId);
router.post('/', createUsuario);
router.put('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

export { router as usuarioRouter };
