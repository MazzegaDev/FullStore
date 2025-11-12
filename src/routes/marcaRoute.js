import express from "express";
import MarcaController from "../controllers/marcaController.js";
import AuthMiddleware from "../middleware/authMiddleware.js";
const auth = new AuthMiddleware();

const router = express.Router();
const ctrl = new MarcaController();

router.post("/", auth.validarToken, (req, res) => {
    /* #swagger.security = [{
        "bearerAuth": []
    }]
    */
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

router.get("/", auth.validarToken, (req, res) => {
    /* #swagger.security = [{
        "bearerAuth": []
    }]
    */
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

router.get("/:id", auth.validarToken, (req, res) => {
    /* #swagger.security = [{
        "bearerAuth": []
    }]
    */
    // #swagger.tags = ['Marca']
    // #swagger.summary = 'Lista uma marca especifica'

    /*
        #swagger.responses[404] = {
            description: "Nenhuma marca para listar",
            schema: {$ref: '#/components/schemas/erro'}
        }
    */
    ctrl.buscarId(req, res);
});

router.put("/", auth.validarToken, (req, res) => {
    /* #swagger.security = [{
        "bearerAuth": []
    }]
    */
    // #swagger.tags = ['Marca']
    // #swagger.summary = 'Altera uma marca'

    /*
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: '#/components/schemas/marcaAlter'
                    }
                }
            }
        }
    */

    ctrl.alterar(req, res);
});

router.delete("/:id", auth.validarToken, (req, res) => {
    /* #swagger.security = [{
        "bearerAuth": []
    }]
    */
    // #swagger.tags = ['Marca']
    // #swagger.summary = 'Deleta uma marca'

    ctrl.deletar(req, res);
});

export default router;
