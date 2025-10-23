import Produto from "../entities/produto.js";
import Marca from "../entities/marca.js";
import Categoria from "../entities/categoria.js";

import Database from "../db/dataBase.js";

export default class ProdutoRepository{
    #banco;
    constructor(){
        this.#banco = new Database();
    }

    async cadastrar(produto){
        const sql = "INSERT INTO tb_produto (prod_nome, prod_quant, prod_caddat, prod_preco, marc_id, cate_id) VALUES (?, ?, ?, ?, ?,?)";
        const values = [
            produto.prod_nome,
            produto.prod_quant,
            produto.prod_caddat,
            produto.prod_preco,
            produto.marc_id.marc_id,
            produto.cate_id.cate_id,
        ]
        const result = await this.#banco.ExecutaComandoNonQuery(sql, values);

        return result;
    }

    async listar(){
        const sql = "select * from tb_produto P inner join tb_marca M on P.marc_id = M.marc_id inner join tb_categoria C on P.cate_id = C.cate_id order by prod_id";
        
        let produtos = [];

        const rows = await this.#banco.ExecutaComando(sql);

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            produtos.push(this.toMap(row));
        }
        return produtos;
    }
    async buscaId(id){
        const sql = "select * from tb_produto where prod_id = ?";
        const values = [id];

        const rows = await this.#banco.ExecutaComando(sql, values);

        if(rows.length > 0){
            const row = rows[0];

            const produto = this.toMap(row);
            
            return produto;
        }
        return null;

    }

    async alterarProduto(produto){
        const sql = "update tb_produto set prod_nome = ?, prod_quant = ?, prod_preco = ?, marc_id = ?, cate_id = ? where prod_id = ?";
        const values = [
            produto.prod_nome,
            produto.prod_quant,
            produto.prod_preco,
            produto.marc_id.marc_id,
            produto.cate_id.cate_id,
            produto.prod_id,
        ]
        const result = await this.#banco.ExecutaComandoNonQuery(sql, values);

        return result;
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