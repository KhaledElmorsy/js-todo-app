import state from "./state.js";
import todo from "./todo.js";

export default class project {
    constructor(id, name) {
        this._id = id;
        this.name = name;
        this._todoList = [];
        this._state = new state();
    }

    set name(name) { this._name = name }
    get name() { return this._name }
    get id() {return this._id}

    addTodo(title, desc, startDate = null, endDate = null, id = null, checklist = null) {
        id = (id)? id : this._todoList.length;
        let newTodo = new todo(id, title, desc, startDate, endDate, checklist);
        this._todoList.push(newTodo);
        return newTodo; 
    }

    // changeItempPriority()

    getTodo(id) { return this._todoList[id] }

    get state() { return this._state }

    get todoList() { return this._todoList}
}
