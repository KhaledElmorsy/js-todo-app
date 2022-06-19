import { statusToClass, getActive } from "./helpers"
/***
 * Here lie the templates that are used to render a project. Since a project is
 * composed of todo items, then the standard element displays some data concerning
 * a single todo. The Project View iterates over the todo's and creates elements
 * to populate the contanier.
 */

// Generate HTML using todo object properties
const todoElement =  todoObj => {
    const elementHTML = 
        `<div class="card ${statusToClass(todoObj,'done')}" data-child-id="${todoObj.id}">
            <h2 class="title">${todoObj.title}</h2>
            <p class="descr">${todoObj.descr}</p>
            <h4 class="checklist-title">Tasks</h4>
            <div class="checklist-container">
                    ${getActive(todoObj.list).map(item => 
                        `<li class="checklist-item ${statusToClass(item,'done')}">${item.descr}</li>`
                    ).slice(0,3).join('')}

                    ${(getActive(todoObj.list).length > 3)? 
                        '<div class="more-items-inside"></div>':''}
            </div>
            <div class="button-container">
                <div class="done-toggle button">Done</div>
                <div class="delete button">Delete</div>
            </div>
        </div>`
    return elementHTML
}

// HTML for the element containing forms to create and append a new todo to the project
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

// HTML for the element containing forms to create and append a new todo to the project
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

const projectTemplates = {
    add: addTodoForm,
    standard: todoElement,
    edit: editTodoForm
}

export default projectTemplates
