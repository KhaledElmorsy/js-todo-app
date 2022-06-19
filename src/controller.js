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
    const itemContainerEl = event.composedPath().find(el => el.hasAttribute('data-child-id'))
    return parseInt(itemContainerEl.getAttribute('data-child-id'))
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

    /**
     * Filters list of child objects and only keep ones where visible = true.
     * @returns {Array} - Array of child objects
     */
    getVisible() {
        return this.list.filter(child => child.visible)
    }
}

class ChecklistController extends Controller{
    constructor(todo){
        super();
        this.model = todo;
        this.list = todo.list;
        this.view = new view.populator(todo, 'Checklist');
        super.update();
    }

    edit(event){
        const todoID = getID(event);
        const inputValue = event.target.value;
        if (inputValue) 
            this.list[todoID].descr = inputValue;
        else {
            this.list[todoID].visible = false;
            this.update();
        }
    }

    add(event){
        const form = this.view.addForm
        const id = this.list.length
        this.list.push(new classes.ChecklistItem(id, form['descr'].value))
        this.update();
        
        // Focus input and put cursos at the end by resetting the value (kinda hacky)
        const checklistElement = this.view.container.querySelector(`[data-child-id="${id}"] input`)
        const tempDescr = checklistElement.value;
        checklistElement.focus();
        checklistElement.value = ''; 
        checklistElement.value= tempDescr;
    }

    listeners(){
        const container = this.view.container
        setListeners(this, container, '.checklist-item', 'input', this.edit)
        setListeners(this, container, '#new-checklist-item', 'input', this.add)
        setListeners(this, container, '.delete', 'click', (e)=>this.remove(getID(e)))
    }
}


class TodoController extends Controller {
    constructor(todo) {
        super();
        this.model = todo;
        this.view = new view.todo(todo);
        this.form = this.view.form;
        this.update();
        this.checklist = new ChecklistController(todo)
    }

    close() {
        event.preventDefault();
        this.view.hide();
        this.projectController.update();
    }

    refresh() {
        this.close();
        this.update();
    }

    // Runs close() by submitting the form.
    clickOut(event) {
        if(event.target === event.currentTarget) 
            this.view.form.elements['save'].click(); // submit() doesn't trigger listener
    }

    edit(event) {
        const input = event.target
        const modelProperty = input.name
        this.model[modelProperty] = input.value
    }

    listeners(){
        this.view.form.addEventListener('submit',()=>this.close())
        setListeners(this, this.view.form, 'input,textarea', 'input', this.edit)
        setListeners(this, this.view.container, '#todo-background', 'click', this.clickOut)
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
        this.view = new view.populator(this.model, 'Project');

        super.update();
    }

    add(event) {
        event.preventDefault();

        const inputs = event.target.elements // HTMLCollection: [title, desc, checklist1, checklist2, checklist3]
        const inputValues = [...inputs].map(element => element.value) // Convert to array of values
        const [title, descr, ...checklist] = inputValues

        const list = checklist.filter(itemDescr => itemDescr).map((itemDescr, i) =>
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

    edit(id) {
        super.update() // Avoids multiple concurrent editing forms. Doesn't save changes.

        this.view.editMode(id);
        this.view.container.querySelector('.edit-form').addEventListener('submit', (event) => {
            event.preventDefault();

            const inputs = [...event.target.elements].filter(el=>(el.tagName !== 'BUTTON')) //Filter out buttons
            const inputValues = inputs.map(el => el.value)
            const [newTitle, newDescr, ...newList] = inputValues
            
            const todoModel = this.model.list[id] // Model instance being edited
            todoModel.title = newTitle;
            todoModel.descr = newDescr;
            
            const renderedList = todoModel.list.filter(item=>item.visible) // Only compare to visible items
            newList.forEach((itemDescr, i) => {
                if (!itemDescr && !renderedList[i]) return // Skip if field is empty and nothing was rendered

                if (renderedList[i]) { // If an item was rendered:
                    const itemID = renderedList[i].id // Get the actual index of the item in the model list
                    
                    if (!itemDescr){ 
                        todoModel.list[itemID].visible = false;     // If the relevant field is now empty, hide the item
                    } else {           
                        todoModel.list[itemID].descr = itemDescr;   // Otherwise change its value
                    }

                } else { // If there's no rendered item, then add a new item
                    const id = todoModel.list.length
                    todoModel.list.push(new classes.ChecklistItem(id, itemDescr));
                }
            })
            
            super.update()
        })
        
    }

    select(id) {
        this.todoController = new TodoController(this.list[id])
        this.todoController.projectController = this;
    }

    resetInput() {
        const formInputs = this.view.addForm.elements;
        [...formInputs].forEach(input => input.value = '')
    }

    toggle(id) {
        this.list[id].status = !this.list[id].status
        super.update();
    }

    listeners() {
        const container = this.view.container
        this.view.addForm.addEventListener('submit', this.add.bind(this))
        setListeners(this, container, '#reset-todo-inputs', 'click', this.resetInput)
        setListeners(this, container, '.delete', 'click', (e) => this.remove(getID(e)))
        setListeners(this, container, '.done-toggle', 'click', (e) => {this.toggle(getID(e))})
        setListeners(this, container, '.card p,h2,h4,li', 'dblclick', (e) => this.edit(getID(e)))
        setListeners(this, container, '.card:not(#new-todo, button)', 'click', (e) => {
            if (e.target === e.currentTarget)
                this.select(getID(e))
        })
    }

}

class ProjectListController extends Controller {
    constructor() {
        super();
        this.model = instance;
        this.view = new view.populator(this.model, 'ProjectList');
        this.list = instance.list;

        super.update();

        // Get enabled projects and select the first one by default 
        this.selectDefault();
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
    
        this.view.render(this.activetProject)
        this.listeners()
    }

    selectDefault() {
        const visibleProjects = super.getVisible();
        if (visibleProjects.length) {
            this.select(visibleProjects[0].id)
        } else {
            this.emptyView = new view.new()
        }
    }

    remove(id) {
        super.remove(id)

        // We need to reselect our project since update() that's called in
        // super.remove() refreshes the view. 
        // Also, we might have removed the currently selected project so we need
        // to select a different one.
        if (id === this.activetProject.id){ // If we removed the active project
            if (this.previousProject?.visible)        // Check if the previous project is visible
                this.select(this.previousProject.id) // And select it (feels better than going to the top)
            else
                this.selectDefault() // Or select the first visible project if it isn't
        } else {
            this.select(this.activetProject.id)  // Reselect the active project if it wasn't the one removed
        }                                        
    }                                            

    edit(id) {
        super.update() // Avoids multiple concurrent editing forms. Doesn't save changes.
        this.view.editMode(id);

        const project = this.model.list[id]
        const originalTitle = project.title // Save original incase view updates while form's empty

        this.view.editForm['title'].addEventListener('input', () => {
            const newTitle = this.view.editForm['title'].value
            if (newTitle)
                project.title = newTitle
            else
                project.title = originalTitle // If field's empty, keep the original title in the model
        })
        this.view.editForm.addEventListener('submit', (event) => {
            event.preventDefault();
            super.update();
            this.select(id);
        })
    }

    listeners() {
        const container = this.view.container
        this.view.addForm.addEventListener('submit', this.add.bind(this))
        setListeners(this, container, '.name', 'click', (e) => this.select(getID(e)))
        setListeners(this, container, '.delete', 'click', (e) => this.remove(getID(e)))
        setListeners(this, container, '.project', 'dblclick', (e) => this.edit(getID(e)))
    }
}

export default ProjectListController
