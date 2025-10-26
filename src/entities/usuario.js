import Base from "./base.js";

export default class Usuario extends Base{
    #usu_id;
    #usu_nome;
    #per_id;

    constructor(usu_id, usu_nome, per_id){
        super();
        this.#usu_id = usu_id;
        this.#usu_nome = usu_nome;
        this.#per_id = per_id;
    }


    get usu_id(){
        return this.#usu_id;
    }
    get usu_nome(){
        return this.#usu_nome;
    }
    get per_id(){
        return this.#per_id;
    }

    set usu_id(id){
        this.#usu_id = id;
    }
    set usu_nome(nome){
        this.#usu_nome = nome;
    }
    set per_id(id){
        this.#per_id = id;
    }

}