import { statusToClass, getVisible } from "./helpers"

/**
 * This module consolidates the tempaltes that are used to render the project view.
 *
 * A project contains an array of todo objects. To render a project, a populator-type
 * view is used that iterates through the array and creates separate elements for 
 * each todo object.
 * 
 * There are other templates that can be rendered by the View for adding new Todos, editing Todos, and 
 * informing the user that they need to add a new project if the project list's empty.
 * 
 * {@link projectTemplates Visit Module}
 * @namespace ProjectTemplates
 * @memberof Templates
 * 
 * @property {Function} add - Create 'Add Todo Form' element HTML {@link projectTemplates.add see here}
 * @property {Function} standard - Create 'Standard Todo' element HTML {@link projectTemplates.standard see here}
 * @property {Function} edit  - Create 'Edit Todo' element HTML {@link projectTemplates.edit see here}
 * @property {Function} empty - Create 'Empty Projects' element HTML {@link projectTemplates.empty see here}
 * 
 */
const projectTemplates = {

    /** Todo model object
     *  @typedef { import("../model.js").Todo} Todo
     */

    /**
     * Create an HTML string of the standard element displaying a Todo's information 
     * in the Project View.
     * 
     * {@link projectTemplates.standard View}
     * @memberof Templates.ProjectTemplates
     * 
     * @param {Todo} todoObj Todo model object
     * @returns {string} Element's Outer HTML
     */
    standard(todoObj) {
        const elementHTML =
            `<div class="card ${statusToClass(todoObj, 'done')}" data-child-id="${todoObj.id}">
                <h2 class="title">${todoObj.title}</h2>
                <p class="descr">${todoObj.descr}</p>
                <h4 class="checklist-title">Tasks</h4>
                <div class="checklist-container">${
                ( // Item Array > Filter inactive > Map to template string > Slice First 3 > Remove commas
                    getVisible(todoObj.list).map(item =>
                        `<li class="checklist-item ${statusToClass(item, 'done')}">${item.descr}</li>`
                    ).slice(0, 3).join('')
                ) + (
                    (getVisible(todoObj.list).length > 3) ?
                        '<div class="more-items-inside"></div>' : ''
                )
                }</div>
                <div class="button-container">
                    <div class="done-toggle button">Done</div>
                    <div class="delete button">Delete</div>
                </div>
            </div>`
        return elementHTML
    },

    /** 
     * Generate HTML for the element containing forms to create and append a new todo to the project
     * 
     * {@link projectTemplates.add View}
     * @memberof Templates.ProjectTemplates
     * 
     * @returns {string} Element's Outer HTML
     */
    add() {
        const elementHTML =
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
    },

    /**
     * Generate HTML for the element containing forms to create and append a new todo to the project
     * 
     * {@link projectTemplates.edit View}
     * @memberof Templates.ProjectTemplates
     * 
     * @param {Todo} todoObj Todo model object
     * @returns {string} Element's Outer HTML
     */
    edit(todoObj) {
        const activeList = getVisible(todoObj.list)
        const elementHTML =
            `<form class="edit-form card">
                <input required class="title" name="title" value="${todoObj.title}">
                <textarea class="descr" name="descr">${todoObj.descr}</textarea>
                <h4 class="checklist-title">Tasks</h4>
                <div class="checklist-container">
                        <input name ="list" class="checklist-input" value="${activeList[0] ? activeList[0].descr : ""}">
                        <input name ="list" class="checklist-input" value="${activeList[1] ? activeList[1].descr : ""}">
                        <input name ="list" class="checklist-input" value="${activeList[2] ? activeList[2].descr : ""}">
                </div>
                <div class="button-container">
                    <button type="submit" id="add-todo" class="button">Save</button>
                    <div id="reset-todo-inputs" class="button">Delete</div>
                </div>
            </form>`
        return elementHTML
    },

    /** 
     * Generate HTML for the element to add to the project view when there are no projects
     * 
     * {@link projectTemplates.empty View}
     * @memberof Templates.ProjectTemplates
     * 
     * @returns {string} Element's Outer HTML
     */
    empty() {
        const elementHTML =
            `<div id="new-app">Add a new project</div>`
        return elementHTML
    }

}

export default projectTemplates
