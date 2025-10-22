import ProdutoEntity from "../entities/produto.js";
import ProdutoRepository from "../repositories/produtoRepository.js";

export default class ProdutoController {
    #pRepo;
    constructor() {
        this.#pRepo = new ProdutoRepository();
    }

    async listar(req, res) {
        try {
            let lista = await this.#pRepo.listar();
            if (lista.length > 0) {
                return res.status(200).json(lista);
            } else {
                return res
                    .status(400)
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
