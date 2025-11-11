import DataBase from "../db/dataBase.js";
import CarrinhoEntity from "../entities/carrinho.js";
import ProdutoEntity from "../entities/produto.js";


export default class CarrinhoRepository{
    #banco;
    constructor(){
        this.#banco = new DataBase();
    }


    async listar(usu_id){
        const sql = "select * from tb_carrinho C inner join tb_produto P on C.prod_id = P.prod_id where usu_id = ?";
        const values = [usu_id];

        const rows = await this.#banco.ExecutaComando(sql, values);

        if(rows.length > 0){
            const row = rows[0];

            let carrinho = this.toMap(row);
            return carrinho;
        }

        return null;
    }

    async criarCarrinho(carrinho){
        const sql = "insert into tb_carrinho (car_valor_total, car_valor_uni, car_quantidade, prod_id, usu_id) values (?, ?, ?, ?, ?)";

        const values = [
            carrinho.car_valor_total,
            carrinho.car_valor_uni,
            carrinho.car_quantidade,
            carrinho.prod_id.prod_id,
            carrinho.usu_id.usu_id,
        ];
        const result = await this.#banco.ExecutaComandoNonQuery(sql, values);
        return result;
    }

    
    toMap(row){
        let carrinho = new CarrinhoEntity();
        carrinho.car_id = row["car_id"];
        carrinho.car_quantidade = row["car_quantidade"];
        carrinho.car_valor_total = row["car_valor_total"];
        carrinho.car_valor_uni = row["car_valor_uni"];

        carrinho.prod_id = new ProdutoEntity();
        carrinho.prod_id.prod_id = row["prod_id"];
        carrinho.prod_id.prod_nome = row["prod_nome"];

        return carrinho;
    }
}