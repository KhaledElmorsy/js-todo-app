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
        `<div class="card ${todoStatus}" data-child-id="${todoObj.id}">
            <h2 class="title">${todoObj.title}</h2>
            <p class="desc">${todoObj.descr}</p>
            <div class="checklist-container">
                <h3 class="checklist-title">Tasks</h3>
                    ${getActive(todoObj.list).map(item => 
                        `<li class="checklist-item ${itemStatus(item)}">${item.descr}</li>`
                    ).join('')}
            </div>
            <div class="button-container">
                <div class="done button">Done</div>
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
            <textarea class="desc" name="desc" placeholder="Description"></textarea>
            <div class="checklist-container">
                <h3 class="checklist-title">Tasks</h3>
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
    const elementHTML  =  
        `<form class="edit-form card">
            <input required class="title" name="title" value="${todoObj.title}">
            <textarea class="desc" name="descr">${todoObj.descr}</textarea>
            <div class="checklist-container">
                <h3 class="checklist-title">Tasks</h3>
                    <input name ="list" class="checklist-input" value="${todoObj.list[0]? todoObj.list[0].descr:""}">
                    <input name ="list" class="checklist-input" value="${todoObj.list[1]? todoObj.list[1].descr:""}">
                    <input name ="list" class="checklist-input" value="${todoObj.list[2]? todoObj.list[2].descr:""}">
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
