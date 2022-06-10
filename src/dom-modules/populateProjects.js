import setProjectEvents from "../ event-modules/event-setters/setProjectEvents.js";
import makeEl from "../helper-modules/makeElement.js"
import projects from "../helper-modules/projectsInstance.js"
import elements from "../dom-elements/dom-elements.js";

const projectsContainer = elements.containers.projectsContainer

export default function populateProjects() {
    projectsContainer.innerHTML = "";

    // Populate list with active projects (Projects with visibility = true)
    let activeProjects = projects.getActive()
    if (activeProjects.length) {
        for (let project of activeProjects) {
            projectsContainer.appendChild(makeEl('p', project.name, {
                'data-project-id': project.id,
                'data-status': project.state.status
            }))
        }
    }
    // Append New Project input in the end
    projectsContainer.appendChild(makeEl('input',null,{
        placeholder:'New Project',
        id: 'new-project-field'
    }))
    
    setProjectEvents() // Add listeners to the project names and input field
}
