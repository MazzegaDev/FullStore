import express from "express";
import UsuarioController from "../controllers/usuarioController.js";

const router = express.Router();
const ctrl = new UsuarioController();

router.post("/", (req, res) => {
    // #swagger.tags = ['Usuario']
    // #swagger.summary = 'Cadastra um usuario'

    /*
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: '#/components/schemas/usuario'
                    }
                }
            }
        }
    */

    ctrl.cadastrar(req, res);
});

router.get("/", (req, res) => {
    // #swagger.tags = ['Usuario']
    // #swagger.summary = 'Lista todos os usuario'

    /*
        #swagger.responses[404] = {
            description: "Nenhum usuario para listar",
            schema: {$ref: '#/components/schemas/erro'}
        }
    */
    ctrl.listar(req, res);
});

router.get("/:id", (req, res) => {
    // #swagger.tags = ['Usuario']
    // #swagger.summary = 'Lista um usuario especifico'

    /*
        #swagger.responses[404] = {
            description: "Nenhum usuario para listar",
            schema: {$ref: '#/components/schemas/erro'}
        }
    */
    ctrl.buscarId(req, res);
});

router.put("/", (req, res) => {
    // #swagger.tags = ['Usuario']
    // #swagger.summary = 'Altera um usuario'

    /*
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: '#/components/schemas/usuarioAlter'
                    }
                }
            }
        }
    */
    ctrl.alterar(req, res);
});

router.delete("/:id", (req, res) => {
    // #swagger.tags = ['Usuario']
    // #swagger.summary = 'Deleta um usuario'

    ctrl.deletar(req, res);
});
export default router;
