import drawCard from "./drawCard.js";
import elements from "../dom-elements/dom-elements.js";
import setTodoEvents from "../ event-modules/event-setters/setTodoEvents.js";
import resetNewTodo from "../ event-modules/resetNewTodo.js";

const newTodo = elements.templates.newTodo
const todoContainer = elements.containers.todoContainer

export default function populateTodo(project) {
    todoContainer.innerHTML = '';
    if (project.todoList.length) {
        for (let todo of project.todoList) {
            if (todo.state.visibility) {

                todoContainer.appendChild(drawCard(todo.id, todo.title, todo.desc,
                    todo.startDate, todo.endDate, todo.checklist,
                    todo.state.status))
            }
        }
    }
    todoContainer.appendChild(newTodo)
    setTodoEvents()
    resetNewTodo()
}
