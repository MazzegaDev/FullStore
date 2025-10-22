import express from "express";
import ProdutoController from "../controllers/produtoController.js";

const router = express.Router();
const ctrl = new ProdutoController();

router.get("/", (req, res) => {
    ctrl.listar(req, res);
})

export default router;