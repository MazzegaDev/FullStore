import express from 'express';
import MarcaController from '../controllers/marcaController.js';

const router = express.Router();
const ctrl = new MarcaController();

router.get("/", (req, res)=>{
    ctrl.listar(req, res);
});

export default router;
