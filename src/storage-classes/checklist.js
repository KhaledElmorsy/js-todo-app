import state from './state.js'

class listItem {
    constructor(id, desc) {
        this.id = id;
        this.desc = desc;
        this.state = new state();
    }

    get id() { return this._id }
    set id(id) { this._id = id }

    get desc() { return this._desc }
    set desc(desc) { this._desc = desc }

    get state() { return this._state }
    set state(state) { this._state = state }

    disable() { this._state.disable() }
    enable() { this._state.enable() }
}


export default class checklist {
    #list;

    constructor() {
        this.#list = [];
    }

    add(itemDesc) {
        let id = this.#list.length;
        this.#list.push(new listItem(id, itemDesc))
    }

    // changeItempPriority()

    get length() { return this.#list.length }
    getItem(id) { if (id < this.length) return this.#list[id] }
    clear() { this.#list = [] }
}
