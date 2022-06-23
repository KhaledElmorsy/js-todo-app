import templates from "./templates"

const containers = {
    get Checklist() { return document.getElementById('checklist')},
    get Todo() { return document.body},
    get Project() { return document.querySelector('main')},
    get ProjectList() { return document.getElementById('projects')},
}

/**
 * This View class handles rendering and manipulating models that contain an 
 * array of child models [Project List > Array of projects]. 
 * 
 * The view handler loops through the array of child models to generate elements
 *  and populates a specified DOM container with said elements.
 * 
 * Each standard element can enter 'edit mode' if called by the controller, where 
 * it's replaced by an edit form that allows the user to quickly change model properties.
 * 
 * Populator views also have 'add' elements allowing the user to create a new child 
 * model (logic is handled by the controller). 
 */
class PopulatorView {
    constructor(model, type) {
        this.model = model;
        this.container = containers[type];
        this.addFormTemplate = templates(type, 'add')
        this.standardTemplate = templates(type, 'standard');
        this.editFormTemplate = templates(type,'edit');
    }

    // Model objects aren't 'removed' but disabled, this function returns active models
    getActive(list) { return list.filter(model => model.visible) }

    // Default rendering method. AKA Populating
    render() {
        this.container.innerHTML = ''; // Clear container

        const list = this.model.list;
        
        this.getActive(list).forEach( childObj => {
            const standardElement = this.standardTemplate(childObj)
            this.container.appendChild(standardElement)
        })
        
        this.addForm = this.container.appendChild(this.addFormTemplate());  // Append 'Add "model"' element 
    }

    /**
     * Switch the DOM element representing the child model with an 'edit form' that's  
     * pre-filled with the model's original properties and allows the user to edit those properties.
     * @param {number} id - ID of the child model object being edited
     */
    editMode(id) {
        const elementToEdit = this.container.querySelector(`[data-child-id="${id}"]`);
        this.editForm = this.editFormTemplate(this.model.list[id]);
        elementToEdit.replaceWith(this.editForm);
    }

    /**
     * Add or remove an HTML class to the element representing the child object.
     * It's also possible to set the class to the specific child exclusively by 
     * removing it from all other children.
     * @param {number} id - The ID of the child model object
     * @param {String} className- The class to be added/removed 
     * @param {Boolean} remove - True: Remove class. False: Add class. (Default: False) 
     * @param {Boolean} exclusive - True: Remove class from all other children. (Default: False)
     */
    setClass(id, className, remove = false, exclusive = false) {
        [...this.container.children].forEach(el => {
            const elementID = el.getAttribute('data-child-id')
            if (elementID == id) 
                el.classList[(remove? 'remove' : 'add')](className)
            else
                if (exclusive) el.classList.remove(className)
            })
    }
}

/**
 * Handles the rendering and DOM manipulation for a modal that displays the details 
 * for a specific Todo model. Can be generalized for other models that would benefit 
 * from being rendered as a single modal.
 */
class TodoView {
    constructor(todo) {
        this.model = todo;
        this.container = containers['Todo'];
        this.standardTemplate = templates('Todo','standard')
    }

    render() {
        // Generate and append element
        this.standardElement = this.standardTemplate(this.model) 
        this.container.appendChild(this.standardElement)

        // Define reference for easier access by the controller object 
        this.form = this.standardElement.querySelector('form')
    }

    hide() {
        this.container.removeChild(this.standardElement)
    }

    /**
     * Add or Remove an HTML class to the modal.
     * @param {string} className - The class to be added to the modal's body
     * @param {Boolean} remove - True: Remove class. False: Add class. (Default: False)
     */
    setClass(className, remove = false) {
        this.form.classList[(remove? 'remove' : 'add')](className)
    }
}

/**
 * When there are no projects in the proejct list, this renders a default element 
 * in the project container that normally holds Todo cards. This view is called by 
 * the project list controller. 
 */
class NewAppView {
    constructor(){
        this.emptyTemplate = templates('Project','empty');
        this.container = containers['Project'];
        this.render();
    }

    render() {
        this.container.innerHTML = '';
        this.element = this.emptyTemplate()
        this.container.appendChild(this.element)
    }
}

const views = {
    populator: PopulatorView,
    todo: TodoView,
    new: NewAppView,
}

export default views
