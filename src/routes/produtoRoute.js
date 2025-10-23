import express from "express";
import ProdutoController from "../controllers/produtoController.js";

const router = express.Router();
const ctrl = new ProdutoController();

router.post("/", (req, res) => {
    // #swagger.tags = ['Produto']
    // #swagger.summary = 'Cadastra um produto'

    /*
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: '#/components/schemas/produto'
                    }
                }
            }
        }
    */

    ctrl.cadatrar(req, res);
});

router.get("/", (req, res) => {
    // #swagger.tags = ['Produto']
    // #swagger.summary = 'Lista todos os produtos'

    /*
        #swagger.responses[404] = {
            description: "Nenhum produto para listar",
            schema: {$ref: '#/components/schemas/erro'}
        }
    */

    ctrl.listar(req, res);
});
router.get("/:id", (req, res) => {
    // #swagger.tags = ['Produto']
    // #swagger.summary = 'Lista um produto especifico'

    /*
        #swagger.responses[404] = {
            description: "Nenhum produto para listar",
            schema: {$ref: '#/components/schemas/erro'}
        }
    */
   ctrl.buscaId(req, res);
})
router.put("/", (req, res) => {
    // #swagger.tags = ['Produto']
    // #swagger.summary = 'Altera um produto'

    /*
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: '#/components/schemas/produtoAlter'
                    }
                }
            }
        }
    */

    ctrl.alterarProduto(req, res);
})

export default router;
