import express from "express";
import CategoriaController from "../controllers/categoriaController.js";

const router = express.Router();
const ctrl = new CategoriaController();

router.get("/", (req, res) => {
    // #swagger.tags = ['Categoria']
    // #swagger.summary = 'Lista todas as categorias'

    /*
        #swagger.responses[404] = {
            description: "Nenhuma categoria para listar",
            schema: {$ref: '#/components/schemas/erro'}
        }
    */
    ctrl.listar(req, res);
});

export default router;
