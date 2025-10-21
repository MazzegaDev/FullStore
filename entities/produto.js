import Base from "./base.js";

export default class ProdutoEntity extends Base {
    //Atributos primarios
    #prod_id;
    #prod_nome;
    #prod_quant;
    #prod_caddat; //Data em que o produto foi cadastrado
    #prod_preco;
    //Atributos estrangeiros
    #marc_id;
    #cate_id;

    //getters
    get prod_id() {
        return this.#prod_id;
    }
    get prod_nome() {
        return this.#prod_nome;
    }
    get prod_quant() {
        return this.#prod_quant;
    }
    get prod_caddat() {
        return this.#prod_caddat;
    }
    get prod_preco() {
        return this.#prod_preco;
    }
    get marc_id() {
        return this.#marc_id;
    }
    get cate_id() {
        return this.#cate_id;
    }
    //setter
    set prod_id(id) {
        this.#prod_id = id;
    }
    set prod_nome(nome) {
        this.#prod_nome = nome;
    }
    set prod_quant(quant) {
        this.#prod_quant = quant;
    }
    set prod_caddat(data) {
        this.#prod_caddat = data;
    }
    set prod_preco(preco) {
        this.#prod_preco = preco;
    }
    set marc_id(id) {
        this.#marc_id = id;
    }
    set cate_id(id) {
        this.#cate_id = id;
    }
}
