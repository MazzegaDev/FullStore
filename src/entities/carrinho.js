import Base from "./base.js";

export default class CarrinhoEntity extends Base{
    #car_id;
    #car_valor_total;
    #car_valor_uni;
    #car_quantidade;
    #prod_id;
    #usu_id;

    constructor(car_id, car_valor_total, car_valor_uni, car_quantidade, prod_id, usu_id){
        super();
        this.#car_id = car_id;
        this.#car_valor_total = car_valor_total;
        this.#car_valor_uni = car_valor_uni;
        this.#car_quantidade = car_quantidade;
        this.#prod_id = prod_id;
        this.#usu_id = usu_id;
    }

    get car_id() {
        return this.#car_id;
    }
    get car_valor_total() {
        return this.#car_valor_total;
    }
    get car_valor_uni() {
        return this.#car_valor_uni;
    }
    get car_quantidade() {
        return this.#car_quantidade;
    }
    get prod_id() {
        return this.#prod_id;
    }
    get usu_id() {
        return this.#usu_id;
    }

    set car_id(car_id) {
        this.#car_id = car_id;
    }
    set car_valor_total(vtotal) {
        this.#car_valor_total = vtotal;
    }
    set car_valor_uni(vuni) {
        this.#car_valor_uni = vuni;
    }
    set car_quantidade(qntd) {
        this.#car_quantidade = qntd;
    }
    set prod_id(id) {
        this.#prod_id = id;
    }
    set usu_id(id) {
        this.#usu_id = id;
    }
}
