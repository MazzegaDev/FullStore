import AuthController from "../controllers/authController.js";
import express from "express";
import AuthMiddleware from "../middleware/authMiddleware.js";

const auth = new AuthMiddleware();
const router = express.Router();
const ctrl = new AuthController();

router.get("/", auth.validarTokerUser,(req, res) => {
    // #swagger.tags = ['Autenticação']
    // #swagger.summary = 'Retorna um usuario atraves do seu cookie'

    ctrl.usuarioLogado(req, res);
});

router.post("/", (req, res) => {
    // #swagger.tags = ['Autenticação']
    // #swagger.summary = 'Gera um token de acesso através das credenciais de um usuário'

    ctrl.gerarToken(req, res);
});

export default router;
