import Base from "./base.js";

export default class MarcaEntity extends Base{
    #marc_id;
    #marc_nome;

    constructor(id, nome){
        super();
        this.#marc_id = id;
        this.#marc_nome = nome;
    }

    //getters
    get marc_id(){
        return this.#marc_id;
    }
    get marc_nome(){
        return this.#marc_nome;
    }
    //setters
    set marc_id(id){
        this.#marc_id = id;
    }
    set marc_nome(nome){
        this.#marc_nome = nome;
    }
}