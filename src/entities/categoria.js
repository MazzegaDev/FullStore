import Base from "./base.js";

export default class Categoria extends Base{
    #cate_id;
    #cate_nome;

    constructor(id, nome){
        super();
        this.#cate_id = id;
        this.#cate_nome = nome;
    }

    //getters
    get cate_id(){
        return this.#cate_id;
    }
    get cate_nome(){
        return this.#cate_nome;
    }
    //setters
    set cate_id(id){
        this.#cate_id = id;
    }
    set cate_nome(nome){
        this.#cate_nome = nome;
    }
}