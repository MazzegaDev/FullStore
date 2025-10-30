import Base from "./base.js";

export default class Usuario extends Base {
    #usu_id;
    #usu_nome;
    #usu_email;
    #usu_senha;
    #usu_saldo;
    #per_id;

    constructor(usu_id, usu_nome, usu_email, usu_senha, usu_saldo,per_id) {
        super();
        this.#usu_id = usu_id;
        this.#usu_nome = usu_nome;
        this.#usu_email = usu_email;
        this.#usu_senha = usu_senha;
        this.#usu_saldo = usu_saldo;
        this.#per_id = per_id;
    }

    get usu_id() {
        return this.#usu_id;
    }
    get usu_nome() {
        return this.#usu_nome;
    }
    get usu_email() {
        return this.#usu_email;
    }
    get usu_senha() {
        return this.#usu_senha;
    }
    get usu_saldo(){
        return this.#usu_saldo;
    }
    get per_id() {
        return this.#per_id;
    }

    set usu_id(id) {
        this.#usu_id = id;
    }
    set usu_nome(nome) {
        this.#usu_nome = nome;
    }
    set usu_email(email) {
        this.#usu_email = email;
    }
    set usu_senha(senha) {
        this.#usu_senha = senha;
    }
    set usu_saldo(saldo){
        this.#usu_saldo = saldo;
    }
    set per_id(id) {
        this.#per_id = id;
    }
}
