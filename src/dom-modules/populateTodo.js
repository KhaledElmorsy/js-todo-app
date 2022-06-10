import drawCard from "./drawCard.js";
import elements from "../dom-elements/dom-elements.js";
import setTodoEvents from "../ event-modules/event-setters/setTodoEvents.js";
import resetNewTodo from "../ event-modules/resetNewTodo.js";

const newTodo = elements.templates.newTodo // Save New Todo form element before clearing the todo area
const todoContainer = elements.containers.todoContainer

export default function populateTodo(project) {
    todoContainer.innerHTML = ''; // Clear todo area
    // If the project has todos, populate the area with the active ones
    if (project.todoList.length) {
        for (let todo of project.todoList) {
            if (todo.state.visibility) {

                todoContainer.appendChild(drawCard(todo.id, todo.title, todo.desc,
                    todo.startDate, todo.endDate, todo.checklist,
                    todo.state.status))
            }
        }
    }
    todoContainer.appendChild(newTodo)  // Add back New Todo input form
    setTodoEvents() // Add Todo card related listeners
    resetNewTodo()  // Clear fields in new Todo field
}
