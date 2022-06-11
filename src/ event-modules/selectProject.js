import elements from "../dom-elements/dom-elements.js"
import DOM from "../dom-modules/domModules.js"
import projects from "../helper-modules/projectsInstance.js"
import activeObject from "../helper-modules/activeObject.js"

const projectsContainer = elements.containers.projectsContainer

export default function selectProject(projectID){
    activeObject.projectID = projectID // Save state for deletions/additions etc

    const activeProjElement = projectsContainer.querySelector(`[data-project-id="${projectID}"`)
    for (let element of projectsContainer.children) element.setAttribute('data-active-project',false)
    activeProjElement.setAttribute('data-active-project',true)

    DOM.populateTodo(projectID);
}
