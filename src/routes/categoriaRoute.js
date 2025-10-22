import express from "express";
import CategoriaController from "../controllers/categoriaController.js";

const router = express.Router();
const ctrl = new CategoriaController();

router.get("/", (req, res) => {
    ctrl.listar(req, res);
})

export default router;