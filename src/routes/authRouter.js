
import AuthController from "../controllers/authController.js";
import express from "express";

const router = express.Router();
const ctrl = new AuthController();

router.post("/", (req, res) =>{
    // #swagger.tags = ['Autenticação']
    // #swagger.summary = 'Gera um token de acesso através das credenciais de um usuário'

    ctrl.gerarToken(req, res);
})

export default router;