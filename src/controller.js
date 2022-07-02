import {
  ChecklistItem,
  Todo,
  Project,
  ProjectList,
} from './model';

import {
  PopulatorView,
  TodoView,
  NewAppView,
} from './view';

/** @typedef {import('./model').DataModel} DataModel */

/**
 * Controllers handle manipulating models, creating and controlling views, and handling events.
 * @namespace Controllers
 */

/**
 * Main app instance
 * @type {ProjectList}
 * @memberof Controllers
 */
const instance = new ProjectList();

/**
 * Helper functions to facilitate some repetitive tasks:
 * @namespace Controllers.ControllerHelpers
 */

/**
 * Selects certain elements in a specific parent element and adds listeners to each.
 * @memberof Controllers.ControllerHelpers
 * @param {Object} context - Controller instance to bind callbacks to since they're class methods
 * @param {HTMLElement} parent - DOM node to select from
 * @param {string} selector - Selector of elements to add listeners to
 * @param {string} event - Event type to listen for i.e. 'click'
 * @param {function(event)} callback - Function to run when event is triggered
 */
function setListeners(context, parent, selector, event, callback) {
  const elements = parent.querySelectorAll(selector);
  if (!elements) return;

  for (const el of elements) el.addEventListener(event, callback.bind(context));
}

/**
 * Gets model object's ID from event target's data attribute for callbacks that
 * take ID as input.
 * @memberof Controllers.ControllerHelpers
 * @param {Event} event - Event object with target HTML element data
 * @returns {number} - ID of model object linked to event target
 */
function getID(event) {
  const itemContainerEl = event.composedPath().find((el) => el.hasAttribute('data-child-id'));
  return parseInt(itemContainerEl.getAttribute('data-child-id'), 10);
}

/**
 * Parent abstract class for Controllers which update the model and re-render view.
 * They also assigns event listeners to relevant view elements.
 * Subclasses are hierarchical like models & views: Project List > Project > .
 *
 * {@link Controller View}
 * @memberof Controllers~
 */
class Controller {
  /**
   * @param {DataModel} model Source model to be editied
   */
  constructor(model) {
    // Ensure class is abstract
    if (this.constructor === Controller) throw new Error('Abstract Class');
    /**
     * The model object being rendered and edited by the controller.
     * @type {DataModel}
     */
    this.model = model;
  }

  /** Save overall app model to local storage */
  save() {
    localStorage.projectList = JSON.stringify(instance.list);
  }

  /**
   * Update procedure after model manipulations that affect view elements.
   * 1. Save Project List instance in local storage
   * 2. Re-render view elements
   * 3. Set relevant event listeners
   */
  update() {
    this.save();
    this.view.render();
    this.listeners();
  }

  // Abstract methods extepcted of each controller:

  /** Edit model/child data */
  edit() { }

  /** Set event listeners to elements rendered by the view */
  listeners() { }

  /** Remove relevant model by setting visibility to false */
  remove() { }

  /** Toggle the 'done' status of the source/child model and update the relevant DOM element classes */
  toggle() { }
}

/**
 * Parent controller for rendering and manipulating a list of child objects in parent models.
 * i.e. Rendering each Todo in an array of Todos in a parent Project model.
 *
 * {@link ListController View}
 * @memberof Controllers~
 * @extends Controller
 * @extends Controllers~Controller
 */
class ListController extends Controller {
  /**
   * @param {DataModel} parent Source parent model. Must contain an array called 'list' containing derived data model types
   * @param {string} type Type of parent model, i.e 'ProjectList', 'Project', 'Todo'. Values according to the keys {@link Views~containers here}
   */
  constructor(parent, type) {
    super(parent);
    /**
     * List of child objects
     * @type {DataModel[]}
     */
    this.list = this.model.list;
    /**
     * A populator view created with the parent model
     * @type {PopulatorView}
     */
    this.view = new PopulatorView(this.model, type);
  }

  /** Add child model */
  add() { }

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
   * Toggle the status (done or not) of a model or child and add/remove a
   * 'done' class to the relevant view element
   * @param {number} id ID/index of the model/child to toggle
   */
  toggle(id) {
    // Edit Model
    this.list[id].status = !this.list[id].status;

    // Add/remove class in view depending on new status.
    const removeClass = !this.list[id].status; // Status: flase >> child isn't done >> Remove 'done' = true.

    this.view.setClass(id, 'done', removeClass);
  }

