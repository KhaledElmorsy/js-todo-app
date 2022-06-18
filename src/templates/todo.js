import { statusToClass, getActive } from "./helpers"
/**
 * Template for the element that shows the Todo item in more detail.
 * Is loaded by the view when you click the todo item.
 */

// Generate HTML template literal using the project object
const standardTodoDetails = (todoObj) => {

    const elementHTML =
    `<div id="todo-background">
        <form id="todo-details">
            <input required class="title" name="title" value="${todoObj.title}">
            <textarea class="descr" name="descr">${todoObj.descr}</textarea>
            <div id="more-details">
                <div class="checklist-container">
                    <h3>Tasks</h3>
                    <div id="checklist"></div>
                </div>
                <div class="dates">
                    <h3>Dates</h3>
                    <div class="date-container">
                        <p class="date-type">Start Date</p>
                        <input type="date" name="startDate" value="${todoObj.startDate || ''}">
                    </div>
                    <div class="date-container">
                        <p class="date-type">End Date</p>
                        <input type="date" name="endDate" value="${todoObj.endDate || ''}">
                    </div>
                </div>
            </div>
            <div class="button-container">
                <input type="submit" name="save" value="Save">
                <div class="delete">Delete</div>
                <div class="done">Done</div>
            </div>
        </form>
    </div>`
    return elementHTML
}


const todoTemplates = {
    standard: standardTodoDetails,
}

export default todoTemplates
