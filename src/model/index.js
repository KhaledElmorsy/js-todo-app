/***
 * Objects in the model will be instances of these classes.
 * The instances are nested by type: Project List > Project > Todo > Checklist Item
 * Each parent stores one or more child instances in an array.
 * Each class also has properties that define their state: status, visibility
 *  - status: Stores whether the item is completed or not. 
 *  - visibility: To maintain history and simpler ID assignment logic, instances
 *       aren't deleted from the children array when 'removed' by the client.
 *       Their visibility is set to false, and the view object won't render them.
 *       This has the added benefit of implementing recovery functionality, and
 *       caveats can be easily mitigated with a clearing and renumbering function
 */

class ChecklistItem {
    constructor(id, descr, status = false, visibility = true) {
        this.id = id;
        this.descr = descr;

        this.status = status;
        this.visibility = visibility;
    }
}

class Todo {
    constructor(id, name, descr, endDate = null, startDate = null, status = false, visibility = true) {
        this.id = id;
        this.name = name;
        this.descr = descr;
        this.endDate = endDate;
        this.startDate = startDate;

        this.status = status;
        this.visibility = visibility;

        this.checklist = []
    }
}

class Project {
    constructor(id, name, status = false, visibility = true) {
        this.id = id;
        this.name = name;

        this.status = status;
        this.visibility = visibility;

        this.todoList = []
    }
}

class ProjectList {
    constructor() {
        // Check Local Storage and Import
        let storedData = localStorage.projectList
        this.projects = storedData? JSON.parse(storedData) : []
    }
}

const model = {
    classes: {
        ChecklistItem,
        Todo,
        Project
    },
    instance: new ProjectList()
}

export default model
