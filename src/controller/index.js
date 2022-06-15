import model from '../model'
import view from '../view'

const {instance, classes} = model

function setListeners(container, selector, listener, callback){
    let elements = container.querySelectorAll(selector)
    if (!elements) return
    for (let el of elements) el.addEventListener(listener, callback)
}

class Controller{

    constructor(){
        // if (this.constructor === Controller) throw new Error('Abstract Class')
    }

    update() {
        this.view.render();
        this.listeners();
        localStorage.projectList = JSON.stringify(instance.list)
    }

    add() { }
    edit() { }

    remove(event) {
        let id = event.target.getAttribute('data-child-id')
        this.list[id].visible = false
        this.udpate()
    }

    listeners() { }
}

class ProjectController extends Controller{
    constructor(project){
        super();
        this.model = project;
        this.view = new view.project(this.model);
        this.list = project.list;
        super.update();
    }

    add() {
        const form = this.container.getElementbyId('new-todo')
        const inputs = form.elements // HTMLCollection [title,desc,checklist1,checklist2,checklist3]
        const inputValues = [...inputs].map(element => element.value)
        const [title, descr, ...checklist] = inputValues

        const id = this.list.length

        const list = checklist.map((itemDescr,i) => 
                    new classes.ChecklistItem(i, itemDescr)) // id, descr

        let todo = new classes.Todo(id,title,descr, startDate, endDate, list)
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
        const formInputs = this.container.getElementbyId('new-todo').elements;
        [...formInputs].forEach(input => input.value = '')
    }

    listeners() {
        let container = this.view.container
        setListeners(container, '#add-todo', 'click', this.add)
        setListeners(container, '.delete', 'click', this.remove)
        setListeners(container, '#reset-todo-inputs', 'click', this.resetInput)
    }

}

class ProjectListController extends Controller{
    constructor(){
        super();
        this.model = instance;
        this.view = new view.projectList(this.model);
        this.list = instance.list;
        
        super.update();

        let activeProjects = this.list.filter(proj=>proj.visible)
        this.projectController = new ProjectController(activeProjects[0]) // Clean this up
    }

    add(event) {
        if (event.key !== 'Enter') return

        const id = this.list.length;
        const title = event.target.value;
        this.model.list.push(new classes.Project(id,title))

        super.update();
    }

    select(event) {
        const id = event.target.getAttribute('data-project-id')
        const project = this.model.list[id]
        this.projectController = new ProjectController(project);
    }

    remove(event) {
        super.remove(event)
    }

    listeners() {
        const container = this.view.container
        setListeners(container, '.delete', 'click', this.remove)
        setListeners(container, '#add-project', 'keydown', this.add)
    }
}

export default ProjectListController
