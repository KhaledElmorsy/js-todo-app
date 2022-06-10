import checklistItem from './checklistItem.js'
import state from './state.js';

export default class todo {
    constructor(id, title, desc, startDate, endDate) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.startDate = startDate;
        this.endDate = endDate;
        this._checklist = [];
        this._state = new state();
    }

    set id(id) { this._id = id }
    get id() { return this._id }

    set title(title) { this._title = title };
    get title() { return this._title }

    set desc(desc) { this._desc = desc }
    get desc() { return this._desc }

    set startDate(date) { this._startDate = date }
    get startDate() { return this._startDate }

    get endDate() { return this._endDate }
    set endDate(date) { this._endDate = date }

    get state() { return this._state }

    get checklist() { return this._checklist }
    
    addItem(itemDesc, id = null) {
        id = (id)? id : this._checklist.length;
        this._checklist.push(new checklistItem(id, itemDesc))
    }
    getItem(id) { if (id < this._checklist.length) return this._checklist[id] }
    clearItems() { this._checklist = [] }
}
