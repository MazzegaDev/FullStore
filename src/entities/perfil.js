import Base from "./base.js"

export default class Perfil extends Base{
    #per_id;
    #per_adm;

    constructor(per_id, per_adm){
        super();
        this.#per_id = per_id;
        this.#per_adm = per_adm;
    }


    get per_id(){
        return this.#per_id;
    }
    get per_adm(){
        return this.#per_adm;
    }

    set per_id(id){
        this.#per_id = id;
    }
    set per_adm(bool){
        this.#per_adm = bool;
    }
}