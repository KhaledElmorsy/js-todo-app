import projectsContainer from "../dom-elements/projectsContainer.js"
import DOM from "../dom-modules/domModules.js"
import projects from "../helper-modules/projectsInstance.js"

export default function selectProject(e){
    for (let element of projectsContainer.children) element.setAttribute('active-project',false)
    e.target.setAttribute('active-project',true)

    let projectID = e.target.getAttribute('data-project-id');
    let projectObj = projects.getProject(projectID);
    DOM.populateTodo(projectObj)
}
