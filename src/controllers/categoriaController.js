import Categoria from "../entities/categoria.js";
import CategoriaRepository from "../repositories/categoriasRepository.js";

export default class CategoriaController {
    #cRepo;
    constructor() {
        this.#cRepo = new CategoriaRepository();
    }

    async listar(req, res) {
        try {
            let lista = await this.#cRepo.listar();
            if (lista.length > 0) {
                return res.status(200).json(lista);
            } else {
                return res
                    .status(404)
                    .json({ msg: "Nenhuma categoria cadastrada." });
            }
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ msg: "Não foi possivel processar a requisição." });
        }
    }
}
