import DOM from "../dom-modules/domModules.js";
import projects from "../helper-modules/projectsInstance.js";
import elements from "../dom-elements/dom-elements.js";
import activeObject from "../helper-modules/activeObject.js";
import saveProjects from "../helper-modules/storage-modules/saveProjects.js";


const projectsContainer = elements.containers.projectsContainer

export default function addTodo(){
    let projectID = activeObject.projectID

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
        
        projects.getProject(projectID).addTodo(title,desc,undefined,undefined,undefined,checklist)
        saveProjects()
        DOM.populateTodo(projectID)
    }   
}