  /**
    * Filters list of child objects and only keep ones where visible = true.
    * @returns {Array} - Array of child objects
    */
  getVisible() {
    return this.list.filter((child) => child.visible);
  }
}

/**
 * Controller for checklists, which are an array in each Todo containing checklist items.
 * The parent Todo which contains the list, is the source model since rendering and data manipulation
 * the whole list.
 *
 * {@link ChecklistController View}
 * @memberof Controllers
 * @extends ListController
 * @extends Controllers~ListController
 */
class ChecklistController extends ListController {
  /**
   * @param {Todo} todo Parent todo
   */
  constructor(todo) {
    super(todo, 'Checklist');
    super.update();
  }

  /**
   * Edit a checklist item live by updating the model with each input
   * @param {InputEvent} event User input in the field
   */
  edit(event) { // Pass Event as input to cleanly get and use event target's value
    const itemID = getID(event); // Instead of using getID then edit(id) in the callback
    const inputValue = event.target.value;
    if (inputValue) { // If field isn't empty, update item's model
      this.list[itemID].descr = inputValue;
      super.save();
    } else { // If field is empty, remove item, and update (save and re-render)
      super.remove(itemID);
      this.update();
      this.view.addForm.descr.focus(); // Focus add form's input if user still wants to enter an item
    }
  }

  /** Add a new checklist item to the model when the user makes an input in the add form */
  add() {
    const form = this.view.addForm;
    const id = this.list.length;
    this.list.push(new ChecklistItem(id, form.descr.value));
    this.update();

    // Focus newly created input and put cursos at the end by resetting the value (kinda hacky)
    const checklistElement = this.view.container.querySelector(`[data-child-id="${id}"] input`);
    const tempDescr = checklistElement.value;
    checklistElement.focus();
    checklistElement.value = '';
    checklistElement.value = tempDescr;
  }

  /** Set relevant listeners to each checklist item */
  listeners() {
    const { container } = this.view;
    setListeners(this, container, '.checklist-item', 'input', this.edit);
    setListeners(this, container, '#new-checklist-item', 'input', this.add);
    setListeners(this, container, '.delete', 'click', (e) => this.remove(getID(e)));
    setListeners(this, container, '.done-toggle', 'click', (e) => super.toggle(getID(e)));
  }
}

/**
 * Controller for the detailed Todo View modal. Automatically renders modal when instanced
 *
 * {@link TodoController View}
 * @memberof Controllers
 * @extends Controller
 * @extends Controllers~Controller
 */
class TodoController extends Controller {
  /**
   * @param {classes['Todo']} todo Source Todo model
   */
  constructor(todo) {
    super(todo);
    /**
     * The controller's current view object
     * @type {TodoView}
     */
    this.view = new TodoView(todo);

    this.update(); // Render and set listeners

    /**
     * The modal body. An form element with fields for each model property, pre-filled with
     * their original values. User inputs updated the model {@link edit see here}
     * @type {HTMLFormElement}
     */
    this.form = this.view.form;

    /**
     * Checklist controller that handles rendering and updating the array of
     * child checklist item objects
     * @type {ChecklistController}
     */
    this.checklist = new ChecklistController(todo);
  }

  /** Hide the modal and re-render project view */
  close() {
    this.view.hide();
    this.projectController.update();
  }

  /** Close modal if the user clicks outside by submitting it, hence running {@link close} */
  clickOut(event) {
    if (event.target === event.currentTarget) {
      this.view.form.elements.save.click(); // submit() doesn't trigger listener
    }
  }

  /** Edit the model live by updating it when a user makes in an input in field */
  edit(event) {
    const input = event.target;
    const modelProperty = input.name; // Field names match model property names
    this.model[modelProperty] = input.value;
    this.save(); // Save to local storage
  }

  /** Set Todo's visibility to false and close the modal element (refreshing the project view) */
  remove() {
    this.model.visible = false;
    this.close();
  }

