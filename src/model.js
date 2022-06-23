
class ObjectModel {
    constructor(id){
        this.id = id;
        this.status = false;
        this.visible = true;
    }
}


class ChecklistItem extends ObjectModel {
    constructor(id, descr) {
        super(id);
        this.descr = descr;
    }
}

class Todo extends ObjectModel {
    constructor(id, title, descr, endDate = null, startDate = null, list = null) {
        super(id);
        this.title = title;
        this.descr = descr;
        this.endDate = endDate;
        this.startDate = startDate;
        this.list = list? list:[]
    }
}

class Project extends ObjectModel {
    constructor(id, title, list = null) {
        super(id);
        this.title = title;
        this.list = list? list : []
    }
}

class ProjectList {
    constructor() {
        // Check Local Storage and Import
        let storedData = localStorage.projectList
        this.list = storedData? JSON.parse(storedData) : []
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
