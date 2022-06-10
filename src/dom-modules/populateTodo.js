import drawCard from "./drawCard.js";
import todoContainer from "../dom-elements/todoContainer.js";

const newTodo = document.querySelector('.card.new-todo')

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
}
