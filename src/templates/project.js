import { statusToClass, getActive } from "./helpers"
/***
 * Here lie the templates that are used to render a project model in the project view. 
 * Since a project is composed of todo items, the standard element displays data concerning
 * a single todo. The view object will iterates over the project's todos and creates elements
 * to populate the contanier.
 */

/** Todo model object
 *  @typedef { import("../model.js").Todo} Todo
*/

/**
 * Create an HTML string of the standard element displaying a Todo's information 
 * in the Project View.
 * @param {Todo} todoObj Todo model object
 * @returns {string} Element's Outer HTML
 */
const todoElement =  todoObj => {
    const elementHTML = 
        `<div class="card ${statusToClass(todoObj,'done')}" data-child-id="${todoObj.id}">
            <h2 class="title">${todoObj.title}</h2>
            <p class="descr">${todoObj.descr}</p>
            <h4 class="checklist-title">Tasks</h4>
            <div class="checklist-container">${
                ( // Item List > Filter inactive > Map to template string > Slice First 3 > Remove commas
                    getActive(todoObj.list).map(item => 
                    `<li class="checklist-item ${statusToClass(item,'done')}">${item.descr}</li>`
                    ).slice(0,3).join('')
                ) + (
                    (getActive(todoObj.list).length > 3)? 
                    '<div class="more-items-inside"></div>' : ''
                )
            }</div>
            <div class="button-container">
                <div class="done-toggle button">Done</div>
                <div class="delete button">Delete</div>
            </div>
        </div>`
    return elementHTML
}

/** 
 * Generate HTML for the element containing forms to create and append a new todo to the project
 * @returns {string} Element's Outer HTML
 */
const addTodoForm = () => {
    const elementHTML  =  
        `<form id="new-todo" class="card">
            <input required class="title" name="title" placeholder="New Todo">
            <textarea class="descr" name="descr" placeholder="Description"></textarea>
            <h4 class="checklist-title">Tasks</h4>
            <div class="checklist-container">
                <input name ="checklist" class="checklist-input">
                <input name ="checklist" class="checklist-input">
                <input name ="checklist" class="checklist-input">
            </div>
            <div class="button-container">
                <button type="submit" id="add-todo" class="button">Add</button>
                <div id="reset-todo-inputs" class="button">Reset</div>
            </div>
        </form>`
    return elementHTML
}

/**
 * Generate HTML for the element containing forms to create and append a new todo to the project
 * @param {Todo} todoObj Todo model object
 * @returns {string} Element's Outer HTML
 */
const editTodoForm = (todoObj) => {
    const activeList = getActive(todoObj.list)
    const elementHTML  =  
        `<form class="edit-form card">
            <input required class="title" name="title" value="${todoObj.title}">
            <textarea class="descr" name="descr">${todoObj.descr}</textarea>
            <h4 class="checklist-title">Tasks</h4>
            <div class="checklist-container">
                    <input name ="list" class="checklist-input" value="${activeList[0]? activeList[0].descr:""}">
                    <input name ="list" class="checklist-input" value="${activeList[1]? activeList[1].descr:""}">
                    <input name ="list" class="checklist-input" value="${activeList[2]? activeList[2].descr:""}">
            </div>
            <div class="button-container">
                <button type="submit" id="add-todo" class="button">Save</button>
                <div id="reset-todo-inputs" class="button">Delete</div>
            </div>
        </form>`
    return elementHTML
}

/** 
 * Generate HTML for the element to add to the project view when there are no projects
 * @returns {string} Element's Outer HTML
 */
const emptyProjects = () => {
    const elementHTML =
         `<div id="new-app">Add a new project</div>`
    return elementHTML
}

/**
 * Consolidate Project View's Todo template HTML generating functions
 * @property {Function} add - Create 'Add Todo Form' element HTML
 * @property {Function} standard - Create 'Standard Todo' element HTML
 * @property {Function} edit  - Create 'Edit Todo' element HTML
 * @property {Function} empty - Create 'Empty Projects' element HTML
 * 
 */
const projectTemplates = {
    /** @type {addTodoForm} */
    add: addTodoForm,

    /** @type {todoElement} */
    standard: todoElement,

    /** @type {editTodoForm} */
    edit: editTodoForm,

    /** @type {emptyProjects} */
    empty: emptyProjects
}

export default projectTemplates
