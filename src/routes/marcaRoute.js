import express from "express";
import MarcaController from "../controllers/marcaController.js";

const router = express.Router();
const ctrl = new MarcaController();

router.post("/", (req, res) => {
    // #swagger.tags = ['Marca']
    // #swagger.summary = 'Cadastra marcas'

    /*
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: '#/components/schemas/marca'
                    }
                }
            }
        }
    */
    ctrl.cadastrar(req, res);
});

router.get("/", (req, res) => {
    // #swagger.tags = ['Marca']
    // #swagger.summary = 'Lista todas as marcas'

    /*
        #swagger.responses[404] = {
            description: "Nenhuma marca para listar",
            schema: {$ref: '#/components/schemas/erro'}
        }
    */
    ctrl.listar(req, res);
});

export default router;
