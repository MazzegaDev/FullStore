import Usuario from "../entities/usuario.js";
import Perfil from "../entities/perfil.js";
import UsuarioRepository from "../repositories/usuarioRepository.js";

export default class UsuarioController {
    #uRepo;
    #errorMsg;
    constructor() {
        this.#errorMsg = "Não foi possivel processar a requisição.";
        this.#uRepo = new UsuarioRepository();
    }

    async cadastrar(req, res) {
        try {
            let { nome, email, senha, idP } = req.body;
            if (nome && email && senha && idP.per_id) {
                if (await this.#uRepo.procurarPerfil(idP.per_id)) {
                    let usuario = new Usuario(
                        0,
                        nome,
                        email,
                        senha,
                        new Perfil(idP.per_id)
                    );
                    if (await this.#uRepo.cadastrar(usuario)) {
                        return res
                            .status(200)
                            .json({ msg: "Usuario cadastrado com sucesso!" });
                    } else {
                        throw new Error(
                            "Não foi possivel cadastrar o usuario."
                        );
                    }
                } else {
                    return res.status(404).json({
                        msg: "O perfil informado não foi encontrado.",
                    });
                }
            } else {
                return res.status(400).json({
                    msg: "O usuario não pode conter informações invalidas.",
                });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: this.#errorMsg });
        }
    }

    async listar(req, res) {
        try {
            const lista = await this.#uRepo.listar();
            if (lista.length > 0) {
                return res.status(200).json(lista);
            } else {
                return res
                    .status(404)
                    .json({ msg: "Nenhum usuario para listar" });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: this.#errorMsg });
        }
    }

    async buscarId(req, res) {
        try {
            let { id } = req.params;
            let usuario = await this.#uRepo.buscarId(id);
            if (usuario) {
                return res.status(200).json(usuario);
            } else {
                return res.status(404).json({ msg: "Usuario não encontrado." });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: this.#errorMsg });
        }
    }

    async alterar(req, res) {
        try {
            let { id, nome, email, senha, idP } = req.body;
            if (id && nome && email && senha && idP.per_id) {
                if (await this.#uRepo.buscarId(id)) {
                    if (await this.#uRepo.procurarPerfil(idP.per_id)) {
                        let usuario = new Usuario(
                            id,
                            nome,
                            email,
                            senha,
                            new Perfil(idP.per_id)
                        );
                        if (await this.#uRepo.alterar(usuario)) {
                            return res
                                .status(200)
                                .json({ msg: "Usuario alterado com sucesso!" });
                        } else {
                            throw new Error(
                                "Não foi possivel alterar o usuario."
                            );
                        }
                    } else {
                        return res
                            .status(400)
                            .json({
                                msg: "O perfil informado não foi encontrado.",
                            });
                    }
                } else {
                    return res.status(404).json({
                        msg: "O usuario informado não foi encontrado.",
                    });
                }
            } else {
                return res.status(400).json({
                    msg: "O usuario não pode conter informações invalidas",
                });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: this.#errorMsg });
        }
    }

    async deletar(req, res) {
        try {
            let { id } = req.params;
            if (await this.#uRepo.buscarId(id)) {
                if (await this.#uRepo.deletar(id)) {
                    return res
                        .status(200)
                        .json({ msg: "Usuario deletado com sucesso!" });
                } else {
                    throw new Error("Não foi possivel deletar o usuario.");
                }
            } else {
                return res.status(404).json({ msg: "Usuario não encontrado." });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: this.#errorMsg });
        }
    }
}