  /** Toggle the status of the Todo element and toggle the 'done' class on the modal */
  toggle() {
    this.model.status = !this.model.status;

    const removeClass = !this.model.status;
    this.view.setClass('done', removeClass);
  }

  /** Set relevant listeners to modal elements, the form, and the background */
  listeners() {
    setListeners(this, this.view.form, 'input,textarea', 'input', this.edit);
    setListeners(this, this.view.container, '#todo-background', 'click', this.clickOut);
    setListeners(this, this.view.form, '.delete', 'click', this.remove);
    setListeners(this, this.view.form, '.done-toggle', 'click', this.toggle);
    this.view.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.close();
    });
  }
}

/**
 * Controller that manages Project models and views. Projects are essentially
 * parent containers of Todo elements, so the controller handles the array of todos.
 *
 * @extends ListController
 * @extends Controllers~ListController
 * @memberof Controllers
 */
class ProjectController extends ListController {
  /**
   * @param {Project} project Source projet model
   */
  constructor(project) {
    super(project, 'Project');
    super.update();
  }

  /** Add todo element to project based on form input values */
  add(event) {
    event.preventDefault();

    const inputs = event.target.elements; // HTMLCollection: [title, desc, checklist1, checklist2, checklist3]
    const inputValues = [...inputs].map((element) => element.value); // Convert to array of values
    const [title, descr, ...checklist] = inputValues;

    const list = checklist.filter((itemDescr) => itemDescr).map((itemDescr, i) => new ChecklistItem(i, itemDescr)); // id, descr

    const [startDate, endDate] = [null, null];
    const id = this.list.length;

    const todo = new Todo(id, title, descr, startDate, endDate, list);
    this.list.push(todo);

    super.update();
  }

  /**
   * Replace the Todo card with a form containing the original values.
   * Submitting the form then updates the model with the new values and updates the
   *  view/listeners and local storage
   */
  edit(id) {
    super.update(); // Avoids multiple concurrent editing forms. Doesn't save changes.

    this.view.editMode(id);
    this.view.container.querySelector('.edit-form').addEventListener('submit', (event) => {
      event.preventDefault();

      const inputs = [...event.target.elements].filter((el) => (el.tagName !== 'BUTTON')); // Filter out buttons
      const inputValues = inputs.map((el) => el.value);
      const [newTitle, newDescr, ...newList] = inputValues;

      const todoModel = this.model.list[id]; // Child Todo model instance being edited
      todoModel.title = newTitle;
      todoModel.descr = newDescr;

      // Handle Checklist items by comparing the model's visible checklist items with the 3 inputs's values (newList)
      const renderedList = todoModel.list.filter((item) => item.visible); // Get visible items
      newList.forEach((itemDescr, i) => {
        if (!itemDescr && !renderedList[i]) return; // Skip if field is empty and nothing was rendered

        if (renderedList[i]) { // If an item was rendered:
          const itemID = renderedList[i].id; // Get the actual index of the item in the model list

          if (!itemDescr) {
            todoModel.list[itemID].visible = false; // If the corresponding field is now empty, hide/remove the item
          } else {
            todoModel.list[itemID].descr = itemDescr; // Otherwise update its value
          }
        } else { // If there's no corresponding visible item, then add a new item to the model
          const newID = todoModel.list.length;
          todoModel.list.push(new ChecklistItem(newID, itemDescr));
        }
      });

      super.update();
    });
  }

  /** Select a Todo item and load it into a {@link TodoController} */
  select(id) {
    this.todoController = new TodoController(this.list[id]);

    /**
     * Parent project controller
     * @type {ProjectController}
     */
    this.todoController.projectController = this; // Add parent controller property to call update() after closing the modal.
  }

  /** Set listeners for all Todo cards child elements in the project view container and the add form.  */
  listeners() {
    const { container } = this.view;
    this.view.addForm.addEventListener('submit', this.add.bind(this));
    setListeners(this, container, '.delete', 'click', (e) => this.remove(getID(e)));
    setListeners(this, container, '.done-toggle', 'click', (e) => super.toggle(getID(e)));
    setListeners(this, container, '.card:not(#new-todo) :is(p,h2,h4,li)', 'dblclick', (e) => this.edit(getID(e)));
    setListeners(this, container, '.card:not(#new-todo, button)', 'click', (e) => {
      if (e.target === e.currentTarget) { this.select(getID(e)); }
    });
  }
}

