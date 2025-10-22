import Marca from "../entities/marca.js";
import dataBase from "../db/dataBase.js";

export default class MarcaRepository{
    #banco;
    constructor() {
        this.#banco = new dataBase();
    }

    async listar(){
        const sql = "select * from tb_marca"
        let marca = [];

        const rows = await this.#banco.ExecutaComando(sql);

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            marca.push(this.toMap(row))
        }
        
        return marca;
    }

    async cadastrar(marca){
        const sql = "insert into tb_marca (marc_nome) values (?)";
        const values = [marca.marc_nome];
        const result = await this.#banco.ExecutaComandoNonQuery(sql, values);
        
        return result;
    }

    toMap(row){
        let marca = new Marca();
        marca.marc_id = row["marc_id"];
        marca.marc_nome = row["marc_nome"];
        
        return marca;
    }
}