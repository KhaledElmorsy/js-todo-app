/**
 * Each object in the heirarchy shares the properties in this class/mixin.
 * The properties are used for both styling and DOM rendering.
 * The relevant objects are: Project > Todo Item > Checklist Item
 * The checklist container object is always visible and doesn't rely on this class
 */

export default class state{  
    constructor(){
        this.priority = 0; // To order elements
        this.done = false;
        this.visible = true; // Objects don't get deleted, just hidden
    }

    set priority(prio) {this._priority = prio}
    get priority() {return this._priority}

    get status(){return this.done}
    get visibility(){return this.visible}

    toggleStatus() {this.done = !this.done}

    disable() {this.visible = false}
    enable() {this.visible = true}
}
