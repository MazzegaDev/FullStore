import Marca from "../entities/marca.js";
import MarcaRepository from "../repositories/marcaRepository.js";

export default class MarcaController {
    #mRepo;
    constructor() {
        this.#mRepo = new MarcaRepository();
    }

    async cadastrar(req, res) {
        try {
            let { nome } = req.body;
            if (nome) {
                let marca = new Marca(0, nome);
                if (await this.#mRepo.cadastrar(marca)) {
                    return res
                        .status(200)
                        .json({ msg: "Nova marca cadastrada!" });
                } else {
                    throw new Error("Não foi possivel cadastrar a marca.");
                }
            } else {
                return res.status(400).json({
                    msg: "A marca não pode conter informações invalidas.",
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
            let lista = await this.#mRepo.listar();
            if (lista.length > 0) {
                return res.status(200).json(lista);
            } else {
                return res
                    .status(404)
                    .json({ msg: "Nenhuma marca cadastrada." });
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
            let marca = await this.#mRepo.buscarId(id);
            if (marca) {
                return res.status(200).json(marca);
            } else {
                return res.status(404).json({ msg: "Marca não encontrada." });
            }
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ msg: "Não foi possivel processar a requisição." });
        }
    }

    async alterar(req, res){
        try {
            let {id, nome} = req.body;
            if(nome){
                if(await this.#mRepo.buscarId(id)){
                    let marca = new Marca(id, nome);
                    if(await this.#mRepo.alterar(marca)){
                        return res.status(200).json({msg: "Marca alterada!"});
                    }else{
                        throw new Error("Não foi possivel alterar a marca.");
                    }
                }else{
                    return res.status(404).json({msg: "Marca não encontrada"});
                }
            }else{
                return res.status(400).json({msg: "A marca não pode conter informações invalidas."});
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg: "Não foi possivel processar a requisição."});
        }
    }

    async deletar(req, res) {
        try {
            let { id } = req.params;
            if (await this.#mRepo.buscarId(id)) {
                if (await this.#mRepo.verificaProduto(id)) {
                    return res.status(400).json({
                        msg: "Não foi possivel deletar essa marca pois tem produtos associados a ela.",
                    });
                } else {
                    if (await this.#mRepo.deletar(id)) {
                        return res.status(200).json({ msg: "Marca deletada!" });
                    } else {
                        throw new Error("Não foi possivel deletar a marca.");
                    }
                }
            } else {
                return res
                    .status(404)
                    .json({ msg: "Marca não encontrada para a exclusão." });
            }
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ msg: "Não foi possivel processar a requisição." });
        }
    }
}
