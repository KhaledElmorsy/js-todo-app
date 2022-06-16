/***
 * Here lie the templates that are used to render a project. Since a project is
 * composed of todo items, then the standard element displays some data concerning
 * a single todo. The Project View iterates over the todo's and creates elements
 * to populate the contanier.
 */

// Generate HTML using todo object properties
const todoElement =  todoObj => {
    const todoStatus = todoObj.status ? 'done' : '' ;
    
    // Checklist Item Functions
    function getActive(list) { return list.filter(item => item.visible && item.descr)}
    function itemStatus(item) { return item.status ? 'done' : '' }
    
    const elementHTML = 
        `<div class="card ${todoStatus}">
            <h2 class="title">${todoObj.title}</h2>
            <p class="desc">${todoObj.descr}</p>
            <div class="checklist-container">
                <h3 class="checklist-title">Tasks</h3>
                    ${getActive(todoObj.list).map(item => 
                        `<li class="checklist-item ${itemStatus(item)}">${item.descr}</li>`
                    ).join('')}
            </div>
            <div class="button-container">
                <div class="done button" data-child-id="${todoObj.id}">Done</div>
                <div class="delete button" data-child-id="${todoObj.id}">Delete</div>
            </div>
        </div>`
    return elementHTML
}

// HTML for the element containing forms to create and append a new todo to the project
const addTodoForm = () => {
    const elementHTML  =  
        `<form id="new-todo" class="card">
            <input required class="title" name="title" placeholder="New Todo">
            <textarea class="desc" name="desc" placeholder="Description"></textarea>
            <div class="checklist-container">
                <h3 class="checklist-title">Tasks</h3>
                <input name ="checklist" class="checklist-input">
                <input name ="checklist" class="checklist-input">
                <input name ="checklist" class="checklist-input">
            </div>
            <div class="button-container">
                <div id="add-todo" class="button">Add</div>
                <div id="reset-todo-inputs" class="button">Reset</div>
            </div>
        </form>`
    return elementHTML
}

const projectTemplates = {
    add: addTodoForm,
    standard: todoElement,
}

export default projectTemplates
