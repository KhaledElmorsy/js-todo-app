import elements from "../../dom-elements/dom-elements.js"
import addTodo from "../addTodo.js"; 
import removeTodo from "../removeTodo.js";
import resetNewTodo from "../resetNewTodo.js";

const todoContainer = elements.containers.todoContainer;

export default function setTodoEvents(){

    // Set New Todo Listeners
    (function newTodoListeners(){
        const addButton = document.getElementById('add-todo')
        const resetInput = document.getElementById('reset-todo-inputs')

        addButton.onclick = addTodo;
        resetInput.onclick = resetNewTodo;
    })();

    // Set Visible Todo Listeners
    (function todoListeners(){
        const deleteButtons = todoContainer.getElementsByClassName('delete');
        for (let button of deleteButtons) {
            let todoID = button.parentNode.parentNode.getAttribute('data-todo-id')
            button.onclick = ()=>removeTodo(todoID)
        }
    })();
}
