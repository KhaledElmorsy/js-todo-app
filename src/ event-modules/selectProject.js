import elements from "../dom-elements/dom-elements.js"
import DOM from "../dom-modules/domModules.js"
import projects from "../helper-modules/projectsInstance.js"

const projectsContainer = elements.containers.projectsContainer

export default function selectProject(projectID){
    const activeProjElement = projectsContainer.querySelector(`[data-project-id="${projectID}"`)

    for (let element of projectsContainer.children) element.setAttribute('data-active-project',false)
    activeProjElement.setAttribute('data-active-project',true)

    let projectObj = projects.getProject(projectID);
    DOM.populateTodo(projectObj);
}
