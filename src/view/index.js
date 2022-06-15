import templates from "./templates"

const containers = {
    todo: document.querySelector('main'),
    project: document.getElementById('projects')
}

// Add event liseners to element collections based on containers
function setListeners(container, selector, event, callback) {
    const elements = container.querySelectorAll(selector)

    for (let element of elements) element.addEventListener(event, callback)
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

    listeners() { }

    // Default update flow
    update(model) {
        render(model);
        listeners();
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

    listeners() {
        setListeners(this._container, '.delete', 'click', Handlers.todo.remove);
        setListeners(this._container, '.done', 'click', Handlers.todo.toggle);

        setListeners(this._container, '#add-todo', 'click', Handlers.todo.add);
        setListeners(this._container, '#reset-input', 'click', Handlers.todo.reset);
    }

    update(){
        super.update();
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

    listeners() {
        setListeners(this._container, '.project', 'click', Handlers.project.select);
        setListeners(this._container, '#new-project', 'click', Handlers.project.add);
    }

    update() {
        super.update();
    }
}

const views = {
    todo: new TodoView(),
    project: new ProjectView()
}

export default views
