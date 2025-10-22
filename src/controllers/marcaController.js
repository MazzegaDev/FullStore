import Marca from "../entities/marca.js";
import MarcaRepository from "../repositories/marcaRepository.js";

export default class MarcaController {
    #mRepo;
    constructor() {
        this.#mRepo = new MarcaRepository();
    }

    async cadastrar(req, res) {
        try {
            let {nome} = req.body;
            if(nome){
                let marca = new Marca(0, nome);
                if(await this.#mRepo.cadastrar(marca)){
                    return res.status(200).json({msg: "Nova marca cadastrada!"});
                }else{
                    throw new Error("Não foi possivel cadastrar a marca.");
                }
            }else{
                return res.status(400).json({msg: "A marca não pode conter informações invalidas."})
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
}
