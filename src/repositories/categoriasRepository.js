import Categoria from "../entities/categoria.js";
import dataBase from "../db/dataBase.js";

export default class CategoriaRepository {
    #banco;
    constructor() {
        this.#banco = new dataBase();
    }

    async cadastrar(categoria) {
        const sql = "insert into tb_categoria (cate_nome) values (?)";
        const values = [categoria.cate_nome];

        const result = await this.#banco.ExecutaComandoNonQuery(sql, values);

        return result;
    }

    async listar() {
        const sql = "select * from tb_categoria order by cate_id";
        let categoria = [];

        const rows = await this.#banco.ExecutaComando(sql);

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            categoria.push(this.toMap(row));
        }
        return categoria;
    }

    async buscaId(id){
        const sql = "select * from tb_categoria where cate_id = ?";
        const values = [id];

        const rows = await this.#banco.ExecutaComando(sql, values);

        if(rows.length > 0){
            const row = rows[0];
            let categoria = this.toMap(row);
            return categoria;
        }
        return null;
    }

    async procuraProduto(id) {
        const sql = "select * from tb_produto where cate_id = ?";
        const values = [id];

        const rows = await this.#banco.ExecutaComando(sql, values);

        if (rows.length > 0) {
            return true;
        }
        return null;
    }

    async deletar(id){
        const sql = "delete from tb_categoria where cate_id = ?";
        const values = [id];

        const result = await this.#banco.ExecutaComandoNonQuery(sql, values);

        return result;
    }


    toMap(row) {
        let categoria = new Categoria();

        categoria.cate_id = row["cate_id"];
        categoria.cate_nome = row["cate_nome"];

        return categoria;
    }
}
