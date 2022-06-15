import templates from "./templates"

const containers = {
    todo: document.querySelector('main'),
    project: document.getElementById('projects')
}


class View {
    constructor(model) {
        if (this.constructor === View) throw new Error('Abstract Class')
        this._template = template(model, 'standard');
        this._container = containers[model];
    }

    // Model objects aren't 'removed' but disabled, this function returns active models
    getActive(modelList) { return modelList.filter(model => model.state.visibility) }
    
    // Default rendering method. AKA Populating
    render(modelList) {
        this._container.innerHTML = '';

        this.getActive(modelList).forEach(modelObj =>
            this._container.append(this._template(modelObj)))
    }
}


class TodoView extends View {
    constructor() {
        super('todo');
        this._addTodo = templates('todo', 'add');
    }

    render(todoList) {
        super.render(todoList);
        this._container.append(this._addTodo());
    }
}


class ProjectView extends View {
    constructor() {
        super('project');
        this._addProject = templates('todo', 'add');
    }

    render(projectList) {
       super.render(projectList);
       this._container.append(this._addProject);
    }
}


const views = {
    todo: new TodoView(),
    project: new ProjectView()
}

export default views
