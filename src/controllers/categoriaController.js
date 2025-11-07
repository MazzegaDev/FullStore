import Categoria from "../entities/categoria.js";
import CategoriaRepository from "../repositories/categoriasRepository.js";

export default class CategoriaController {
    #cRepo;
    constructor() {
        this.#cRepo = new CategoriaRepository();
    }

    async cadastrar(req, res) {
        try {
            let { nome } = req.body;
            if (nome) {
                let categoria = new Categoria(0, nome);
                if (await this.#cRepo.cadastrar(categoria)) {
                    return res
                        .status(200)
                        .json({ msg: "Nova categoria cadastrada!" });
                } else {
                    throw new Error("Não foi possivel cadastrar a categoria.");
                }
            } else {
                return res.status(400).json({
                    msg: "A categoria não pode conter informações invalidas.",
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

    async buscarId(req, res) {
        try {
            let { id } = req.params;
            let categoria = await this.#cRepo.buscaId(id);
            if (categoria) {
                return res.status(200).json(categoria);
            } else {
                return res
                    .status(404)
                    .json({ msg: "Categoria não encontrada." });
            }
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ msg: "Não foi possivel processar a requisição." });
        }
    }

    async alterar(req, res) {
        try {
            let { id, nome } = req.body;
            if (nome) {
                if (await this.#cRepo.buscaId(id)) {
                    let categoria = new Categoria(id, nome);
                    if (await this.#cRepo.alterar(categoria)) {
                        return res
                            .status(200)
                            .json({ msg: "Categoria alterada!" });
                    } else {
                        throw new Error(
                            "Não foi possivel alterar a categoria."
                        );
                    }
                } else {
                    return res
                        .status(404)
                        .json({ msg: "Categoria não encontrada." });
                }
            } else {
                return res
                    .status(400)
                    .json({
                        msg: "A categoria não pode conter dados invalidos.",
                    });
            }
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ msg: "Não foi possivel processar a requisição." });
        }
    }

    async deletar(req, res) {
        try {
            let { id } = req.params;
            if (await this.#cRepo.buscaId(id)) {
                if (await this.#cRepo.procuraProduto(id)) {
                    return res.status(400).json({
                        msg: "Não foi possivel deletar essa categoria pois tem produtos associados a ela.",
                    });
                } else {
                    if (await this.#cRepo.deletar(id)) {
                        return res
                            .status(200)
                            .json({ msg: "Categoria deletada!" });
                    } else {
                        throw new Error(
                            "Não foi possivel deletar a categoria."
                        );
                    }
                }
            } else {
                return res
                    .status(404)
                    .json({ msg: "Categoria não encontrada para a exclusão." });
            }
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ msg: "Não foi possivel processar a requisição." });
        }
    }
}
