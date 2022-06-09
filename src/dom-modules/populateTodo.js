import drawCard from "./drawCard.js";

const todoDOM = document.getElementsByTagName('main')[0];
const newTodo = document.querySelector('.card.new-todo')
console.log(newTodo)

export default function populateTodo(project) {
    todoDOM.innerHTML = '';
    for (let todo of project.todoList) {
        console.log(todo.state)
        if (todo.state.visibility) {

            todoDOM.appendChild(drawCard(todo.id, todo.title, todo.desc,
                todo.startDate, todo.endDate, todo.checklist,
                todo.state.status))
        }
    }
    todoDOM.appendChild(newTodo)
}
