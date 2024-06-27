
import express from 'express';
import * as produtoController from '../controller/produtos.controller.js';

const router = express.Router();

router.get('/getAll', produtoController.getAll);


export default router;