/** Handles the overall app model instance, which is an array of project models */
class ProjectListController extends ListController {
  constructor() {
    super(instance, 'ProjectList');
    super.update();

    // Get enabled projects and select the first one by default
    this.selectDefault();
  }

  /** Add project when 'add form' is submitted */
  add(event) {
    event.preventDefault();

    const id = this.list.length;
    const title = event.target.elements.name.value;
    this.model.list.push(new Project(id, title));

    super.update();
    this.select(id); // Switch to new project
  }

  /** Select a child project from the array given its ID by creating a project controller instance */
  select(id) {
    const project = this.model.list[id];
    /**
     * Controller for the currently loaded project.
     * @type {ProjectController}
     */
    this.projectController = new ProjectController(project); // New controller instance updates/renders its view

    /**
     * Last selected project
     * @type {classes['Project']}
     */
    this.previousProject = this.activetProject; // Record last selected project incase active project is removed

    /**
     * Currently active project
     * @type {classes['Project']}
     */
    this.activetProject = project;

    this.view.setClass(id, 'active', false, true); // Set relevant child view element to active
  }

  /**
   * Default selection logic when loading the controller for the first time or when removing the current
   * project and the previous proejct was already removed.
   */
  selectDefault() {
    const visibleProjects = super.getVisible();

    if (visibleProjects.length) {
      this.select(visibleProjects[0].id);
    } else {
      this.emptyView = new NewAppView(); // Create a view in the Project View
      // container asking the user to create a new porject
    }
  }

  /**
   * Remove a child project object. Since a project should always be selected,
   * this handles the selection logic incase the active project is deleted.
   */
  remove(id) {
    super.remove(id); // Remove project model from project list's array and update the sidebar.

    // Rendering the sidebar doesn't show the selected project, so we reselect it.
    // Also, we might have removed the currently selected project so we'd need
    // to select a different one.
    if (id === this.activetProject.id) { // If we removed the active project
      if (this.previousProject?.visible) {  // Check if the previous project is visible
        this.select(this.previousProject.id); // And select it (feels better than just selecting the first project)
      } else { 
        this.selectDefault(); // Or select the first visible project if it isn't visible
      }
    } else {
      this.select(this.activetProject.id); // Reselect the active project if it wasn't the one removed
    }
  }

  /**
   * Replace the project container with an pre-filled form that the user can edit.
   * The model value is updated with each input to make editing feel more seamless.
   */
  edit(id) {
    super.update(); // Avoids multiple concurrent editing forms. Doesn't save changes.

    this.view.editMode(id); // Replace field with pre-filled edit form using the model

    const titleInput = this.view.editForm.title;
    titleInput.focus();

    // Put cursor at the end
    const tempvalue = titleInput.value;
    titleInput.value = '';
    titleInput.value = tempvalue;

    const project = this.model.list[id];
    const originalTitle = project.title; // Save original incase view updates while form's empty

    titleInput.addEventListener('input', () => {
      const newTitle = titleInput.value;
      if (newTitle) { project.title = newTitle; } else { project.title = originalTitle; } // If field's empty, keep the original title in the model
    });

    /**
     * Callback to run when the user finishes editing by sumbitting the form or defocusing the input field.
     * @param {SubmitEvent|FocusEvent} event Event that fires when the user finishes editing.
     */
    const finishEdit = (event) => {
      event.preventDefault(); // Incase it's a submit even
      super.update(); // Only save to local storage after finishing
      this.select(id); // Reselect the project being edited.
    };

    this.view.editForm.addEventListener('focusout', finishEdit);
    this.view.editForm.addEventListener('submit', finishEdit);
  }

  /** Set event listeners to relevant child project elements and the 'add project' form */
  listeners() {
    const { container } = this.view;
    this.view.addForm.addEventListener('submit', this.add.bind(this));
    setListeners(this, container, '.name', 'click', (e) => this.select(getID(e)));
    setListeners(this, container, '.delete', 'click', (e) => this.remove(getID(e)));
    setListeners(this, container, '.project', 'dblclick', (e) => this.edit(getID(e)));
  }
}

export default ProjectListController;
