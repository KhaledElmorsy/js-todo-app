import state from './state.js'

export default class checklistItem {
    constructor(id, desc) {
        this.id = id;
        this.desc = desc;
        this._state = new state();
    }

    get id() { return this._id }
    set id(id) { this._id = id }

    get desc() { return this._desc }
    set desc(desc) { this._desc = desc }

    get state() { return this._state }
}
