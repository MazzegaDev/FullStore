import PerfilController from "../controllers/perfilController.js";
import express from "express";
import AuthMiddleware from "../middleware/authMiddleware.js";
const auth = new AuthMiddleware();

const router = express.Router();
const ctrl = new PerfilController();

router.post("/", auth.validarToken, (req, res) => {
    /* #swagger.security = [{
        "bearerAuth": []
    }]
    */
    // #swagger.tags = ['Perfil']
    // #swagger.summary = 'Cadastra um perfil'

    /*
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: '#/components/schemas/perfil'
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
    // #swagger.tags = ['Perfil']
    // #swagger.summary = 'Lista todos os perfis'

    /*
        #swagger.responses[404] = {
            description: "Nenhum perfil para listar",
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
    // #swagger.tags = ['Perfil']
    // #swagger.summary = 'Lista um perfil especifico'

    /*
        #swagger.responses[404] = {
            description: "Perfil não encontrado",
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
    // #swagger.tags = ['Perfil']
    // #swagger.summary = 'Altera um perfil'

    /*
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: '#/components/schemas/perfilAlter'
                    }
                }
            }
        }
    */

    ctrl.alterar(req, res);
});

router.delete("/:id", (req, res) => {
    /* #swagger.security = [{
        "bearerAuth": []
    }]
    */
    // #swagger.tags = ['Perfil']
    // #swagger.summary = 'Deleta um perfil'

    ctrl.deletar(req, res);
});

export default router;
