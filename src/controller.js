import model from './model'
import view from './view'

const { instance, classes } = model

const setListeners = (context, container, selector, listener, callback) => {
    const elements = container.querySelectorAll(selector)
    if (!elements) return
    for (let el of elements) el.addEventListener(listener, callback.bind(context))
}

const getID = event => event.target.getAttribute('data-child-id')

class Controller {

    constructor() {
        if (this.constructor === Controller) throw new Error('Abstract Class')
    }

    update() {
        this.view.render();
        this.listeners();
        localStorage.projectList = JSON.stringify(instance.list)
    }

    add() { }
    edit() { }

    remove(id) {
        this.list[id].visible = false;
        this.update();
    }

    listeners() { }
}

class ProjectController extends Controller {
    constructor(project) {
        super();
        this.model = project;
        this.list = project.list;
        this.view = new view.project(this.model);

        super.update();
    }

    add() {
        const form = document.getElementById('new-todo')
        if (!form.reportValidity()) return

        const inputs = form.elements // HTMLCollection: [title, desc, checklist1, checklist2, checklist3]
        const inputValues = [...inputs].map(element => element.value) // Convert to array of values
        const [title, descr, ...checklist] = inputValues

        const list = checklist.map((itemDescr, i) =>
            new classes.ChecklistItem(i, itemDescr)) // id, descr

        const [startDate, endDate] = [null, null]
        const id = this.list.length

        const todo = new classes.Todo(id, title, descr, startDate, endDate, list)
        this.list.push(todo)

        super.update()
    }

    remove(event) {
        super.remove(event);
    }

    edit() {
        // Add edit functionality
    }

    resetInput() {
        const formInputs = document.getElementById('new-todo').elements;
        [...formInputs].forEach(input => input.value = '')
    }

    listeners() {
        const container = this.view.container
        setListeners(this, container, '#add-todo', 'click', this.add)
        setListeners(this, container, '#reset-todo-inputs', 'click', this.resetInput)
        setListeners(this, container, '.delete', 'click', (e) => this.remove(getID(e)))
    }

}

class ProjectListController extends Controller {
    constructor() {
        super();
        this.model = instance;
        this.view = new view.projectList(this.model);
        this.list = instance.list;

        super.update();

        const activeProjects = this.list.filter(proj => proj.visible)
        if (activeProjects.length) {
            this.projectController = new ProjectController(activeProjects[0]) // Clean this up
        }
    }

    add(event) {
        if (event.key !== 'Enter') return
        const id = this.list.length;
        const title = event.target.value;
        this.model.list.push(new classes.Project(id, title))
        super.update();
    }

    select(id) {
        const project = this.model.list[id]
        this.projectController = new ProjectController(project); // New controller instance updates/renders its view
    }

    remove(id) {
        super.remove(id)
    }

    listeners() {
        const container = this.view.container
        setListeners(this, container, '#add-project', 'keydown', this.add)
        setListeners(this, container, '.name', 'click', (e) => this.select(getID(e)))
        setListeners(this, container, '.delete', 'click', (e) => this.remove(getID(e)))
    }
}

export default ProjectListController
