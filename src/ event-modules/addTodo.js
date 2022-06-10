import DOM from "../dom-modules/domModules.js";
import projects from "../helper-modules/projectsInstance.js";
import elements from "../dom-elements/dom-elements.js";
import populateTodo from "../dom-modules/populateTodo.js";

const projectsContainer = elements.containers.projectsContainer

export default function addTodo(){
    const activeProjElement = projectsContainer.querySelector('[data-active-project="true"]')
    const activeProjID = activeProjElement.getAttribute('data-project-id')
    const newTodoElement = elements.templates.newTodo // Form element

    if (!newTodoElement.checkValidity()) {
        newTodoElement.reportValidity()
        return
    } else {
        const inputs = newTodoElement.elements
        let title = inputs['title'].value
        let desc = inputs['desc'].value
        let checklistNodes = inputs['checklist'] // returns node list
        let checklist = [...checklistNodes].map(el=>el.value).filter(v=>v) // Convert to array, map to values and remove blanks
        projects.getProject(activeProjID).addTodo(title,desc,undefined,undefined,undefined,checklist)
        populateTodo(projects.getProject(activeProjID))
    }   
}
