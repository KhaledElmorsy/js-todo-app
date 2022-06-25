import templates from "./templates"

/**
 * Consolidates generic containers for use by views.
 * <br><br>
 * 
 * Built as a psuedo-dictionary using getters to select elements when called by a new view's constructor.
 * This circumvents containers that aren't in the DOM at page load (i.e. containers that are
 * elements in other yet-to-be-rendered views) 
 * 
 * @memberof Views~
 */
const containers = {
    get Checklist() { return document.getElementById('checklist') },
    get Todo() { return document.body },
    get Project() { return document.querySelector('main') },
    get ProjectList() { return document.getElementById('projects') },
}

/**
 * Import model types
 * @typedef {import("./model").DataModel} DataModel
 * @typedef {import("./model").Todo} Todo
 */

/** 
 * Views handle drawing elements to the DOM based on data stored in a model. 
 * @memberof Views~
 */
class View {
    /**
     * @param {DataModel} model Object to render data from
     * @param {string} type View type i.e. Todo, Project, Project List
     */
    constructor(model, type) {
    /**
     * View object's source data model
     * @type {DataModel}
     */
    this.model = model;

    /**
     * DOM element to append view elements to 
     * @type {Element}
     */
    this.container = containers[type];

    /**
     * Generate a standard view element displaying a model object's data.
     * @type {Function}
     * @param {DataModel} model Model object
     * @returns {Element} HTML element
     */
    this.standardTemplate = templates(type, 'standard')
    }

    /** 
     * Create standard element(s) and append to the container 
     * Some views might need to clear their container, or append extra elements.
     */
    render() { }
}

/**
 * This View class handles rendering and manipulating models that contain an 
 * array of child models [Project List > Array of projects].
 * <br><br>
 * 
 * The view handler loops through the array of child models to generate elements
 * and populates a specified DOM container with said elements.
 * <br><br>
 * 
 * Each standard element can enter 'edit mode' if called by the controller, where 
 * it's replaced by an edit form that allows the user to quickly change model properties.
 * <br><br>
 * 
 * Populator views also have 'add' elements allowing the user to create a new child 
 * model (logic is handled by the controller).
 * <br><br>
 * 
 * {@link PopulatorView View}
 * @extends View 
 * @memberof Views
 */
class PopulatorView extends View{
    /**
     * @param {DataModel} model Object to render data from
     * @param {string} type View type i.e. Project, Project List
     */
    constructor(model, type) {
        super(model, type);

        /**
         * Generate Element for the user to add new child object
         * @type {Function}
         * @returns {Element}
         */
        this.addFormTemplate = templates(type, 'add')

        /**
         * Generate a form, initially filled with the object's data that allows the user to edit the object.
         * @type {Function}
         * @param {DataModel} model Model object
         * @returns {Element} HTML element
         */
        this.editFormTemplate = templates(type, 'edit');
    }

    /**
     * Filters removed (visible=false) objects from an array of model objects
     * @param {DataModel[]} list Array of model objects
     * @returns {DataModel[]} Filtered copy of original array
     */
    getActive(list) { return list.filter(model => model.visible) }

    /**
     * Default rendering function that clears the view container and populates it with 
     * standard elements for each child object and a form to add new children.
     * 
     * {@link render View}
     */
    render() {
        this.container.innerHTML = ''; // Clear container

        const list = this.model.list;

        this.getActive(list).forEach(childObj => {
            const standardElement = this.standardTemplate(childObj)
            this.container.appendChild(standardElement)
        })
        /**
         * Reference to the DOM 'add child' form element
         * @type {Element}
         */
        this.addForm = this.container.appendChild(this.addFormTemplate());  // Append 'Add "model"' element 
    }

    /**
     * Switch the DOM element representing the child model with an 'edit form' that's  
     * pre-filled with the model's original properties and allows the user to edit those properties.
     * 
     * {@link editMode View}
     * 
     * @param {number} id - ID of the child model object being edited
     */
    editMode(id) {
        const elementToEdit = this.container.querySelector(`[data-child-id="${id}"]`);

        /**
         * Reference to the DOM 'edit child' form element
         * @type {Element}
         */
        this.editForm = this.editFormTemplate(this.model.list[id]);

        elementToEdit.replaceWith(this.editForm);
    }

    /**
     * Add or remove an HTML class to the element representing the child object.
     * It's also possible to set the class to the specific child exclusively by 
     * removing it from all other children elements.
     * 
     * {@link setClass View}
     * 
     * @param {number} id - The ID of the child model object
     * @param {string} className- The class to be added/removed 
     * @param {boolean} remove - True: Remove class. False: Add class. (Default: False) 
     * @param {boolean} exclusive - True: Remove class from all other children. (Default: False)
     */
    setClass(id, className, remove = false, exclusive = false) {
        [...this.container.children].forEach(el => {
            const elementID = el.getAttribute('data-child-id')
            if (elementID == id)
                el.classList[(remove ? 'remove' : 'add')](className)
            else
                if (exclusive) el.classList.remove(className)
        })
    }
}

/**
 * Handles the rendering and DOM manipulation for a modal that displays the details 
 * for a specific Todo model. Can be generalized for other models that would benefit 
 * from being rendered as a single modal.
 * 
 * {@link TodoView View}
 * 
 * @extends View
 * @memberof Views
 */
class TodoView extends View{
    /**
     * @param {Todo} todo  Source Todo model object
     */
    constructor(todo) {
        super(todo, 'Todo');
    }

    render() {
        // Generate and append element
        this.standardElement = this.standardTemplate(this.model)
        this.container.appendChild(this.standardElement)

        // Define reference for easier access by the controller object 
        this.form = this.standardElement.querySelector('form')
    }

    /**
     * Remove modal element from the container
     */
    hide() {
        this.container.removeChild(this.standardElement)
    }

    /**
     * Add or Remove an HTML class to the modal.
     * @param {string} className - The class to be added to the modal's body
     * @param {Boolean} remove - True: Remove class. False: Add class. (Default: False)
     */
    setClass(className, remove = false) {
        this.form.classList[(remove ? 'remove' : 'add')](className)
    }
}

/**
 * When there are no projects in the proejct list, this renders a default element 
 * in the project container that normally holds Todo cards. This view is called by 
 * the project list controller. 
 * @memberof Views
 */
class NewAppView {
    constructor() {
        this.emptyTemplate = templates('Project', 'empty');
        this.container = containers['Project'];
        this.render();
    }

    render() {
        this.container.innerHTML = '';
        this.element = this.emptyTemplate()
        this.container.appendChild(this.element)
    }
}

/**
 * @namespace Views
 */
const views = {
    populator: PopulatorView,
    todo: TodoView,
    new: NewAppView,
}

export default views
