import projectsDOM from "../dom-elements/projectsDOM.js"
import DOM from "../dom-modules/domModules.js"
import projects from "../helper-modules/projectsInstance.js"

export default function selectProject(e){
    for (let element of projectsDOM.children) element.setAttribute('active-project',false)
    e.target.setAttribute('active-project',true)

    let projectID = e.target.getAttribute('data-project-id');
    let projectObj = projects.getProject(projectID);
    DOM.populateTodo(projectObj)
}
