import setProjectEvents from "../ event-modules/setProjectEvents.js";
import makeEl from "../helper-modules/makeElement.js"
import projects from "../helper-modules/projectsInstance.js"
import projectsDOM from "../dom-elements/projectsDOM.js";

export default function populateProjects() {
    projectsDOM.innerHTML = "";

    let activeProjects = projects.getActive()
    if (activeProjects.length) {
        for (let project of activeProjects) {
            projectsDOM.appendChild(makeEl('p', project.name, {
                'data-project-id': project.id,
                'data-status': project.state.status
            }))
        }
    }
    projectsDOM.appendChild(makeEl('input',null,{
        placeholder:'New Project',
        id: 'new-project-field'
    }))
    
    setProjectEvents()
}
