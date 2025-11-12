import express from "express";
import UsuarioController from "../controllers/usuarioController.js";
import AuthMiddleware from "../middleware/authMiddleware.js";
const auth = new AuthMiddleware();

const router = express.Router();
const ctrl = new UsuarioController();

router.post("/", auth.validarToken, (req, res) => {
    /* #swagger.security = [{
        "bearerAuth": []
    }]
    */
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

router.get("/", auth.validarToken, (req, res) => {
    /* #swagger.security = [{
        "bearerAuth": []
    }]
    */
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

router.get("/:id", auth.validarToken, (req, res) => {
    /* #swagger.security = [{
        "bearerAuth": []
    }]
    */
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

router.get("/:id", auth.validarToken, (req, res) => {
    /* #swagger.security = [{
        "bearerAuth": []
    }]
    */
    // #swagger.tags = ['Usuario']
    // #swagger.summary = 'Retorna o saldo de um usuario especifico'

    /*
        #swagger.responses[404] = {
            description: "Nenhum usuario para listar",
            schema: {$ref: '#/components/schemas/erro'}
        }
    */
    ctrl.buscarSaldo(req, res);
});

router.put("/", auth.validarToken, (req, res) => {
    /* #swagger.security = [{
        "bearerAuth": []
    }]
    */
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

router.patch("/adicionarSaldo", auth.validarToken, (req, res) => {
    /* #swagger.security = [{
        "bearerAuth": []
    }]
    */
    // #swagger.tags = ['Usuario']
    // #swagger.summary = Adiciona saldo para um usuario'

    /*
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: '#/components/schemas/manipularSaldo'
                    }
                }
            }
        }
    */
    ctrl.adicionarSaldo(req, res);
});

router.patch("/subtrairSaldo", auth.validarToken, (req, res) => {
    /* #swagger.security = [{
        "bearerAuth": []
    }]
    */
    // #swagger.tags = ['Usuario']
    // #swagger.summary = 'Subtrai o saldo de um usuario'

    /*
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: '#/components/schemas/manipularSaldo'
                    }
                }
            }
        }
    */
    ctrl.subtrairSaldo(req, res);
});

router.delete("/:id", auth.validarToken, (req, res) => {
    /* #swagger.security = [{
        "bearerAuth": []
    }]
    */
    // #swagger.tags = ['Usuario']
    // #swagger.summary = 'Deleta um usuario'

    ctrl.deletar(req, res);
});
export default router;
