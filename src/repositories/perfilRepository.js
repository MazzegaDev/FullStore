import Perfil from "../entities/perfil.js";
import dataBase from "../db/dataBase.js";

export default class PerfilRepository{
    #banco;
    constructor(){
        this.#banco = new dataBase();
    }

    async cadastrar(perfil){
        const sql = "insert into tb_perfil (per_adm, per_desc) values (?, ?)";
        const values = [perfil.per_adm, perfil.per_desc];

        const result = await this.#banco.ExecutaComandoNonQuery(sql, values);

        return result;
    }

    async listar(){
        const sql = "select * from tb_perfil";
        let perfil = [];

        const rows = await this.#banco.ExecutaComando(sql);
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            perfil.push(
                this.toMap(row)
            );
        }
        return perfil;
    }

    async buscarId(id){
        const sql = "select * from tb_perfil where per_id = ?";
        const values = [id];

        const rows = await this.#banco.ExecutaComando(sql, values);

        if(rows.length > 0){
            const row = rows[0];
            let perfil = this.toMap(row);
            return perfil;
        }
        return null;
    }

    async verificaUsuario(id){
        const sql = "select * from tb_usuario where per_id = ?";
        const values = [id];

        const rows = await this.#banco.ExecutaComando(sql, values);
        if(rows.length > 0){
            return true;
        }

        return null;
    }

    async alterar(perfil){
        const sql = "update tb_perfil set per_adm = ?, per_desc = ? where per_id = ?";
        const values = [perfil.per_adm, perfil.per_desc, perfil.per_id];

        const result = await this.#banco.ExecutaComandoNonQuery(sql, values);

        return result;
    }

    async deletar(id){
        const sql = "delete from tb_perfil where per_id = ?";
        const values = [id];

        const result = await this.#banco.ExecutaComandoNonQuery(sql, values);

        return result;
    }

    toMap(row){
        let perfil = new Perfil();
        perfil.per_id = row["per_id"];
        perfil.per_adm = row["per_adm"];
        perfil.per_desc = row["per_desc"];

        return perfil;
    }
}