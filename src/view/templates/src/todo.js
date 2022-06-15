// HTML for New Todo Item Card
const newTodoForm = () => {
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
                <div id="new-todo" class="button">Add</div>
                <div id="reset-todo-inputs" class="button">Reset</div>
            </div>
        </form>`
    return elementHTML
}

// Function generates Todo Item card HTML using todo object properties
const todoElement =  todoObj => {
    const todoStatus = totodoObjdo.state.status ? 'done' : '' ;
    
    // Checklist Item Functions
    function getActive(checklist) { return checklist.filter(item => item.state.visibility) }
    function itemStatus(item) { return item.state.status ? 'done' : '' }
    
    const elementHTML = 
        `<div class="card ${todoStatus}">
            <h2 class="title">${todoObj.title}</h2>
            <p class="desc">${todoObj.desc}</p>
            <div class="checklist-container">
                <h3 class="checklist-title">Tasks</h3>
                    ${getActive(todoObj.checklist).map(item => 
                        `<li class="checklist-item ${itemStatus(item)}">${item.desc}</li>`
                    )}
            </div>
            <div class="button-container">
                <div class="done button">Done</div>
                <div class="delete button">Delete</div>
            </div>
        </div>`
    return elementHTML
}

const todoTemplates = {
    new: newTodoForm,
    standard: todoElement,
}

export default todoTemplates
