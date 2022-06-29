/**
 * @typedef {DataModel} DataModel 
 * @ignore 
 */
/**
 * Main parent class for basic data objects: Projects, Todos, and Checklist Items.
 * Each instance has an ID, status flag, and visible flag.
 */
class DataModel {
    /**
     * Create a model object
     * @param {number} id ID to be assigned to the instance.
     */
    constructor(id){
        /**
         * ID of the object. Used as index in parent object's array. 
         * @type {number}
         */
        this.id = id;
        /**
         * Indiciates if the object is 'done' or not. True = done.
         * 
         * Default: false
         * @type {Boolean}
         */
        this.status = false;
        /**
         * Indicates if the object should be rendered. True = render.
         * <br><br>
         * 
         * When a user removes an object, it's not deleted from the parent's array, 
         * instead its visibility is set to 'false'.
         * <br><br>
         * 
         * Default: true.
         * @type {Boolean}
         */
        this.visible = true;
    }
}

/** 
 * Model for checklist items - subtasks for each Todo item
 * @extends DataModel
 */
class ChecklistItem extends DataModel {
    /**
     * Create a new checklist item
     * @param {number} id ID to be assigned to the checklist item
     * @param {string} descr Descirption to added to the item. 
     */
    constructor(id, descr) {
        super(id);
        /**
         * Description of the task to be done
         * @type {string}
         */
        this.descr = descr;
    }
}

/** 
 * Model for todo items 
 * @extends DataModel
 */
class Todo extends DataModel {
    /**
     * Create new Todo Item
     * @param {number} id ID to assign - Also acts as index in parent's array object
     * @param {string} title Main title of the Todo Item
     * @param {string} descr Description of the todo with more details. Optional - Defualt = null
     * @param {string} endDate End Date of the todo item. Optional - Default = null
     * @param {string} startDate Start date of the todo item. Optional - Default = null
     * @param {ChecklistItem[]} [list=[]]  Array of checklist items. Default = empty array.  
     */
    constructor(id, title, descr = null, endDate = null, startDate = null, list = null) {
        super(id);
        /**
         * Main title of the Todo Item
         * @type {string}
         */
        this.title = title;

        /**
         * Description of the todo with more details
         * @type {string}
         */
        this.descr = descr;

        /**
         * End Date of the todo item
         * @type {string}
         */
        this.endDate = endDate;

        /**
         * Start date of the todo item
         * @type {string}
         */
        this.startDate = startDate;

        /**
         * Array of checklist items
         * @type {ChecklistItem[]}
         */
        this.list = list
    }
}

/** 
 * Project Model that contains todo items 
 * @extends DataModel
 */
class Project extends DataModel {
    /**
     * 
     * @param {number} id ID to assign to project
     * @param {string} title Name of the project
     * @param {Todo[]} [list= []] Array of todo objects. Default: empty array.
     */
    constructor(id, title, list = []) {
        super(id);
        /**
         * Project title/name
         * @type {string}
         */
        this.title = title;
        /**
         * Array of todo objects
         * @type {Todo[]}
         */
        this.list = list
    }
}

/** Main app object containing a list of projects */
class ProjectList {
    /** Create project list by loading from local storage if available or creating an empty list */
    constructor() {
        let storedData = localStorage.projectList
        /**
         * Array of project objects. Loaded from local storage.
         * 
         * If local storage location is empty, defaults to empty array.
         * @type {Project[]}
         */
        this.list = storedData? JSON.parse(storedData) : []
    }
}

export { ChecklistItem, Project, Todo, ProjectList }
