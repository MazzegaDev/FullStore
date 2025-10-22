export default class Base{
    constructor(){}

    toJSON(){
        let props = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
        let json = {};

        for(const prop of props) {
            json[prop] = this[prop];
        }
        return json;
    }
}