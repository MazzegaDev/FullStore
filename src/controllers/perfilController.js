import PerfilRepository from "../repositories/perfilRepository.js";
import Perfil from "../entities/perfil.js";

export default class PerfilController {
    #pRepo;
    constructor() {
        this.#pRepo = new PerfilRepository();
    }

    async cadastrar(req, res) {
        try {
            let { desc, adm } = req.body;
            if (desc && adm) {
                let perfil = new Perfil(0, adm, desc);
                if (await this.#pRepo.cadastrar(perfil)) {
                    return res
                        .status(200)
                        .json({ msg: "Perfil cadastrado com sucesso!" });
                } else {
                    throw new Error("Não foi possivel cadastrar o perfil!");
                }
            } else {
                return res.status(400).json({
                    msg: "O perfil não pode conter informações invalidas.",
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
                    .json({ msg: "Nenhum perfil encontrado." });
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
            let perfil = await this.#pRepo.buscarId(id);
            if (perfil) {
                return res.status(200).json(perfil);
            } else {
                return res.status(404).json({ msg: "Perfil não encontrado." });
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
            let { id, desc, adm } = req.body;
            if (id && desc) {
                if (await this.#pRepo.buscarId(id)) {
                    let perfil = new Perfil(id, adm, desc);
                    if (await this.#pRepo.alterar(perfil)) {
                        return res
                            .status(200)
                            .json({ msg: "Perfil alterado!" });
                    } else {
                        throw new Error("Não foi possivel alterar o perfil.");
                    }
                } else {
                    return res
                        .status(404)
                        .json({ msg: "Perfil não encontrado." });
                }
            } else {
                return res.status(400).json({
                    msg: "O perfil não pode conter informações invalidas",
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
            if (await this.#pRepo.buscarId(id)) {
                if (await this.#pRepo.verificaUsuario(id)) {
                    return res
                        .status(400)
                        .json({
                            msg: "Não foi possivel deletar esse perfil pois tem usuarios associados a ele.",
                        });
                } else {
                    if (await this.#pRepo.deletar(id)) {
                        return res
                            .status(200)
                            .json({ msg: "Perfil deletado!" });
                    } else {
                        throw new Error("Não foi possivel deletar o perfil.");
                    }
                }
            } else {
                return res.status(404).json({ msg: "Perfil não encontrado." });
            }
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ msg: "Não foi possivel processar a requisição." });
        }
    }
}
