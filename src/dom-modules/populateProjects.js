import setProjectEvents from "../ event-modules/setProjectEvents.js";
import makeEl from "../helper-modules/makeElement.js"
import projects from "../helper-modules/projectsInstance.js"
import projectsContainer from "../dom-elements/projectsContainer.js";

export default function populateProjects() {
    projectsContainer.innerHTML = "";

    let activeProjects = projects.getActive()
    if (activeProjects.length) {
        for (let project of activeProjects) {
            projectsContainer.appendChild(makeEl('p', project.name, {
                'data-project-id': project.id,
                'data-status': project.state.status
            }))
        }
    }
    projectsContainer.appendChild(makeEl('input',null,{
        placeholder:'New Project',
        id: 'new-project-field'
    }))
    
    setProjectEvents()
}
