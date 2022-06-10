import elements from "../dom-elements/dom-elements";

export default function resetNewTodo(){
    const newTodoForm = elements.templates.newTodo
    const inputs = newTodoForm.elements
    for (let input of inputs) input.value = ''
}
