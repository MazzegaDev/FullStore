import ProdutoEntity from "../entities/produto.js";
import ProdutoRepository from "../repositories/produtoRepository.js";

import Marca from "../entities/marca.js";
import Categoria from "../entities/categoria.js";
export default class ProdutoController {
    #pRepo;
    constructor() {
        this.#pRepo = new ProdutoRepository();
    }

    async cadatrar(req, res) {
        try {
            let { nome, quant, preco, marca, categoria } = req.body;
            if (nome && quant && preco && marca.marc_id && categoria.cate_id) {
                let data = new Date().toISOString().split("T");
                let dataFormatada = data[0];
                let produto = new ProdutoEntity(
                    0,
                    nome,
                    quant,
                    dataFormatada,
                    preco,
                    new Marca(marca.marc_id),
                    new Categoria(categoria.cate_id)
                );
                if (await this.#pRepo.cadastrar(produto)) {
                    return res
                        .status(200)
                        .json({ msg: "Novo produto cadastrado!" });
                } else {
                    throw new Error("Não foi possivel cadastrar o produto!");
                }
            } else {
                return res
                    .status(400)
                    .json({
                        msg: "O produto não pode conter informações invalidas.",
                    });
            }
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ msg: "Não foi possivel processar a requisição." });
        }
    }

    async listar(req, res) {
        try {
            let lista = await this.#pRepo.listar();
            if (lista.length > 0) {
                return res.status(200).json(lista);
            } else {
                return res
                    .status(404)
                    .json({ msg: "Nenhum produto cadastrado." });
            }
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ msg: "Não foi possivel processar a requisição." });
        }
    }
}
