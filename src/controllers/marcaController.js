import Marca from "../entities/marca.js";
import MarcaRepository from "../repositories/marcaRepository.js";

export default class MarcaController{
    #mRepo;
    constructor() {
        this.#mRepo = new MarcaRepository();
    }

    async listar(req, res){
        try {
            let lista = await this.#mRepo.listar();
            if(lista.length > 0){
                return res.status(200).json(lista);
            }else{
                return res.status(400).json({msg: "Nenhuma marca cadastrada."});
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg: "Não foi possivel processar a requisição."});
        }
    }
}