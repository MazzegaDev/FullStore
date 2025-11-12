import express from "express";
import CategoriaController from "../controllers/categoriaController.js";
import AuthMiddleware from "../middleware/authMiddleware.js";
const auth = new AuthMiddleware();

const router = express.Router();
const ctrl = new CategoriaController();

router.post("/", auth.validarToken, (req, res) => {
    /* #swagger.security = [{
        "bearerAuth": []
    }]
    */
    // #swagger.tags = ['Categoria']
    // #swagger.summary = 'Cadastra todas as categorias'

    /*
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: '#/components/schemas/categoria'
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

router.get("/:id", auth.validarToken, (req, res) => {
    /* #swagger.security = [{
        "bearerAuth": []
    }]
    */

    // #swagger.tags = ['Categoria']
    // #swagger.summary = 'Lista uma a categorias especifica'

    /*
        #swagger.responses[404] = {
            description: "Nenhuma categoria para listar",
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

    // #swagger.tags = ['Categoria']
    // #swagger.summary = 'Altera uma categoria'

    /*
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: '#/components/schemas/categoriaAlter'
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

    // #swagger.tags = ['Categoria']
    // #swagger.summary = 'Deleta uma categoria'

    ctrl.deletar(req, res);
});

export default router;
