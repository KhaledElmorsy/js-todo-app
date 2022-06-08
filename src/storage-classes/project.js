import state from "./state.js";
import todo from "./todo.js";

export default class project {
    constructor(name) {
        this.name = name;
        this._todoList = [];
        this._state = new state();
    }

    set name(name) { this._name = name }
    get name() { return this._name }

    add(title, desc, startDate, endDate) {
        let id = this._todoList.length;
        this._todoList.push(new todo(id, title, desc, startDate, endDate));
    }

    // changeItempPriority()

    get(id) { return this._todoList[id] }

    get state() { return this._state }\

    // Getlength?
}

// let a = new project('hello');
// a.add('asd','asd',1,2);
// console.log(a.get(0)?._state)
