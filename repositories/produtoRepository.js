import Produto from "../entities/produto.js";
import Marca from "../entities/marca.js";
import Categoria from "../entities/categoria.js";

import Database from "../db/";

export default class ProdutoRepository{
    #banco;
    constructor(){
        this.#banco = new Database();
    }

    async listar(){
        const sql = "select * from tb_produto";
        
        let produtos = [];

        const rows = await this.#banco.ExecutaComando(sql);

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            produtos.push(this.toMap(row));
        }
        return produtos;
    }

    toMap(row){
        let produto = new Produto();
        produto.prod_id = row["prod_id"];
        produto.prod_nome = row["prod_nome"];
        produto.prod_quant = row["prod_quant"];
        produto.prod_caddat = row["prod_caddat"];
        produto.prod_preco = row["prod_preco"];

        produto.marc_id = new Marca();
        produto.marc_id.marc_id = row["marc_id"];
        produto.marc_id.marc_nome = row["marc_nome"];

        produto.cate_id = new Categoria();
        produto.cate_id.cate_id = row["cate_id"];
        produto.cate_id.cate_nome = row["cate_nome"];

        return produto;
    }
}