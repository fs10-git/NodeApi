
import express from 'express';
import * as produtosAltaController from '../controller/produtos_alta.controller.js';

const router = express.Router();

router.get('/getAll', produtosAltaController.getAll);

export default router;
