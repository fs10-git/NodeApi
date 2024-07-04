import express from 'express';
import * as usuariosController from '../controller/usuarios.controller.js';

const router = express.Router();

router.get('/getAll', usuariosController.getAll);
router.get('/getOne/:id', usuariosController.getOne);
router.post('/create', usuariosController.create);
router.put('/update/:id', usuariosController.update);
router.delete('/delete/:id' , usuariosController.deletar)


export default router;