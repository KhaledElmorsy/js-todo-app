import model from './model'
import view from './view'

const { instance, classes } = model

/**
 * Helper functions to facilitate some repetitive tasks:
 */

/**
 * Selects certain elements in a specific parent element and adds listeners to each.
 * @param {Object} context - Controller instance to bind callbacks to since they're class methods
 * @param {HTMLElement} parent - DOM node to select from
 * @param {string} selector - Selector of elements to add listeners to
 * @param {string} event - Event type to listen for i.e. 'click'
 * @param {function(event)} callback - Function to run when event is triggered
 */
function setListeners(context, parent, selector, event, callback) {
    const elements = parent.querySelectorAll(selector)
    if (!elements) return
    for (let el of elements) el.addEventListener(event, callback.bind(context))
}

/**
 * Gets model object's ID from event target's data attribute for callbacks that
 * take ID as input.
 * @param {Event} event - Event object with target HTML element data 
 * @returns {number} - ID of model object linked to event target
 */
function getID(event) {
    return parseInt(event.target.getAttribute('data-child-id'))
}

/**
 * Controller class definitions:
 */

/**
 * Parent abstract class for Controllers which update the model and re-render view.
 * They also assigns event listeners to relevant view elements.
 * Subclasses are hierarchical like models & views: Project List > Project > etc
 */
class Controller {

    constructor() {
        // Ensure class is abstract
        if (this.constructor === Controller) throw new Error('Abstract Class')
    }

    /**
     * Update procedure after model manipulations.
     * 1. Re-render view elements (view is linked to the model)
     * 2. Set relevant event listeners
     * 3. Save Project List instance in local storage 
     */
    update() {
        this.view.render();
        this.listeners();
        localStorage.projectList = JSON.stringify(instance.list)
    }

    // Abstract methods extepcted of each controller
    add() { }  // Add data to the model
    edit() { } // Edit model properties
    listeners() { } // Add event listeners to view elements

    /**
     * 'Deletes' child object by hiding it then runs update() above. View renderer 
     * ignores objects with visislbe = false. This design decision is explained 
     * at the Model class.
     * @param {number} id - child objects id, AKA it's index
     */
    remove(id) {
        this.list[id].visible = false;
        this.update();
    }
}

/**
 * Controller that manages Project models and views. Projects are essentially 
 * parent containers of Todo elements, so the controller handles adding and 
 * removing todos and updating the view/listeners.
 */
class ProjectController extends Controller {
    constructor(project) {
        super();
        this.model = project;
        this.list = project.list;
        this.view = new view.project(this.model);

        super.update();
    }

    add(event) {
        event.preventDefault();

        const inputs = event.target.elements // HTMLCollection: [title, desc, checklist1, checklist2, checklist3]
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
        const formInputs = this.view.form.elements;
        [...formInputs].forEach(input => input.value = '')
    }

    toggle(id) {
        this.list[id].status = !this.list[id].status
        console.log(this.list[id].status)
        super.update();
    }

    listeners() {
        const container = this.view.container
        this.view.form.addEventListener('submit',this.add.bind(this))
        setListeners(this, container, '#reset-todo-inputs', 'click', this.resetInput)
        setListeners(this, container, '.delete', 'click', (e) => this.remove(getID(e)))
        setListeners(this, container, '.done.button', 'click', (e) => this.toggle(getID(e)))
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
        event.preventDefault();

        const id = this.list.length;
        const title = event.target.elements['name'].value;
        this.model.list.push(new classes.Project(id, title))
        
        super.update();
        this.select(id); // Switch to new project
    }

    select(id) {
        const project = this.model.list[id]
        this.projectController = new ProjectController(project); // New controller instance updates/renders its view
        
        this.previousProject = this.activetProject // Record last selected project
        this.activetProject = project // Easier than this.projectController.model
    }

    remove(id) {
        super.remove(id)

        // If active project is deleted, select previous project
        if (id === this.activetProject.id) this.select(this.previousProject.id)
    }

    listeners() {
        const container = this.view.container
        this.view.form.addEventListener('submit',this.add.bind(this))
        setListeners(this, container, '.name', 'click', (e) => this.select(getID(e)))
        setListeners(this, container, '.delete', 'click', (e) => this.remove(getID(e)))
    }
}

export default ProjectListController
