import drawCard from "./drawCard.js";

const todoDOM = document.getElementsByTagName('main')[0];
const newTodo = document.querySelector('.card.new-todo')

export default function populateTodo(project) {
    todoDOM.innerHTML = '';
    if (project.todoList.length) {
        for (let todo of project.todoList) {
            if (todo.state.visibility) {

                todoDOM.appendChild(drawCard(todo.id, todo.title, todo.desc,
                    todo.startDate, todo.endDate, todo.checklist,
                    todo.state.status))
            }
        }
    }
    todoDOM.appendChild(newTodo)
}
