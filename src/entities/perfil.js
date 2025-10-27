import Base from "./base.js";

export default class Perfil extends Base{
    #per_id;
    #per_adm;
    #per_desc

    constructor(per_id, per_adm, per_desc){
        super();
        this.#per_id = per_id;
        this.#per_adm = per_adm;
        this.#per_desc = per_desc;
    }


    get per_id(){
        return this.#per_id;
    }
    get per_adm(){
        return this.#per_adm;
    }
    get per_desc(){
        return this.#per_desc;
    }


    set per_id(id){
        this.#per_id = id;
    }
    set per_adm(bool){
        this.#per_adm = bool;
    }
    set per_desc(desc){
        this.#per_desc = desc;
    }
}