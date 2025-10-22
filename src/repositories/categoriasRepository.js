import Categoria from "../entities/categoria.js";
import dataBase from "../db/dataBase.js";

export default class CategoriaRepository{
    #banco;
    constructor() {
        this.#banco = new dataBase();
    }

    async listar(){
        const sql = "select * from tb_categoria";
        let categoria = [];

        const rows = await this.#banco.ExecutaComando(sql);

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            categoria.push(this.toMap(row));   
        }
        return categoria;
    }

    toMap(row){
        let categoria = new Categoria();
        
        categoria.cate_id = row["cate_id"];
        categoria.cate_nome = row["cate_nome"];

        return categoria;
    }
}